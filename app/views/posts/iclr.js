import allNotes from "./iclr/notes.json"
import { run, score, paperToUrl } from "./iclr/helpers"
import { H2 } from "./components"
import { scaleLinear } from "d3-scale"
import { interpolateRainbow } from "d3-scale-chromatic"
import { min, max, debounce, memoize } from "lodash"
import cachedData from "./iclr/cache.json"
import EllipsisText from "react-ellipsis-text"
import { search } from "react-icons-kit/icomoon/search"
import { Icon } from "react-icons-kit"
import Color from "color"

const searchIcon = search

const argMax = xs =>
  xs.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1]

const papers = allNotes.notes.filter(
  paper => paper.content.title.trim().length > 0,
)

window._papers = papers

const cache = cachedData

// should be sqrtable
const rows = 35
const take = Math.pow(rows, 2)
const easing = `cubic-bezier(.36, .07, .19, .97)`

class Paper extends Component {
  show() {
    const { paper, color } = this.props
    const { title, keywords, abstract } = paper.content
    const tldr = paper.content["TL;DR"]
    console.log("color is", color)

    return (
      <pdf
        style={{
          border: `1px solid ${Color(color)
            .darken(0.15)
            .hsl()
            .string()}`,
          boxShadow: `1px 1px 20px ${Color(color)
            .fade(0.65)
            .hsl()
            .string()}`,
        }}
      >
        <header>{title}</header>
        {tldr && tldr.length > 0 && (
          <tldr>
            <label>TLDR:</label> {tldr}
          </tldr>
        )}
        <abstract>
          <label>Abstract:</label> <EllipsisText text={abstract} length={620} />
        </abstract>
      </pdf>
    )
  }

  styles = {
    pdf: {
      width: 550,
      transition: "border 300ms ease-in",
      padding: `15px 0px`,
      borderRadius: 5,
      height: 600,
    },
    label: {
      display: "inline",
      color: `#8c1b13`,
      fontWeight: 700,
    },
    tags: {
      flexFlow: "row",
      justifyContent: "space-between",
    },
    border: {
      height: 1,
      width: "100%",
      marginTop: 20,
      marginBottom: 20,
      background: `rgba(0, 0, 0, 0.3)`,
    },
    tldr: {
      margin: `10px 20px 5px 20px`,
      fontWeight: 400,
      display: "block",
    },
    tag: {
      color: `rgba(0, 0, 0, 0.7)`,
    },
    header: {
      margin: `10px auto`,
      textAlign: "center",
      fontSize: 18,
      fontWeight: 600,
      width: 400,
      color: `rgba(0, 0, 0, 0.6)`,
    },
    abstract: {
      fontSize: 16,
      margin: `5px 20px 0px 20px`,
      lineHeight: 1.2,
      overflow: "scroll",
      display: "block",
      color: `#333`,
      fontWeight: 300,
      width: 500,
    },
  }
}

class Radio extends Component {
  state = { val: false }
  select = val => {
    this.setState({ val })
    setTimeout(() => {
      this.props.onSelect(val)
    }, 400)
  }

  componentWillMount() {
    this.setState({ val: this.state.tsne })
  }

  show() {
    const { tsne } = this.props
    const { val } = this.state

    return (
      <radio>
        <ball $right={!val} />
        <buttons>
          <btn $active={val} onClick={() => this.select(true)}>
            TSNE
          </btn>
          <btn $active={!val} onClick={() => this.select(false)}>
            Grid
          </btn>
        </buttons>
      </radio>
    )
  }

  styles = {
    radio: {
      position: "relative",
    },
    ball: {
      position: "absolute",
      transition: "left 300ms cubic-bezier(0.680, -0.550, 0.265, 1.550)",
      width: 10,
      height: 10,
      borderRadius: 10,
      background: "rgb(255, 113, 77)",
      top: -4,
      left: 30,
    },
    right: {
      left: 92,
    },
    buttons: {
      flexFlow: "row",
      marginTop: 10,
      justifyContent: "space-between",
    },
    btn: {
      marginLeft: 5,
      userSelect: "none",
      marginRight: 5,
      padding: `10px 10px`,
      opacity: 0.6,
      fontSize: 14,
      fontWeight: "bold",
      padding: `3px 8px`,
      borderRadius: 5,
      border: `1px solid rgba(0, 0, 0, 0.1)`,
      boxShadow: `1px 1px 5px rgba(0, 0, 0, 0.1)`,
    },
    active: {
      opacity: 1,
    },
  }
}

const tileSize = 15

export default class ICLR extends Component {
  state = {
    components: null,
    grid: null,
    colors: null,
    paperIndex: null,
    coordinates: null,
    scores: null,
    paper: null,
    tsne: false,
    search: "",
    searchText: "",
  }

