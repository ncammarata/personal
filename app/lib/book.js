import JSZip from "jszip"
import { includes, sortBy, last } from "lodash"
import cheerio from "cheerio"
import { parse } from "himalaya"

const getExtension = async (book, ext) => {
  const files = Object.keys(book.files) // an array of ZipEntry records

  for (const file of files) {
    if (file.indexOf(ext) > -1) {
      return await book.file(file).async("string")
    }
  }

  return null
}

const getTOCRaw = async book => {
  return await getExtension(book, "ncx")
}

export const getBook = async url => {
  const buffer = await (await fetch(url)).arrayBuffer()
  const newZip = new JSZip()
  const book = await newZip.loadAsync(buffer)
  return book
}

export const getTitle = async book => {
  const xml = await getExtension(book, "opf")
  // replace tag to make it searchable
  const $ = cheerio.load(xml.replace(/dc\:/g, "dcX"))
  return $("dcXtitle").text()
}

export const getTOC = async book => {
  const json = parse(await getTOCRaw(book))

  const cleanPoint = node => {
    if (node.type === "text") {
      if (node.content.trim().length === 0) return null
      return node.content
    }

    if (node.attributes.length === 0) {
      delete node.attributes
    }

    if (node.children) {
      node.nodes = node.children.map(cleanPoint).filter(val => val !== null)
    }

    node.name =
      { navpoint: "point", navlabel: "label" }[node.tagName] || node.tagName
    delete node.tagName
    delete node.type
    delete node.children

    return node
  }

  return json
    .filter(({ tagName, type }) => tagName === "ncx")[0]
    .children.filter(({ tagName }) => tagName === "navmap")[0]
    .children.map(cleanPoint)
    .filter(val => val !== null)
}

export const getChapters = async book => {
  let chapters = []

  const files = Object.keys(book.files)
  const toc = await getTOCRaw(book)

  for (const file of files) {
    if (includes(["html", "xhtml", "htm"], last(file.split(".")))) {
      chapters.push({
        name: file,
        text: cheerio
          .load(await book.file(file).async("string"))("body")
          .html(),
      })
    }
  }

  const sorted = sortBy(
    chapters.map(chapter => ({ ...chapter, index: toc.indexOf(chapter.name) })),
    "index",
  )
  const final = sorted.map(({ text }) => text).slice(0, 10)
  return final
}
