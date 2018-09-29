import { observable, toJS } from "mobx"
import { isNumber, sum, memoize } from "lodash"
import ActiveStore from "./activeStore"
import EPubStore from "./ePubStore"

const currentUser = "NC"
const url = new URL(window.location.href)

const getQuery = name =>
  url.searchParams.has(name) ? +url.searchParams.get(name) : null

let urlChapter = getQuery("chapter")
let urlSection = getQuery("section")

// 0-indexing
if (isNumber(urlChapter)) {
  urlChapter -= 1
}

if (isNumber(urlSection)) {
  urlSection -= 1
}

export default class FocusStore {
  @observable
  sections = []
  bookID = url.pathname.split(`/read/`)[1].split("/")[0]

  @observable
  isPlaying = false

  @observable
  activeSection = urlSection || -1

  @observable
  isSayingComments = true

  @observable
  activeChapter = urlChapter || 6

  @observable
  active = null

  @observable
  marks = localStorage.hasOwnProperty("marks")
    ? JSON.parse(localStorage.getItem("marks"))
    : {}

  setMarks = (key, marks) => {
    this.marks = {
      ...this.marks,
      [key]: marks,
    }

    localStorage.setItem("marks", JSON.stringify(toJS(this.marks)))
  }

  addMark = (key, mark) => {
    this.setMarks(key, [...(this.marks[key] || []), mark])
  }

  removeMarks = (key, filterFn) => {
    this.setMarks(key, (this.marks[key] || []).filter(filterFn))
  }

  getMarks = sectionKey => this.marks[sectionKey] || []
  getComments = key => this.getMarks(key).filter(i => i.type === "comment")
  getLikes = key => this.getMarks(key).filter(i => i.type === "like")

  @observable
  comments = {}

  @observable
  ePubStore = null

  constructor() {
    window._store = this
    this.start()
  }

  get chapterNames() {
    return this.ePubStore.chapters.map(i => {
      const p = i.querySelector("p")
      return p && p.textContent
    })
  }

  get activeChapterTitle() {
    if (this.sections.length === 0) return "loading"
    return Array.from(
      this.ePubStore.chapters[this.activeChapter].querySelectorAll("p"),
    )[0].textContent
  }

  niceTime = seconds => {
    if (seconds < 60) {
      return Math.floor(seconds) + " seconds"
    }

    const minutes = seconds / 60
    if (minutes < 60) {
      return Math.floor(minutes) + " minutes"
    }

    const hours = minutes / 60
    return Math.floor(hours) + " hours"
  }

  getSectionKey = (chapter, section) => `${chapter}:${section}`
  getSections = memoize(index => this.ePubStore.getChapter(index))

  get activeSectionKey() {
    return this.getSectionKey(this.activeChapter, this.activeSection)
  }

  onComment = (key, text) => {
    if (text.trim().length === 0) {
      return false
    }

    this.addMark(key, { type: "comment", user: currentUser, text })
  }

  start = async () => {
    await this.watchBookId()
    const startChapter = (window.location + "").indexOf("/diamond") > -1 ? 6 : 0
    await this.setChapter(urlChapter || startChapter)
    setTimeout(() => {
      this.setSection(urlSection || 0)
    }, 300)
  }

  setChapter = async index => {
    if (index < 0 || index > this.ePubStore.chapters.length - 1) {
      return false
    }
    this.activeChapter = index
    this.sections = this.getSections(index)
    return true
  }

  chapterETA = index => {
    const sections = this.getSections(index)
    return sum(
      sections.map(section => {
        const words = section.length / 6
        return words * 0.6
      }),
    )
  }

  watchBookId = async () => {
    let url = `${Settings.localhost}:8000/diamond.epub`
    if (!Settings.airplaneMode) {
      this.urlRef = firebase.database().ref(`urls/${this.bookID}`)
      const snapshot = await this.urlRef.once("value")
      url = snapshot.val().bookUrl
    }
    this.ePubStore = new EPubStore({ url })
    await this.ePubStore.start()
    return true
  }

  toggleLike = (key = this.activeSectionKey, user = currentUser) => {
    if (this.isLiked(key, user)) {
      this.removeMarks(
        key,
        mark => !(mark.type === "like" && mark.user === user),
      )
    } else {
      this.addMark(key, { type: "like", user })
    }
  }

  isLiked = (key, _user = currentUser) => {
    return (
      this.getMarks(key).filter(
        ({ type, user }) => type === "like" && user === _user,
      ).length > 0
    )
  }

  onToggleComments = () => {
    this.isSayingComments = !this.isSayingComments
  }

  onTogglePause = () => {
    this.isPlaying = !this.isPlaying
    if (this.isPlaying) {
      this.active.onPlay()
    } else {
      this.active.onPause()
    }
  }

  setSection = index => {
    this.activeSection = index
    this.active = new ActiveStore({
      key: this.getSectionKey(this.activeChapter, index),
      chapterIndex: this.chapterIndex,
      sectionIndex: this.sectionIndex,
      parentStore: this,
      index,
      text: this.sections[index],
      onFinish: this.onNext,
      onBefore: this.onPrevious,
    })
  }

  onPrevious = async () => {
    if (this.activeSection === 0) {
      if (await this.setChapter(this.activeChapter - 1)) {
        this.setSection(this.sections.length - 1)
      }
    } else {
      this.setSection(this.activeSection - 1)
    }
  }

  onNext = async () => {
    if (this.activeSection === this.sections.length - 1) {
      if (await this.setChapter(this.activeChapter + 1)) {
        this.setSection(0)
      }
    } else {
      this.setSection(this.activeSection + 1)
    }
  }
}