  search = search => {
    this.setState({ search })

    if (search.trim().length === 0) {
      this.scoreScale = null
      return true
    }

    const scores = papers.slice(0, take).map(paper => score(paper, search))
    this.scoreScale = scaleLinear().domain([min(scores), max(scores)])
    this.setState({ scores })
  }

  searchToColor = memoize(search => {
    const scores = papers.slice(0, take).map(paper => score(paper, search))
    const index = argMax(scores)
    return interpolateRainbow(this.colorsScale(this.state.colors[index]))
  })

  searchDebounced = debounce(
    search => {
      this.search(search)
    },
    300,
    true,
  )

  scoreScale = null
  colorsScale = null

  setSearchText = searchText => {
    this.searchDebounced(searchText)
    this.setState({ searchText })
  }

  refresh = async () => {
    const { grid, colors, coordinates } = await run(papers.slice(0, take))
    localStorage.setItem(
      "results",
      JSON.stringify({ grid, colors, coordinates }),
    )
    this.setState({ grid, colors, coordinates })
  }

  lastSearch = ""
  getLabel = (text, style = {}) => {
    return (
      <holder style={style}>
        <legendItem
          onMouseEnter={() => {
            this.lastSearch = this.state.searchText
            this.search(text)
          }}
          onMouseLeave={() => {
            this.search(this.lastSearch)
            this.lastSearch = ""
          }}
          onClick={() => this.setSearchText(text)}
        >
          <square
            style={{
              background: this.searchToColor(text),
            }}
          />
          <legendText>{text}</legendText>
        </legendItem>
      </holder>
    )
  }

  componentWillMount() {
    try {
      const { grid, colors, coordinates } =
        cache || JSON.parse(localStorage.getItem("results"))

      this.setState({ grid, colors, coordinates })
    } catch (err) {}

    window.runGrid = () => {
      this.refresh()
    }

    window.setSearch = search => {
      this.setState({ search })
    }
  }

  renderContent() {
    const {
      grid,
      search,
      colors,
      searchText,
      coordinates,
      paper,
      paperIndex,
      scores,
      tsne,
    } = this.state
    const searching = search.trim().length > 0

    this.colorsScale = scaleLinear()
      .domain([min(colors), max(colors)])
      .range([0.15, 0.95])

    let scaleX, scaleY

    if (tsne) {
      const xs = coordinates.map(x => x[0])
      const ys = coordinates.map(x => x[1])

      scaleX = scaleLinear()
        .domain([min(xs), max(xs)])
        .range([0, 1])

      scaleY = scaleLinear()
        .domain([min(ys), max(ys)])
        .range([0, 1])
    }

    const legend = [
      "Interpretability",
      `GAN`,
      `Multi-agent`,
      `Attention`,
      `Safety`,
      `Bayesian`,
      `Transfer Learning`,
      `Reinforcement Learning`,
      `Meta-Learning`,
    ]

    console.log("rendering")

    return (
      <container>
        <toolbar>
          <search>
            <Icon icon={searchIcon} size={14} style={{ opacity: 0.7 }} />
            <input
              type="search"
              placeholder="imitation learning"
              value={searchText}
              onChange={e => this.setSearchText(e.target.value)}
            />
          </search>
          {/* give time to update animation */}
          <Radio
            tsne={tsne}
            onSelect={tsne => {
              this.setState({ tsne })
            }}
          />
        </toolbar>
        <visual>
          <papers>
            <svg width={rows * tileSize} height={rows * tileSize} $papersInner>
              {papers.slice(0, take).map((paper, index) => {
                const x = tsne
                  ? scaleX(coordinates[index][0]) * 530
                  : grid[index].x * tileSize
                const y = tsne
                  ? scaleY(coordinates[index][1]) * 530
                  : grid[index].y * tileSize

                const opacity =
                  searching && this.scoreScale
                    ? this.scoreScale(scores[index])
                    : 1

                const background = interpolateRainbow(
                  this.colorsScale(colors[index]),
                )

                return (
                  <rect
                    $paper
                    key={index}
                    $tsnePoint={tsne}
                    x={x}
                    y={y}
                    fill={background}
                    style={{
                      // transform: `translate3d(${x}px, ${y}px, 0)`,
                      opacity,
                    }}
                    rx={tsne ? 5 : 0}
                    ry={tsne ? 5 : 0}
                    width={tileSize}
                    height={tileSize}
                    onMouseEnter={() =>
                      this.setState({ paper, paperIndex: index })
                    }
                    onClick={() => {
                      alert(`url is ${paperToUrl(paper)}`)
                    }}
                  />
                )
              })}
            </svg>
          </papers>
          <right>
            {colors && (
              <legendContainer>
                <legendHeader>Hover &amp; click to see clusters</legendHeader>
                <legendItems>
                  {legend.map(item => this.getLabel(item))}
                </legendItems>
              </legendContainer>
            )}
            {paper && (
              <paperView>
                <Paper
                  paper={paper}
                  color={interpolateRainbow(
                    this.colorsScale(colors[paperIndex]),
                  )}
                />
              </paperView>
            )}
          </right>
        </visual>
        <H2>Commentary</H2>
        <p>
          I built this visualization to help me understand the macro view of new
          papers submitted to conferences in machine learning. It uses natural
          language processing, matrix factorization, and t-SNE to visualize
          topics of submitted papers. I find that it's useful both to understand
          what sub-topics of ML seem to be most popular, but also to understand
          how the papers cluster by topic. For instance,&nbsp;
          <span
            style={{ fontWeight: "bold" }}
            onClick={() => {
              this.setSearchText("Safety")
            }}
          >
            Safety
          </span>{" "}
          papers seem to cluster in one area (and is small{" "}
          <img
            style={{ display: "inline", marginTop: 3 }}
            width={16}
            height={16}
            src={require("./iclr/sad.png")}
          />
          ), while{" "}
          <span
            style={{ fontWeight: "bold" }}
            onClick={() => {
              this.setSearchText("Interpretability")
            }}
          >
            Interpretability
          </span>{" "}
          seems to be more distributed over the subjects.
        </p>
        <H2>Credit</H2>
        <p>
          Above is a visual I built to understand papers submitted to the recent
          ICLR 2019 conference. I was inspired by{" "}
          <a href="https://twitter.com/Smerity">Smerity's</a> wonderful{" "}
          <a href="http://search.iclr2019.smerity.com/">
            ICLR 2019 searching page
          </a>{" "}
          and the data is from the associated{" "}
          <a href="https://github.com/Smerity/search_iclr_2019">GitHub repo</a>.
          The visualization was inspired by the matrix factorization example on
          Distill's{" "}
          <a href="https://distill.pub/2018/building-blocks/">
            Building Blocks
          </a>{" "}
          article.
        </p>
      </container>
    )
  }

