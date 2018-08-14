import { observable, observe, toJS } from "mobx"
import { getBook, getTOC, getChapters, getTitle } from "./lib/book"
import { smoothScrollTo } from "./helpers"
import { omit, debounce, uniqBy, findIndex } from "lodash"

const whale = require("../books/whale.epub")
const dracula = require("../books/dracula.epub")
const dorian = require("../books/dorian.epub")
const alice = require("../books/alice.epub")

const books = {
  whale,
  dracula,
  dorian,
  alice,
}

export default class Store {
  @observable
  book = null
  @observable
  comments = {}
  @observable
  currentTitle = null
  commentsRef = null

  @observable
  page = 0

  toHref = el => {
    const { top, height } = el.getClientRects()[0]

    smoothScrollTo(0, top - height - 18)
  }

  deleteComment = key => {
    if (!confirm("Are you sure you would like to delete this comment?")) {
      return
    }

    const ID = Object.keys(this.comments).filter(
      para => this.comments[para].selected.hashCode() === key,
    )[0]
    const comments = omit(toJS(this.comments), ID)
    this.comments = comments
  }

  onBookRender = () => {
    this.pageTops = uniqBy(
      Array.from(document.querySelectorAll("pageContainer")),
      el => el.getAttribute("number"),
    ).map(el => el.getBoundingClientRect().y)
  }

  toPage = page => {
    smoothScrollTo(0, this.store.pageTops[page] - 60)
  }

  setTitle = async url => {
    const book = await getBook(url)
    const chapters = await getChapters(book, 0)

    this.book = {
      title: await getTitle(book),
      chapters,
      toc: await getTOC(book),
    }
  }

  addComment = (key, val) => {
    const comments = { ...toJS(this.comments), [key]: val }
    this.comments = comments
    // this.commentsRef.set(comments)
  }

  setComments = snapshot => {
    const val = snapshot.val()
    if (val) {
      this.comments = snapshot.val()
    }
  }

  getPage = scrollY => {
    return Math.max(0, findIndex(this.pageTops, top => top > scrollY))
  }

  constructor(bookName) {
    document.addEventListener(
      "scroll",
      debounce(() => {
        this.page = this.getPage(window.scrollY)
      }, 100),
    )

    window.setTitle = this.setTitle

    /*
    observe(
      this,
      "currentTitle",
      () => {
        if (this.commentsRef) {
          this.commentsRef.off("value", this.setComments)
        }

        this.commentsRef = firebase
          .database()
          .ref(`${this.currentTitle}/comments`)

        this.commentsRef.on("value", this.setComments)
      },
      true,
    )
    */

    const url = window.location + ""
    let bookUrl = null
    if (url.indexOf("?book=") > -1) {
      bookUrl = books[url.split(`?book=`)[1]]
    } else {
      const base = `http://localhost:3000/download?url=`
      bookUrl = base + url.split(`?bookUrl=`)[1]
    }

    console.log("book url is", bookUrl)

    this.setTitle(bookUrl)
  }
}
