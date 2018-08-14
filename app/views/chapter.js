import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser"
import { observer } from "mobx-react"
import Comments from "./comments"

/*
  <p>hello <i>to the</i> world</p>
*/

@observer
export default class Chapter extends Component {
  show() {
    const { html, store } = this.props
    store.comments

    const transform = node => {
      if (
        node.name === "a" &&
        node.attribs &&
        node.attribs.class === "pageno"
      ) {
        return (
          <pageContainer number={node.attribs.id}>{node.data}</pageContainer>
        )
      }

      if (node.name === "p") {
        const text = node.children.map(child => child.data).join("")
        if (store.comments && text && store.comments[text.hashCode()]) {
          const comment = store.comments[text.hashCode()]

          const pieces = text.split(comment.selected)

          return (
            <p className="para">
              {pieces[0]}
              <highlight style={{ display: "inline" }}>
                {comment.selected}
              </highlight>
              {pieces[1]}
              <Comments store={store} list={[comment]} />
            </p>
          )
        }

        if (!text || (text + "").trim().length === 0) {
          return null
        }

        return <p className="para">{text}</p>
      }
    }

    const options = {
      decodeEntities: true,
      transform,
    }

    return <chapter>{ReactHtmlParser(html, options)}</chapter>
  }

  styles = {
    img: {
      display: "none",
    },
  }
}
