import stopwords from "./stopwords"
import * as tf from "@tensorflow/tfjs"
import * as tsne from "@tensorflow/tfjs-tsne"
import { uniq, flatten, sum, range, countBy } from "lodash"
import nmf from "./nmf"
import basicTSNE from "tsne"

tf.setBackend("webgl")

export const paperToUrl = ({ id }) => `https://openreview.net/forum/?id=${id}`

const stringCount = (haystack, needle) =>
  haystack
    .toLowerCase()
    .replace(/-/g, " ")
    .split(needle.toLowerCase().replace(/-/g, " ")).length - 1

export const score = (paper, term) => {
  const { title, abstract, keywords } = paper.content
  const titleVal = stringCount(title, term)
  const tagVal = stringCount(keywords.join(" "), term)
  const tldrVal = stringCount(paper.content["TL;DR"] || "", term)
  const abstractVal = stringCount(abstract, term)
  return 2.5 * titleVal + 1.5 * tldrVal + abstractVal
}

export const toGrid = embedding => {
  // add index to data so we can access embedding after we filter
  const grid = getGrid(embedding)

  return embedding.map((row, index) => {
    const x = grid[index].col
    const y = grid[index].row

    return {
      x,
      y,
    }
  })
}

export const getGrid = embedding => {
  const size = Math.floor(Math.sqrt(embedding.length))
  const costs = embedding.map(d =>
    range(embedding.length).map(k => {
      const i = k % size,
        j = (k - i) / size
      const dx = d[0] - i - 0.5,
        dy = d[1] - j - 0.5
      return dx * dx + dy * dy
    }),
  )

  const grid = lap(size * size, costs)

  // https://bl.ocks.org/Fil/6d0abd3e94aff9ff40eb85e33a11f31b

  const newEmbedding = embedding.map(() => ({}))
  grid.col.map((c, k) => {
    const i = k % size,
      j = (k - i) / size
    newEmbedding[c].col = i
    newEmbedding[c].row = j
  })
  return newEmbedding
}

const toArray = async tensor => {
  const height = tensor.shape[0]
  const width = tensor.shape[1]
  const rowsData = await tensor.data()

  const rows = range(height).map(row =>
    range(width).map(col => rowsData[row * width + col]),
  )

  return rows
}

const runTSNE = (xs, { nComponents }) => {
  const opt = new basicTSNE.tSNE({ dim: nComponents })
  opt.initDataRaw(xs)
  range(1200).map(() => opt.step())
  const vals = opt.getSolution()
  return vals
}

export const run = async papers => {
  console.log("running")
  /*
  const df1 = countBy(flatten(papers.map(paperString).map(toWords)))

  const df = Object.keys(df1).reduce((obj, word) => {
    if (df1[word] < 3) {
      return obj
    }

    return { ...obj, [word]: df1[word] }
  })
  */

  const allTags = countBy(
    flatten(
      papers.map(paper => paper.content.keywords.map(k => k.toLowerCase())),
    ),
  )

  const manualTags = [
    "convolutional",
    "recurrent",
    `reinforcement`,
    `transforer`,
    `information`,
    `robotics`,
    `safety`,
    `genetic`,
    `clustering`,
    "transformer",
    `bayesian`,
    `autoencoder`,
    `memor`,
    `heirarchical`,
    `variational`,
    `generative`,
    "gan",
    `graph`,
    `outlier`,
    `dropout`,
    `lstm`,
    `interpretability`,
    "adversarial",
    "gradient descent",
    `meta-learning`,
    `security`,
    `nlp`,
  ]

  const tags = uniq([
    ...Object.keys(allTags).filter(tag => allTags[tag] > 3),
    ...manualTags,
  ])

  const df = tags.map(tag => sum(papers.map(paper => score(paper, tag))))

  const papersWithFeatures = papers.map(paper => {
    // tf-idf
    const features = tags.map(
      (tag, index) => score(paper, tag) / df[index] || 0,
    )

    return { ...paper, features }
  })

  const allFeatures = papersWithFeatures.map(({ features }) => features)

  // running nmf
  // const { W, H } = await nmf(tf.tensor(allFeatures), { topics: 10 })
  // const tsneOpt = tsne.tsne(tf.tensor(allFeatures))
  // await tsneOpt.compute(1000)
  // const WList = await toArray(W)
  const coordinates = runTSNE(allFeatures, { nComponents: 2 }) // await tsneOpt.coordsArray()
  // return coordinates.map(row => ({ x: row[0], y: row[1] }))
  const val = {
    coordinates,
    grid: toGrid(coordinates),
    colors: runTSNE(allFeatures, { nComponents: 1 }),
  }
  console.log("got grid and tsne")

  return val
}
