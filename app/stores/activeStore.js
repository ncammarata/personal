import { observable } from "mobx"
import tokenizer from "sbd"
import { flatten, memoize } from "lodash"

export default class ActiveStore {
  @observable
  sentenceIndex = 0

  @observable
  wordIndex = -1

  sentences = []
  words = []
  timeoutID = null

  @observable
  ePubStore = null

  @observable
  bookID = null

  @observable
  activeComment = null

  constructor({
    text,
    key,
    onFinish,
    onBefore,
    chapterIndex,
    sectionIndex,
    parentStore,
  }) {
    this.key = key
    this.chapterIndex = chapterIndex
    this.sectionIndex = sectionIndex
    this.parentStore = parentStore
    this.onBefore = onBefore
    this.onFinish = onFinish

    const rawSentences = tokenizer.sentences(text)

    this.sentences = rawSentences.map(sentence => sentence.split(" "))

    rawSentences.map(sentence => this.prepareAudio(sentence))

    this.words = flatten(
      this.sentences.map((words, sentenceIndex) =>
        words.map((word, wordIndex) => ({ word, wordIndex, sentenceIndex })),
      ),
    )

    if (parentStore.isPlaying) {
      this.setTimeout(this.onNextWord, 500)
    }
  }

  get likes() {
    return this.parentStore.getLikes(this.key)
  }

  get comments() {
    return this.parentStore.getComments(this.key)
  }

  onPreviousSentence = () => {
    if (this.sentenceIndex === 0) {
      this.onBefore()
      return
    }

    // we're at the beginning, let's go to last sentence
    if (this.wordIndex <= 0) {
      this.sentenceIndex -= 1
      this.wordIndex = -1

      const nextWord = this.sentences[this.sentenceIndex][0]
      this.setTimeout(this.onNextWord, nextWord.length * 50)
      return
    }

    this.wordIndex = -1
    const nextWord = this.sentences[this.sentenceIndex][0]
    this.setTimeout(this.onNextWord, nextWord.length * 30)
  }

  onNextSentence = async () => {
    if (this.sentenceIndex < this.sentences.length - 1) {
      this.sentenceIndex += 1
      this.wordIndex = -1
      const nextWord = this.sentences[this.sentenceIndex][0]
      this.setTimeout(this.onNextWord, nextWord.length * 30)
      return
    }

    if (this.parentStore.isSayingComments) {
      let commentIndex = 0
      for (const comment of this.comments) {
        this.activeComment = commentIndex
        await this.say(`Comment by ${comment.user}:`)
        await this.say(comment.text, "en-US-Wavenet-D")
        commentIndex += 1
      }

      this.activeComment = null
    }

    this.onFinish()
  }

  clearTimer = () => {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID)
    }
  }

  getAudioUrl = (text, voice) =>
    `${
      Settings.apiBase
    }/speak?text=${text}&voice=${voice}&pitch=-2&speakingRate=1.7`

  getAudio = memoize((key, text, voice = this.defaultVoice) => {
    return new Audio(this.getAudioUrl(text, voice))
  })

  prepareAudio = (text, voice = this.defaultVoice) => {
    this.getAudio(this.audioKey(text, voice), text, voice)
  }

  defaultVoice = "en-US-Wavenet-D"
  audioKey = (text, voice) => `${voice}:${text}`

  say = async (text, voice = this.defaultVoice) =>
    new Promise(resolve => {
      if (Settings.airplaneMode) {
        return setTimeout(resolve, 1500)
      }
      // const text = this.paragraphs[index]
      if (!window.currentAudio) {
        const audio = this.getAudio(this.audioKey(text, voice), text, voice)
        audio.type = "audio/mp3"

        window.currentAudio = audio
      } else {
        window.currentAudio.src = this.getAudioUrl(text, voice)
        window.currentAudio.currentTime = 0
        window.currentAudio.load()
      }

      window.currentAudio.play()

      const onEnd = () => {
        window.currentAudio.removeEventListener("ended", onEnd)
        resolve()
      }
      window.currentAudio.addEventListener("ended", onEnd)
    })

  stopTimers = () => {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID)
    }

    if (this.currentAudio) {
      this.currentAudio.pause()
    }
  }

  setTimeout = (fn, ms) => {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID)
    }

    // only do things if we're playing
    if (this.parentStore.isPlaying) {
      this.timeoutID = setTimeout(fn, ms)
    }
  }

  onPlay = () => {
    if (this.currentAudio) {
      this.currentAudio.play()
    }
    this.setTimeout(this.onNextWord, 300)
  }

  onPause = () => {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID)
    }
    if (this.currentAudio) {
      this.currentAudio.pause()
    }
  }

  audioFinished = false

  onNextWord = async () => {
    const toNextWord = () => {
      this.wordIndex += 1
      const nextWord = this.sentences[this.sentenceIndex][this.wordIndex]
      this.setTimeout(
        this.onNextWord,
        startOfSentence ? 700 : nextWord.length * 30,
      )
    }

    const startOfSentence = this.wordIndex === 0
    if (startOfSentence) {
      toNextWord()
      await this.say(this.sentences[this.sentenceIndex].join(" "))
      this.onNextSentence()
      return
    }

    if (this.wordIndex < this.sentences[this.sentenceIndex].length - 1) {
      toNextWord()
      return
    }
  }
}
