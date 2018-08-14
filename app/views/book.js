import { HotKeys } from "react-hotkeys"
import { observer } from "mobx-react"
import { smoothScrollTo } from "../helpers"
import Store from "../store"
import Chapter from "./chapter"
import TOC from "./TOC"
import Top from "./top"
import Toolbar from "./toolbar"
import "react-spinkit/css/loaders-css.css"
import "react-spinkit/css/folding-cube.css"

const map = {
  nextPage: "right",
  prevPage: "left",
}

@observer
export default class Book extends Component {
  handlers = {
    nextPage: () => {
      smoothScrollTo(0, window.scrollY + window.innerHeight, 225)
    },
    prevPage: () => {
      smoothScrollTo(0, window.scrollY - window.innerHeight, 225)
    },
  }

  componentWillMount() {
    this.store = new Store()
    window._store = this.store
  }

  componentDidMount() {
    setTimeout(() => {
      this.store.onBookRender()
    }, 500)
  }

  show() {
    const { book } = this.store

    if (!book) {
      return (
        <loading>
          <Top store={this.store} />
          Words Coming Soon
        </loading>
      )
    }

    return (
      <book style={{ padding: 10 }}>
        <Toolbar store={this.store} />
        <HotKeys keyMap={map}>
          <mainArea>
            <Top store={this.store} />
            <content>
              <HotKeys handlers={this.handlers}>
                <TOC store={this.store} />
                {book.chapters.map(html => (
                  <Chapter store={this.store} html={html} />
                ))}
              </HotKeys>
            </content>
          </mainArea>
        </HotKeys>
      </book>
    )
  }

  styles = {
    content: {
      margin: 30,
      marginTop: 60,
      maxWidth: 800,
      alignSelf: "center",
    },
    book: {
      display: "block",
      background: "white",
    },

    loading: {
      fontSize: 32,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.6,
      marginTop: 200,
    },
  }
}
