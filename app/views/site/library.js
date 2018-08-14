import Layout from "./layout"
import { range, random } from "lodash"
import books from "./books"

class Book extends Component {
  show() {
    const { name, id, author, index } = this.props
    const fontSize = Math.max(17, 28 - name.length / 2)
    const bars = 10
    const popularity = random(0, bars)

    return (
      <book key={name}>
        <bookInner>
          <left>
            <cover>
              <name style={{ fontSize }}>{name}</name>
              {author && <author>&mdash; {author}</author>}
            </cover>
            <desc>
              A beautiful book that explores the depths of the author's mind and
              their place in the world. It has an ending that has forever set a
              precedent in all of literature.
            </desc>
          </left>

          <right>
            <graphic />
            <popularity>
              <popText>popularity</popText>
              <bars>
                {range(bars).map((bar, index) => (
                  <bar $highlight={index < popularity} />
                ))}
              </bars>
            </popularity>
            <btns>
              <btn
                onClick={() => {
                  const url = `http://www.gutenberg.org/ebooks/${id}.epub.noimages`
                  window.location = `?bookUrl=${url}`
                }}
              >
                read
              </btn>
              <btn>add to shelf</btn>
            </btns>
          </right>
        </bookInner>
      </book>
    )
  }

  styles = {
    book: {
      width: 523,
      margin: `20px auto`,
      height: 300,
      display: "block",
    },
    bookInner: {
      flexFlow: "row",
      flex: 1,
      flexFlow: "row",
      background: "white",
      position: "relative",
      alignItems: "space-between",
      borderRadius: `0px 3px 3px 0px`,
      border: `1px solid rgba(0, 0, 0, 0.25)`,
      borderRadius: 4,
      boxShadow: `0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)`,
    },
    left: {
      justifyContent: "center",
      padding: 15,
      width: 260,
    },
    right: {
      width: 230,
      borderLeft: `1px solid rgba(0, 0, 0, 0.3)`,
    },
    graphic: {
      height: 150,
      width: "100%",
      background: `rgba(0, 0, 0, 0.2)`,
    },
    inner: {},
    name: {
      textAlign: "center",
      color: `rgba(0, 0, 0, 0.9)`,
      lineHeight: 1.4,
      fontWeight: 600,
    },
    author: {
      textAlign: "right",
      color: `rgba(0, 0, 0, 0.6)`,
      fontSize: 14,
      fontWeight: 400,
      marginTop: 5,
      marginRight: 20,
      marginLeft: 10,
    },
    desc: {
      justifyContent: "center",
      marginTop: 15,
      lineHeight: 1.3,
      padding: 10,
    },
    bottom: {
      position: "absolute",
      left: 20,
      right: 20,
      bottom: 10,
      alignItems: "center",
    },
    popularity: {
      flexFlow: "row",
      height: 10,
      justifyContent: "space-between",
      padding: `5px 10px`,
      alignItems: "center",
      borderBottom: `1px solid rgba(0, 0, 0, 0.3)`,
    },
    popText: {
      textTransform: "uppercase",
      fontSize: 12,
      fontWeight: 600,
    },
    bars: {
      flexFlow: "row",
      justifyContent: "space-between",
    },
    bar: {
      opacity: 0.2,
      height: "100%",
      width: 2,
      marginLeft: 1,
      marginRight: 1,
      background: `rgba(0, 0, 0, 0.3)`,
      border: `1px solid rgba(0, 0, 0, 0.5)`,
    },
    highlight: {
      opacity: `1 !important`,
    },
    btns: {
      flexFlow: "row",
    },
    btn: {
      fontSize: 16,
      fontWeight: 600,
      border: `1px solid rgba(0, 0, 0, 0.3)`,
      boxShadow: `1px 1px 10px rgba(0, 0, 0, 0.1)`,
      padding: `5px 15px`,
      borderRadius: 8,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      background: `rgba(0, 0, 0, 0.04)`,
      margin: 10,
    },
  }
}

export default class Library extends Component {
  show() {
    // const books = ["whale", "alice"]

    return (
      <Layout>
        <library>
          <big>Your Library</big>
          <row1>
            {false && (
              <quotes>
                "he gave him a name, a cruel name that means half-formed.
                Quasi-Modo"
              </quotes>
            )}
          </row1>
          <app>
            <items>
              <item $activeItem>Books</item>
              <item>Analytics</item>
              <item>Clubs</item>
            </items>
            <active>
              <top>
                <topInner>
                  <input placeholder="search" />
                  <add>Add EPUB</add>
                </topInner>
              </top>
              <books>
                {books.map((book, index) => (
                  <Book {...book} index={index} />
                ))}
              </books>
            </active>
          </app>
        </library>
      </Layout>
    )
  }

  styles = {
    big: {
      fontSize: 30,
      fontWeight: 600,
      width: 600,
    },
    library: {
      flex: 1,
      margin: "0px 40px",
    },
    app: {
      border: `1px solid rgba(0, 0, 0, 0.3)`,
      marginTop: 20,
      flex: 1,
      // background: "white",
      flexFlow: "row",
      marginBottom: 20,
    },
    items: {
      width: 250,
      borderRight: `1px solid rgba(0, 0, 0, 0.2)`,
    },
    item: {
      padding: `5px 10px`,
      borderBottom: `1px solid rgba(0, 0, 0, 0.2)`,
      textTransform: `uppercase`,
      justifyContent: "center",
      textAlign: "center",
      height: 40,
      fontSize: 18,
      fontWeight: "bold",
    },
    activeItem: {
      background: `rgba(0, 0, 0, 0.06)`,
    },
    center: {
      alignItems: "center",
      justifyContent: "center",
    },
    row: {
      flexFlow: "row",
    },
    row1: {
      flexFlow: "row",
      justifyContent: "center",
    },
    quotes: {
      fontSize: 30,
      padding: 20,
    },
    spaceBetween: {
      justifyContent: "space-between",
    },
    top: {
      display: "block",
      boxShadow: `1px 1px 10px rgba(0, 0, 0, 0.15)`,
      borderBottom: `1px solid rgba(0, 0, 0, 0.3)`,
      // background: `white`,
    },
    topInner: {
      flexFlow: "row",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
    },
    input: {
      background: `rgba(255, 255, 255, 0.90)`,
      fontWeight: 600,
      width: "50%",
      padding: 8,
      fontSize: 18,
      margin: `10px 0px 10px 10px`,
      justifyContent: "space-between",
      border: `1px solid rgba(0, 0, 0, 0.4)`,
      borderRadius: 5,
    },
    add: {
      margin: `10px 10px 10px 0px`,
      padding: 8,
      boxShadow: `2px 4px 6px rgba(50,50,93,.21)`,
      fontSize: 18,
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 600,
      borderRadius: 3,
      color: "rgba(0, 0, 0, 0.7)",
      background: `rgba(0, 0, 0, 0.08)`,
      border: `1px solid rgba(0, 0, 0, 0.4)`,
    },
    active: {
      maxHeight: 600,
      flex: 1,
    },
    books: {
      overflow: "scroll",
      padding: 8,
      background: `rgba(0, 0, 0, 0.02)`,
    },
  }
}
