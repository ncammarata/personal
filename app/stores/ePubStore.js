import { getBook } from "../lib/book"
import { observable } from "mobx"

export default class EPubStore {
  url = null

  @observable
  loaded = false

  start = async () => {
    const base = `${Settings.apiBase}/download?url=`
    const downloadUrl = base + this.url

    const book = await getBook(downloadUrl)
    this.toc = await book.loaded.navigation
    const meta = await book.loaded.metadata
    this.title = meta.title
    this.book = book

    this.chapters = await Promise.all(
      book.spine.spineItems
        // .slice(0, 12)
        .map(async item => await item.load(book.load.bind(book))),
    )

    this.loaded = true

    return true
  }

  getChapter = index => {
    return Array.from(this.chapters[index].querySelectorAll("p"))
      .map(el => el.textContent)
      .filter(text => text.trim().length > 0)
  }

  constructor({ url }) {
    this.url = url
  }
}
