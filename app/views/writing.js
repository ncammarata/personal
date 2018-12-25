import { Link } from "react-router-dom"
import posts from "../posts"

export default class Writing extends Component {
  show() {
    return (
      <writing>
        <h1>Writing</h1>
        {posts.filter(({ stage }) => stage > 0).map(post => (
          <postName key={post.url}>
            <Link to={`/writing/${post.url}`}>
              <btn>
                <span>{post.name}</span>{" "}
                {post.stage === 1 && <draft>Draft</draft>}
              </btn>
            </Link>
          </postName>
        ))}
      </writing>
    )
  }

  styles = {
    postName: {
      display: "block",
      marginBottom: 5,
    },
    btn: {
      alignItems: "center",
      flexFlow: "row",
    },
    draft: {
      fontSize: 12,
      alignItems: "center",
      textAlign: "center",
      padding: `3px 6px`,
      background: `rgba(0, 0, 0, 0.02)`,
      border: `1px solid rgba(0, 0, 0, 0.2)`,
      color: `rgba(0, 0, 0, 0.7)`,
      marginLeft: 5,
      borderRadius: 5,
    },
    b: {
      display: "inline",
      marginLeft: 3,
    },
  }
}
