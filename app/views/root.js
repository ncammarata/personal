import React from "react"
import { observer } from "mobx-react"
import Home from "./home"
import Writing from "./writing"
import Contact from "./contact"
import Post from "./post"
import Bookshelf from "./bookshelf"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

@observer
export default class Root extends Component {
  show() {
    const mobile = window.innerWidth < 1250

    return (
      <Router>
        <site $mobile={mobile}>
          <top>
            {!mobile && (
              <Link to={`/`}>
                <name>Nick Cammarata</name>
              </Link>
            )}
            <items>
              <item>
                <Link to={`/bookshelf`}>Bookshelf</Link>
              </item>
              <item>
                <Link to={`/writing`}>Writing</Link>
              </item>
              <item>
                <Link to={`/contact`}>Contact</Link>
              </item>
            </items>
          </top>
          <content>
            <Route exact path="/" component={Home} />
            <Route path="/bookshelf" component={Bookshelf} />
            <Route exact path="/writing" component={Writing} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/writing/:title" component={Post} />
          </content>
        </site>
      </Router>
    )
  }

  styles = {
    site: {
      marginLeft: 40,
      marginTop: 40,
      maxWidth: 750,
      marginRight: 40,
      flex: 1,
    },
    mobile: {
      margin: `20px auto`,
      maxWidth: "88%",
    },
    top: {
      flexFlow: "row",
      justifyContent: `space-between`,
      alignItems: "center",
      maxWidth: 750,
    },
    name: {
      color: `rgb(187, 71, 11)`,
    },
    content: {
      marginTop: 20,
      flex: 1,
    },
    logo: {
      fontWeight: 800,
      fontSize: 18,
    },
    items: {
      flexFlow: "row",
      marginLeft: 30,
      fontWeight: 500,
    },
    item: {
      marginLeft: 8,
      marginRight: 8,
      paddingBottom: 2,
    },
    line: {
      marginTop: 10,
      marginBottom: 10,
    },
  }
}
