import { bonfire } from "react-icons-kit/ionicons/bonfire"
import { Icon } from "react-icons-kit"

export default class Logo extends Component {
  componentDidMount() {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml5 .line",
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700,
      })
      .add({
        targets: ".ml5 .line",
        duration: 600,
        easing: "easeOutExpo",
        translateY: function(e, i, l) {
          var offset = -0.625 + 0.625 * 2 * i
          return offset + "em"
        },
      })
      .add({
        targets: ".ml5 .ampersand",
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 1200,
        offset: "-=600",
      })
      .add({
        targets: ".ml5 .letters-left",
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=300",
      })
      .add({
        targets: ".ml5 .letters-right",
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=600",
      })
    /*
      .add({
        targets: ".ml5",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      })
      */
  }

  show() {
    return <name>booksy</name>
    return (
      <logo>
        <big className="ml5">
          <icon>
            <Icon size={22} icon={bonfire} />
          </icon>
          <row className="text-wrapper">
            <span className="letters letters-left">Lively</span>
            <span style={{ marginLeft: 1 }} className="letters letters-right">
              shelf
            </span>
          </row>
        </big>
      </logo>
    )
  }

  styles = {
    name: {
      fontFamily: `'Fredoka One', cursive`,
      color: "black",
      marginTop: -3,
      fontSize: 25,
    },
    logo: {
      flexFlow: "row",
    },
    icon: {
      marginTop: 4,
      marginRight: 2,
    },
    row: {
      flexFlow: "row",
    },
    big: {
      position: "relative",
      flexFlow: "row",
    },
    span: {
      fontWeight: 600,
      marginTop: 3,
    },
  }
}
