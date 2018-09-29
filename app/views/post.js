import posts from "../posts"

export default class Post extends Component {
  state = { post: null }

  componentDidMount() {
    const { title } = this.props.match.params
    const matches = posts.filter(({ url }) => url === title)
    this.setState({ post: matches.length === 0 ? false : matches[0] })
  }

  show() {
    const { post } = this.state

    if (post === null) {
      return <loading />
    }

    if (post === false) {
      return <fourOFour>Not Found</fourOFour>
    }

    const View = post.view

    document.title = post.name

    return (
      <post>
        <View post={post} />
      </post>
    )
  }

  styles = {
    post: {
      margin: `0px 40px`,
      marginBottom: 20,
      display: "block",
      width: `auto`,
    },
  }
}
