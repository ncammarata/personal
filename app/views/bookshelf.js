export default class Bookshelf extends Component {
  show() {
    const books = `
      # Whole Earth Catelog
      Salt: A World History
      # The Dream Machine
      On Food and Cooking
      Sapiens: A Brief History of Humankind
      Never Split The Difference 
      #How to Win Friends and Influence People
      #Leonardo Da Vinci - Walter Isaacson
      Creativity Inc
      Becoming Steve Jobs
      Hackers and Painters
      Mindstorms
      The Doors of Perception and Heaven and Hell
      Acid Test: LSD, Ecstasy, and the Power to Heal
      Altered Traits
      Deep Learning Book
      Zero to One
      Surely You're Joking Mr. Feynman
      Superforecasting
      Lolita
      # Modernist Cuisine
      # A Pattern Language
      #Benjamin Franklin - Walter Isaaccon
      The Great Gatsby
      On Intelligence
      80,000 Hours
      History of Future Cities
      The Upside of Stress
      # The Diamond Age
      Waking Up
      Measure What Matters
      Atomic Habits
      High Growth Handbook
      The Elephant in the Brain
      The Master Algorithm
      The Selfish Gene
      Hitchhikers Guide to the Galaxy
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
        <inspired>
          Inspired by{" "}
          <a href="https://patrickcollison.com/bookshelf">
            Patrick Collison's Bookshelf
          </a>
          . This is an evolving list.
        </inspired>
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
