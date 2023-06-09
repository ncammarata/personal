export default class Bookshelf extends Component {
  show() {
    const books = `

      Zero to One
      Cryptonomicon
      Out of Crisis - Deming
      Surely You're Joking Mr. Feynman
      Beginning of Infinity
      Never at Rest - Isaac Newton
      #Churchill - Walking with Destiny
      #Benjamin Franklin - Walter Isaaccon
      Organizing Genius
      Shogun
      # The Diamond Age
      Hard Drive - Bill Gates
      High Growth Handbook
      The Selfish Gene
      The Black Swan


    `

    const bookList = books.split("\n").map(book => {
      let name = book.trim()
      let highlight = false

      if (name[0] === "#") {
        highlight = true
        name = name.slice(1)
      }

      return { highlight, name }
    })

    return (
      <bookshelf>
        <h1>Bookshelf</h1>
         <books>
          {bookList.map(({ name, highlight }) => (
            <book $highlight={highlight}>
              {highlight && "⭐ "}
              {name}
            </book>
          ))}
        </books>
      </bookshelf>
    )
  }

  styles = {
    bookshelf: {
      display: "block",
      fontWeight: 400,
    },
    books: {
      marginTop: 10,
    },
    inspired: {
      display: "block",
      fontSize: 16,
    },
    book: {
      fontSize: 16,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 25,
    },
    highlight: {
      marginLeft: 0,
    },
  }
}
