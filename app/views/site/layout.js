import Logo from "./logo"

export default class Layout extends Component {
  show() {
    const { children } = this.props
    return (
      <layout>
        <inner>
          <top>
            <Logo />
            <nav>
              <item>Books</item>
              <item>About</item>
              <item>Open Bible Project</item>
              <item>Contact</item>
            </nav>
            <login>login</login>
          </top>
          <mainContent>{children}</mainContent>
        </inner>
      </layout>
    )
  }

  styles = {
    layout: {
      background: `rgba(247,236,228)`,
      height: "100%",
      color: "rgba(0, 0, 0, 0.8)",
      flex: 1,
    },
    inner: {
      flex: 1,
    },
    mainContent: {
      flex: 1,
      padding: 0,
      background: `rgba(247,236,228)`,
    },
    top: {
      marginTop: 40,
      marginLeft: 40,
      marginRight: 40,
      marginBottom: 20,
      flexFlow: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    nav: {
      flexFlow: "row",
      flex: 1,
      justifyContent: "space-between",
      marginLeft: 80,
      maxWidth: 500,
      marginRight: 80,
    },
    item: {
      textTransform: "uppercase",
      fontSize: 12,
      fontWeight: 600,
    },
    login: {
      textTransform: "uppercase",
      padding: "10px 20px",
      border: "1px solid rgba(255, 255, 255, 0.95)",
      borderRadius: 20,
      width: 80,
      justifyContent: "center",
      alignItems: "center",
      fontSize: 12,
      fontWeight: 600,
    },
  }
}
