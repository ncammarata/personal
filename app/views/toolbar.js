import { observer } from "mobx-react"
import { Icon } from "react-icons-kit"
import { heart, pen, location, lightbulb } from "react-icons-kit/typicons"
import { showTooltip, getParentPara } from "../helpers"
import Avatar from "./avatar"

const darkBG = "#1b2733"

@observer
class Item extends Component {
  state = { hover: false }
  show() {
    const { icon, onClick, name } = this.props
    const { hover } = this.state

    return (
      <btn
        $hover={hover}
        onMouseEnter={() => {
          this.setState({ hover: true })
        }}
        onMouseLeave={() => {
          this.setState({ hover: false })
        }}
        onClick={onClick}
      >
        <Icon style={{ color: "white" }} size={24} icon={icon} />
        <name $showName={hover}>{name}</name>
      </btn>
    )
  }

  styles = {
    btn: {
      padding: "3px 15px",
      opacity: 0.6,
      transition: "all 150ms ease-in",
      animationDelay: "300ms",
      position: "relative",
    },
    name: {
      opacity: 0,
      position: "absolute",
      left: 0,
      top: -20,
      pointerEvents: "none",
      background: darkBG,
      color: "rgba(255, 255, 255, 0.9)",
      transition: "all 100ms ease-in",
      padding: `5px 8px`,
      borderRadius: 5,
      fontSize: 14,
      fontWeight: 600,
    },
    showName: {
      opacity: 1,
      transform: `translateY(-20px)`,
    },
    hover: {
      opacity: 1,
    },
  }
}

@observer
export default class Tooltip extends Component {
  state = {
    show: false,
    left: 0,
    top: 0,
    comment: "",
    selectData: null,
    showComment: false,
  }

  componentWillMount() {
    window.addEventListener("mouseup", ({ target, clientX, clientY }) => {
      const selection = window.getSelection()

      if (!showTooltip(target)) {
        this.setState({ show: false })
        return false
      }

      console.log("selection is", selection)

      const para = getParentPara(selection.anchorNode)

      console.log("para is", para)

      if (!para) {
        return false
      }

      const oRange = selection.getRangeAt(0)
      const left = clientX - 120
      const top = clientY - 15

      console.log("left is", left, "top is", top)

      const selectData = {
        selected: selection + "",
        context: selection.anchorNode.data,
      }
      this.setState({ left, top, show: true, selectData })
    })
  }

  hide = () => {
    this.setState({ show: false })
    setTimeout(() => {
      this.setState({ showComment: false, comment: "" })
    }, 150)
  }

  onKeyDown = e => {
    const { store } = this.props
    const { context, selected } = this.state.selectData

    if (e.keyCode === 27) {
      this.hide()
    }

    if (e.keyCode === 13 && e.metaKey) {
      store.addComment(context.hashCode(), {
        comment: this.state.comment,
        selected,
      })
      this.hide()
    }
  }

  show() {
    const { show, left, top, showComment } = this.state

    return (
      <tooltip
        $hide={!show}
        $show={show}
        style={{
          left,
          top,
          background: showComment ? `rgba(255, 255, 255, 0.95)` : darkBG,
          boxShadow: showComment && `1px 1px 5px rgba(0, 0, 0, 0.1)`,
        }}
      >
        {showComment && (
          <comment>
            <row>
              <Avatar name="NC" />
              <textarea
                onKeyDown={this.onKeyDown}
                autoFocus
                onChange={e => this.setState({ comment: e.target.value })}
                value={this.state.comment}
                placeholder="bravo, brilliant"
              />
            </row>
          </comment>
        )}
        {!showComment && (
          <items>
            <Item icon={heart} name="like" />
            <Item icon={lightbulb} name="save" />
            <Item icon={location} name="beacon" />
            <Item
              icon={pen}
              name="comment"
              onClick={() => this.setState({ showComment: true })}
            />
          </items>
        )}
      </tooltip>
    )
  }

  styles = {
    tooltip: {
      zIndex: 1000,
      position: "fixed",
      margin: 20,
      boxShadow: "0 0 0 1px #000, 0 8px 16px rgba(27,39,51,0.16)",
      transition: "opacity 70ms ease-in, transform 90ms ease-in",
      borderRadius: 5,
      border: `1px solid rgba(0, 0, 0, 0.2)`,
      padding: 5,
    },
    hide: {
      pointerEvents: "none",
      transform: `translate(0px, 10px)`,
      opacity: 0,
    },
    comment: {
      padding: "5px 3px",
      borderRadius: 5,
    },
    show: {
      transform: `translate(0px, 0px)`,
      opacity: 1,
    },
    items: {
      flexFlow: "row",
    },
    textarea: {
      border: "0px solid black",
      marginTop: 10,
      color: "rgba(0, 0, 0, 0.8)",
      lineHeight: 1.4,
      width: 300,
      height: 150,
      fontSize: 14,
    },
  }
}