  show() {
    const { grid } = this.state

    let content = <loading>loading</loading>

    if (grid) {
      content = this.renderContent()
    }

    return (
      <post>
        <h1>The Shape of ICLR 2019</h1>
        {content}
      </post>
    )
  }

  styles = {
    a: {
      display: "block",
    },
    search: {
      flexFlow: "row",
    },
    legendHeader: {
      fontWeight: 600,
      textAlign: "center",
      marginBottom: 10,
      marginLeft: -58,
      fontSize: 13,
    },
    legendItems: {
      flexFlow: "row",
      paddingLeft: 8,
      flexWrap: "wrap",
      width: 600,
      justifyContent: "space-between",
      alignSelf: "center",
    },
    legendItem: {
      margin: `5px 5px`,
      flexFlow: "row",
      alignItems: "center",
      fontSize: 13,
      fontWeight: "bold",
      width: 190,
    },
    legendText: {
      marginLeft: 8,
    },
    toolbar: {
      flexFlow: "row",
      alignItems: "center",
      borderTop: `1px solid rgba(0, 0, 0, 0.05)`,
      padding: `10px 0px`,
      justifyContent: "space-between",
      width: 527,
      borderBottom: `1px solid rgba(0, 0, 0, 0.05)`,
    },
    input: {
      padding: `3px`,
      WebkitAppearance: "textfield",
      fontSize: 18,
      border: `1px solid rgba(0, 0, 0, 0.0)`,
      marginLeft: 5,
      width: "90%",
      outline: "none",
    },
    search: {
      flexFlow: "row",
      paddingTop: 3,
      paddingBottom: 3,
      alignItems: "center",
      paddingLeft: 10,
      borderRadius: 5,
      border: `1px solid rgba(0, 0, 0, 0.1)`,
      width: 320,
    },
    visual: {
      width: 2000,
      height: 550,
      padding: 20,
      position: "relative",
      flexFlow: "row",
    },
    papers: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 560,
      height: 560,
    },
    paperInner: {
      position: "relative",
    },
    right: {
      position: "absolute",
      paddingTop: 10,
      left: 550,
      top: 20,
    },
    paperView: {
      marginTop: 20,
      height: 380,
    },
    tsnePoint: {
      borderRadius: 8,
      width: 8,
      height: 8,
    },
    big: {
      fontSize: 28,
    },
    square: {
      width: 15,
      height: 15,
    },
    paper: {
      WebkitBackfaceVisibility: "hidden",
      transition: `
        x 600ms ${easing} 700ms,
        y 600ms ${easing} 700ms,
        transform 600ms ${easing} 700ms,
        opacity 550ms ${easing}
      `.replace(/\n/g, " "),
      transform: `translate3d(0, 0, 0)`,
      width: tileSize,
      height: tileSize,
      position: "absolute",
      top: 0,
      left: 0,
    },
  }
}
