import Logo from "./logo"
import { ic_chevron_right } from "react-icons-kit/md/ic_chevron_right"
import { Icon } from "react-icons-kit"

class Btn extends Component {
  state = { hover: false }
  show() {
    const { children } = this.props
    return (
      <btn
        $hover={this.state.hover}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        onClick={() => (window.location = "/library")}
      >
        {children}{" "}
        <Icon
          style={{ position: "absolute", right: 3, top: 5 }}
          icon={ic_chevron_right}
          size={32}
        />
      </btn>
    )
  }

  styles = {
    hover: {
      boxShadow: `2px 6px 6px rgba(50,50,93,.3)`,
      transform: `translateY(-1px)`,
    },
    btn: {
      userSelect: "none",
      cursor: "pointer",
      position: "relative",
      transition: `all 100ms ease-in`,
      flexFlow: "row",
      background: `#3ecf8e`,
      width: 185,
      border: `1px solid rgba(0, 0, 0, 0.2)`,
      padding: `0 16px 0 8px`,
      boxShadow: `0 4px 6px rgba(50,50,93,.2)`,
      height: 40,
      color: "white",
      textShadow: `0 1px 3px rgba(36,180,126,.4)`,
      textTransform: "uppercase",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 600,
      fontSize: 20,
      borderRadius: 8,
      alignSelf: "center",
      paddingBottom: 1,
    },
  }
}

export default class Site extends Component {
  componentDidMount() {
    setTimeout(() => {
      Intercom("boot", {
        app_id: "omur1tvg",
        hide_default_launcher: false,
      })
    }, 1500)
  }

  show() {
    const screenshotWidth = 900
    const appRatio = 2048 / 1241

    return (
      <site>
        <bg />
        <inner>
          <first>
            <top>
              <Logo />
              <right>
                <nav>
                  <item>About</item>
                  <item>Books</item>
                  <item>Contact</item>
                </nav>
                <login>login</login>
              </right>
            </top>
            <h1>Read, Together</h1>
            <underContainer>
              <under>
                <svg class="text" width="100%" height="150" aria-hidden="true">
                  <path
                    className="stroke"
                    style={{
                      transform: `scaleX(1.775)`,
                    }}
                    fill="none"
                    stroke="black"
                    stroke-width="4.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M16.7 20.2c76.5 4.4 153.6-9.7 229.8-4.1 5.4.4 12.4 2.1 11.7 5.6-67.3 1.7-134.5 5.5-201.2 11.5l87.7-.9c35.2-.4 70.8-.7 104.9 4.6"
                  />
                </svg>
              </under>
            </underContainer>
            <h2s>
              <h2>Read More Books</h2>
              <h2>Have More Fun</h2>
              <h2>Improve Retention</h2>
            </h2s>
            <actions1>
              <Btn>Go to Library</Btn>
            </actions1>
            <screenshot>
              <img
                $screenshot
                width={screenshotWidth}
                height={screenshotWidth / appRatio}
                src={require("./app.png")}
              />
            </screenshot>
          </first>
          <mid>
            <midContent>
              <feature>
                <featIn>
                  <h3>Read More Books</h3>
                  <p>
                    Habitual reading makes you more{" "}
                    <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/cdev.12272">
                      intelligent
                    </a>
                    ,{" "}
                    <a href="https://www.kumon.co.uk/blog/reading-reduces-stress-levels/">
                      empathetic
                    </a>
                    , and{" "}
                    <a href="https://www.kumon.co.uk/blog/reading-reduces-stress-levels/">
                      relaxed
                    </a>
                    . And it's{" "}
                    <a href="http://www.scholastic.com/readingreport/Scholastic-KidsAndFamilyReadingReport-5thEdition.pdf?v=100">
                      contagious to those around you
                    </a>
                    .<br />
                    <br />
                    Shared reading is easier and more motivating than
                    solo-reading, and is an approachable way to start a healthy
                    reading habit.
                  </p>
                </featIn>
              </feature>
              <hr />

              <feature>
                <featIn>
                  <h3>Have More Fun</h3>
                  <p>
                    Interactive shared reading is a blast. Marking up and
                    discussing books together is a whole new way to experience a
                    book.
                    <br />
                    <br />
                    Argue in depth whether passages foreshadow later plot
                    twists, or just <span style={{ fontSize: 30 }}>
                      😍
                    </span> and <span style={{ fontSize: 30 }}>🤩</span> your
                    favorite lines.
                  </p>
                </featIn>
              </feature>
              <hr />
              <feature>
                <featIn>
                  <h3>Improve Retention</h3>
                  <p>
                    By 2018 the research is clear: the key to retention is
                    reflection and annotation.
                    <br />
                    <br />
                    Shared interactive book reading is the best way to improve
                    short and long term memory, and become a better reader.
                  </p>
                </featIn>
              </feature>
            </midContent>
          </mid>
          <bottom>
            <big style={{ fontSize: 25, fontWeight: 500 }}>
              Start Reading with Booksy
            </big>
            <smaller
              style={{
                opacity: 1,
                fontWeight: 300,
                marginTop: 5,
                marginBottom: 20,
              }}
            >
              Create your free account and become a more passionate reader
            </smaller>
            <actions2>
              <Btn>Go to Library</Btn>
            </actions2>
          </bottom>
        </inner>
      </site>
    )
  }

