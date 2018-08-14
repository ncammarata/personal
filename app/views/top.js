import Avatar from "./avatar"
import { observer } from "mobx-react"
import { Icon } from "react-icons-kit"
import { library } from "react-icons-kit/icomoon/library"

@observer
export default class Status extends Component {
  show() {
    const { store } = this.props
    const { book } = store
    return (
      <top>
        <library
          $row
          onClick={() => {
            window.location = `/?library`
          }}
        >
          <Icon size={16} icon={library} />
          <libraryText>library</libraryText>
        </library>
        <name>{book && book.title}</name>
        <right>
          <avatars>
            {["NC", "NO", "PB", "NB"].map(name => (
              <avatar>
                <Avatar size={22} name={name} />
              </avatar>
            ))}
          </avatars>
          <page>Page {store.page + 1}</page>
        </right>
      </top>
    )
  }

  styles = {
    top: {
      position: "fixed",
      zIndex: 5000,
      flexFlow: "row",
      left: 0,
      top: 0,
      right: 0,
      height: 30,
      padding: `5px 30px`,
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: 16,
      fontWeight: 600,
      background: `rgba(255, 255, 255, 1)`,
      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.03)",
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      paddingLeft: 100,
    },
    row: {
      flexFlow: "row",
    },
    library: {
      fontSize: 14,
      fontWeight: 600,
      alignItems: "center",
    },
    libraryText: {
      marginLeft: 5,
    },
    right: {
      alignItems: "center",
      flexFlow: "row",
    },
    avatars: {
      flexFlow: "row",
    },
    avatar: {
      marginLeft: 3,
      marginRight: 3,
    },
    page: {
      width: 65,
      marginLeft: 40,
    },
  }
}
