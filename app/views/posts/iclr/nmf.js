import * as tf from "@tensorflow/tfjs"
import { range, reverse } from "lodash"

// from https://github.com/tensorflow/tfjs-tsne/blob/f02553ff756d6818bc54f6e9c1091bc64fa2c79a/src/tsne.ts#L296
export default async function nmf(tensor, options = {}) {
  const { iterations = 200, topics = 10, learningRate = 3e-1 } = options

  const W = tf.variable(tf.randomNormal([tensor.shape[0], topics])) //(tensor.shape))
  const H = tf.variable(tf.randomNormal([topics, tensor.shape[1]])) //([tensor.shape[1], tensor.shape[0]]))

  const predict = (w, h) => {
    return w.matMul(h)
  }

  const loss = (prediction, label) => {
    const meanSquareError = prediction
      .sub(label)
      .square()
      .mean()

    return meanSquareError
  }

  const train = async iterations => {
    const optimizer = tf.train.adam(learningRate)

    for (const iter of range(iterations)) {
      optimizer.minimize(() => {
        const l = loss(predict(W, H), tensor)
        return l
      })
      await tf.nextFrame()
    }

    return { W, H }
  }

  await train(iterations)

  const finalLoss = await loss(predict(W, H), tensor).data()

  return { W, H, loss: finalLoss }
}
