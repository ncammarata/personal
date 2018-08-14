import React from "react"
import { observer } from "mobx-react"

@observer
export default class TOC extends Component {
  show() {
    const { store } = this.props
    const { toc } = store.book

    const pointLevels = [
      {
        lineHeight: 1.5,
        fontWeight: 300,
        display: "block",
        marginTop: 5,
        marginBottom: 5,
        marginTop: 10,
        height: "auto",
      },
      {
        marginLeft: 15,
        fontWeight: 600,
        display: "block",
      },
    ]

    const goTo = text => {
      const cleanTitle = text => text.trim()

      const els = Array.from(document.querySelectorAll("h2")).filter(
        i => cleanTitle(i.innerText) === (text + "").trim(),
      )
      if (els.length === 0) {
        return false
      }

      store.toHref(els[0])
    }

    const Point = (point, level = 0) => {
      return (
        <point style={pointLevels[level]}>
          <textLabel>
            {point.nodes.filter(({ name }) => name === "label").map(label => (
              <text
                style={
                  level === 0
                    ? {
                        width: "fit-content",
                        display: "inline",
                        borderBottom: `1px dotted #c2dce6`,
                        marginBottom: 10,
                      }
                    : {}
                }
                onClick={() => goTo(label.nodes[0].nodes[0])}
              >
                {label.nodes[0].nodes[0]}
              </text>
            ))}
          </textLabel>
          {point.nodes
            .filter(({ name }) => name === "point")
            .map(point => Point(point, level + 1))}
        </point>
      )
    }

    console.log("hi")
    return <toc className="no-tooltip">{toc.map(point => Point(point, 0))}</toc>
  }

  styles = {
    point: {
      flex: 1,
    },
    text: {},
  }
}
