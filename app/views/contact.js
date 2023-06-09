export default class Contact extends Component {
  show() {
    return (
      <contact>
        <div>
          email:{" "}
          <a href="mailto:tollypowell0x@gmail.com">tollypowell0x@gmail.com</a>
        </div>
        <twitter>
          twitter:{" "}
          <a $handle target="_blank" href="http://twitter.com/tollypowell">
            @tollypowell
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
