function Random(seed) {
  this.seed = seed
  this.random = function() {
    let x = Math.sin(this.seed) * 10000
    this.seed++
    return x - Math.floor(x)
  }

  this.gaussian = function(mean, std) {
    var rand = 0
    for (var i = 0; i < 6; i += 1) {
      rand += this.random()
    }

    return ((rand - 3) / 6) * std + mean
  }

  this.unif = function(a, b) {
    return this.random() * (b - a) + a
  }
}

function tree(x, y, angle, depth, random, config, ctx, frame) {
  if (depth >= config.maxDepth) {
    return
  }

  let _x = x
  let _y = y
  let _angle = angle
  let length = (config.scale / depth) * random.gaussian(1, config.lengthVar)
  let segments = length / 10

  ctx.lineWidth = config.lineWidth / Math.pow(config.lineWidthFalloff, depth)
  ctx.strokeStyle = "rgb(83,53,10)"
  ctx.lineCap = "round"

  let curve_dir = -1 // random.unif(0, 1) < 0.5 ? -1 : 1
  let curve = config.curveAmount * curve_dir
  if (depth == 1) {
    curve *= 0.25
  }

  for (let i = 0; i < segments; i++) {
    // let up = angle < -Math.PI / 2 ? Math.PI / 2 - angle : angle - Math.PI / 2
    // let up = Math.PI / 2 - angle

    let up = Math.PI / 2 - angle

    _angle += curve + up * config.upAmount * depth
    _x = x + 20 * Math.cos(angle)
    _y = y + 20 * Math.sin(angle)

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(_x, _y)
    ctx.stroke()
    ctx.closePath()

    x = _x
    y = _y
    angle = _angle

    if (random.unif(0, 1) < config.branchiness) {
      let dir = random.unif(0, 1) < 0.5 ? -1 : 1
      tree(
        x,
        y,
        angle + (config.spread / 2) * dir,
        depth + 1,
        random,
        config,
        ctx,
        frame,
      )
      ctx.lineWidth =
        config.lineWidth / Math.pow(config.lineWidthFalloff, depth)
    }
  }

  let dir = random.unif(0, 1) < 0.5 ? -1 : 1
  tree(x, y, angle + config.spread * dir, depth + 1, random, config, ctx, frame)
  tree(
    x,
    y,
    angle + config.spread * -dir,
    depth + 1,
    random,
    config,
    ctx,
    frame,
  )

  if (depth >= config.maxDepth - 2) {
    let a = 0.8 + 0.2 * Math.sin(frame / 50)
    let h = random.gaussian(28, 30)
    let s = random.unif(90, 100)
    let l = random.unif(38, 45)
    let r = Math.max(5, random.gaussian(10, 35))

    ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, ${a})`

    // let r = random.gaussian(6, 1) + Math.sin(frame / 50)
    // let r = 6 + 1 * Math.sin(frame / 30)
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }
}

export default class Tree extends Component {
  state = { time: 0 }
  config = {
    seed: 310,
    maxDepth: 10,
    scale: 100,
    lineWidth: 44,
    lineWidthFalloff: 1.6,
    lengthVar: 2.3,
    branchiness: 0.034,
    curveAmount: 0.15,
    upAmount: 0.0085,
    spread: 0.4,
    seed: 31,
  }

  draw = canvas => {
    if (!canvas) {
      return false
    }

    const { time } = this.state
    let ctx = canvas.getContext("2d")
    let random = new Random(this.config.seed)
    let start_angle = -1 * (Math.PI / 2) + random.gaussian(0, 0.5)

    const delta = Math.sin(time / 140) * 0.02 + this.config.curveAmount

    const newConfig = {
      // upAmount: Math.sin(time / 10) * 0.0004 + this.config.upAmount,
      spread: 0.02 * Math.sin(time / 30) + this.config.spread,
      curveAmount: -0.15 + Math.pow(delta, 0.8),
      scale: this.config.scale * this.props.scale,
      maxDepth: this.props.maxDepth,
    }

    tree(
      400,
      this.props.height ? this.props.height * 2 : 1000,
      start_angle,
      1,
      random,
      Object.assign({}, this.config, this.props.config || {}, newConfig),
      ctx,
      time,
    )

    requestAnimationFrame(() => {
      this.setState({ time: time + 1 })
    })
  }

  show() {
    const { right, width = 500, height = 500 } = this.props

    return (
      <canvas
        style={{ width, height, transform: `translateX(${right}px)` }}
        ref={this.draw}
        key={Math.random()}
        width={width * 2}
        height={height * 2}
      />
    )
  }

  styles = {
    canvas: {
      position: "absolute",
      left: 0,
      top: 0,
    },
  }
}