  styles = {
    site: {
      flex: 1,
      background: `rgb(247, 236, 228)`,
    },
    bg: {
      pointerEvents: "none",
      opacity: 0.2,
      zIndex: -1,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // backgroundImage: `linear-gradient(200deg, #ebae84 0%, #e67376 100%)`,
    },
    underContainer: {
      height: 30,
      flexFlow: "row",
      opacity: 0.7,
      justifyContent: "center",
    },
    under: {
      marginTop: -30,
      width: 500,
    },
    top: {
      margin: "20px 40px",
      flexFlow: "row",
      alignItems: "center",
      color: "black",
      justifyContent: "space-between",
    },
    right: {
      flexFlow: "row",
    },
    nav: {
      flexFlow: "row",
      flex: 1,
      justifyContent: "space-between",
      marginLeft: 50,
      maxWidth: 500,
      marginRight: 50,
    },
    item: {
      fontSize: 16,
      fontWeight: 600,
      opacity: 0.7,
      marginLeft: 15,
      marginRight: 15,
    },
    login: {
      textTransform: "uppercase",
      padding: "6px 10px",
      border: "1px solid rgba(0, 0, 0, 0.4)",
      borderRadius: 20,
      width: 80,
      justifyContent: "center",
      alignItems: "center",
      fontSize: 12,
      fontWeight: 600,
    },
    headlines: {
      marginTop: 20,
      flexFlow: "row",
      justifyContent: "space-between",
    },
    actions1: {
      flexFlow: "row",
      marginTop: 25,
      justifyContent: "center",
    },
    actions2: {
      marginTop: 10,
      flexFlow: "row",
      justifyContent: "center",
    },
    midContent: {
      width: 880,
      margin: "0px auto",
    },
    first: {
      width: 1100,
      margin: `20px auto 0px auto`,
      borderRadius: `3px 3px 0px 0px`,
      // backgroundColor: `#52d3ff`,
      // backgroundImage: `linear-gradient(0deg, #52c7ff 25%, #4a82f8 100%)`,
      height: 500,
      overflow: `hidden`,
      display: "block",
      height: 725,
    },
    mid: {
      padding: `20px 0`,
      background: "rgba(253, 253, 253, 1)",
      boxShadow: `1px -1px 15px rgba(0, 0, 0, 0.2)`,
      borderTop: `1px solid rgba(0, 0, 0, 0.4)`,
      borderBottom: `1px solid rgba(0, 0, 0, 0.4)`,
    },
    texts: {
      color: "black",
      marginLeft: 20,
      marginTop: 20,
    },
    h1: {
      fontFamily: `'Rock Salt', cursive`,
      color: "black",
      textAlign: "center",
      fontSize: 45,
      marginTop: 20,
    },
    h2s: {
      flexFlow: "row",
      marginTop: 0,
      marginLeft: 10,
      justifyContent: "center",
    },
    h2: {
      padding: 0,
      margin: 0,
      color: "black",
      fontSize: 38,
      fontWeight: 300,
      marginLeft: 20,
      marginRight: 20,
      textAlign: "left",
    },
    inner: {
      borderRadius: 3,
      // border: `1px solid rgba(0, 0, 0, 0.2)`,
      display: "block",
      position: "relative",
      // backgroundColor: `#589bd0`,
      // boxShadow: `3px 2px 26px rgba(0, 0, 0, 0.3)`,
    },
    feature: {
      marginLeft: 50,
      display: "block",
      marginTop: 30,
      marginBottom: 30,
      marginRight: 50,
    },
    featIn: {
      flexFlow: "row",
    },
    h3: {
      lineHeight: 1.25,
      textAlign: "left",
      fontWeight: 400,
      fontSize: 24,
      width: "30%",
      fontFamily: `"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif`,
    },
    hr: {
      width: 64,
      marginTop: 20,
      borderBottom: `1px solid rgba(255, 255, 255, 0.3)`,
      margin: `0px auto`,
    },
    p: {
      lineHeight: 1.4,
      opacity: 1,
      width: "60%",
      display: "block",
      fontWeight: 400,
      margin: 0,
      fontSize: 18,
      fontFamily: `"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif`,
    },
    span: {
      display: "inline",
    },
    a: {
      borderBottom: `1px dotted #c2dce6`,
      color: `#222`,
      fontWeight: 600,
      textDecoration: "none",
      display: "inline",
    },
    bottom: {
      padding: 30,
      alignItems: "center",
      textAlign: "center",
      background: `#fafafa`,
      display: "block",
    },
    screenshot: {
      margin: "3px auto",
      marginBottom: -60,
    },
  }
}
