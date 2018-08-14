import { observer } from "mobx-react"
import rc from "randomcolor"

@observer
export default class Avatar extends Component {
  show() {
    const { name, size = 26 } = this.props
    return (
      <author
        style={{
          width: size,
          height: size,
          background: rc({
            seed: name,
            luminosity: "light",
          }),
        }}
      >
        {name}
      </author>
    )
  }

  styles = {
    author: {
      fontWeight: 600,
      fontSize: 12,
      alignItems: "center",
      userSelect: "none",
      justifyContent: "center",
      borderRadius: "50%",
      padding: 3,
      color: "white",
      textShadow: "1px 1px rgba(0, 0, 0, 0.2)",
    },
  }
}
