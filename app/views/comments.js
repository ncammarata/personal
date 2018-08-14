import Avatar from "./avatar"
import { observer } from "mobx-react"

@observer
export default class Comments extends Component {
  show() {
    const { list, store } = this.props
    return (
      <comments className="no-tooltip">
        <inner>
          {list.map(comment => (
            <comment>
              <row>
                <Avatar name="NC" />
                <text>{comment.comment}</text>
              </row>
              <actions>
                <like $action>like</like>
                <dot>•</dot>
                <delete
                  onClick={() =>
                    store.deleteComment(comment.selected.hashCode())
                  }
                  $action
                >
                  delete
                </delete>
              </actions>
            </comment>
          ))}
        </inner>
      </comments>
    )
  }

  styles = {
    comments: {
      position: "absolute",
      right: 0,
      top: 0,
      transform: `translate(230px)`,
    },
    inner: {
      position: "relative",
      width: 200,
    },
    comment: {
      position: "absolute",
      left: 0,
      top: 0,
      boxShadow: `1px 1px 5px rgba(0, 0, 0, 0.1)`,
      border: `1px solid rgba(0, 0, 0, 0.2)`,
      padding: 8,
      borderRadius: 5,
    },
    row: {
      flexFlow: "row",
    },
    actions: {
      flexFlow: "row",
      marginTop: 10,
      alignItems: "center",
    },
    dot: {
      fontSize: 12,
    },
    action: {
      fontSize: 12,
      cursor: "pointer",
      color: "#0070e0",
      fontWeight: 600,
      paddingLeft: 3,
      paddingRight: 3,
    },
    text: {
      marginLeft: 7,
      width: 170,
      marginTop: 5,
      fontSize: 16,
    },
  }
}
