export class Quote extends Component {
  show() {
    const { text, author } = this.props

    return (
      <quote>
        <text>{text}</text>
        <author>{author}</author>
      </quote>
    )
  }

  styles = {
    quote: {
      border: `1px solid rgba(245, 143, 120, 0.3)`,
      borderLeft: `5px solid rgba(245, 143, 120, 0.5)`,
      margin: "10px auto",
      background: `rgba(245, 143, 120, 0.02)`,
      borderRadius: 5,
      padding: 10,
      maxWidth: 480,
    },
    text: {
      fontSize: 18,
      fontWeight: 400,
      textAlign: "center",
    },
    author: {
      alignSelf: "flex-end",
      fontWeight: 600,
      marginRight: 30,
      marginTop: 8,
    },
  }
}
export class Example extends Component {
  show() {
    const { title, list } = this.props

    return (
      <example>
        <header>{title}</header>
        <items>
          {list.map(item => (
            <item>{item}</item>
          ))}
        </items>
      </example>
    )
  }

  styles = {
    example: {
      marginTop: 10,
      marginBottom: 10,
      padding: `3px 10px`,
      color: "black",
      fontWeight: 400,
      borderLeft: `3px solid rgba(245, 143, 120, 0.5)`,
    },
    header: {
      fontSize: 18,
      color: `rgba(0, 0, 0, 0.6)`,
    },
    items: {
      padding: `5px 10px`,
      paddingBottom: 2,
    },
    item: {
      marginTop: 3,
      marginBottom: 3,
    },
  }
}

export class H3 extends Component {
  show() {
    return <h3>{this.props.children}</h3>
  }

  styles = {
    h3: {
      fontWeight: 600,
      fontSize: 18,
      marginTop: 8,
      marginBottom: 8,
    },
  }
}

export class H2 extends Component {
  show() {
    return <h2>{this.props.children}</h2>
  }

  styles = {
    h2: {
      fontWeight: 600,
      fontSize: 18,
      padding: `5px 5000px`,
      borderBottom: `1px solid rgba(0, 0, 0, 0.05)`,
      borderTop: `1px solid rgba(0, 0, 0, 0.05)`,
      marginLeft: -5000,
      marginRight: -5000,
      marginTop: 8,
      marginBottom: 8,
      background: `rgba(0, 0, 0, 0.03)`,
    },
  }
}
