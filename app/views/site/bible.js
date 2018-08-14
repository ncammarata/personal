export default class Bible extends Component {
  show() {
    const ratio = 646 / 786
    const width = 80
    return (
      <bible>
        <left>
          <img
            width={width}
            height={width / ratio}
            src={require("./church.png")}
          />
        </left>
        <right>
          <top>
            <name>The Massive Open Bible Project</name>
            <soon>Coming Soon</soon>
          </top>
          <text>
            The largest collective book annotation in history, on the King James
            Bible.
          </text>
        </right>
      </bible>
    )
  }

  styles = {
    bible: {
      background: "rgba(252,239,238,1)",
      borderRadius: 10,
      width: 750,
      padding: 10,
      margin: "28px auto 20px auto",
      border: "5px solid #fb8469",
      flexFlow: "row",
      alignItems: "center",
      boxShadow: "1px 1px 15px rgba(0, 0, 0, 0.2)",
    },
    right: {
      marginLeft: 30,
      marginRight: 30,
      textAlign: "center",
    },
    top: {
      flexFlow: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    name: {
      color: "rgba(0, 0, 0, 0.9)",
      fontSize: 32,
      fontWeight: 500,
    },
    text: {
      marginTop: 10,
      fontWeight: 700,
      fontSize: 16,
      color: "rgba(0, 0, 0, 0.7)",
    },
    soon: {
      fontSize: 14,
      marginTop: 5,
      padding: "5px 10px",
      borderRadius: 10,
      border: "2px solid rgba(0, 0, 0, 0.4)",
      color: "black",
      fontWeight: 800,
      marginLeft: 20,
    },
  }
}
