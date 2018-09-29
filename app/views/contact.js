export default class Contact extends Component {
  show() {
    return (
      <contact>
        <div>
          email:{" "}
          <a href="mailto:cammarata.nick@gmail.com">cammarata.nick@gmail.com</a>
        </div>
        <twitter>
          twitter:{" "}
          <a $handle target="_blank" href="http://twitter.com/nicklovescode">
            @nicklovescode
          </a>{" "}
        </twitter>
      </contact>
    )
  }

  styles = {
    contact: {
      display: "bold",
    },
    twitter: {
      display: "block",
    },
    handle: {
      display: "inline",
    },
  }
}
