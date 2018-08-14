import React from "react"
import BG from "./bg"
import Book from "./book"
import { observer } from "mobx-react"
import Site from "./site"
import Library from "./site/library"

@observer
export default class Root extends Component {
  show() {
    const url = window.location + ""

    if (url.indexOf("?bg") > -1) {
      return <BG />
    }

    if (url.indexOf("?library") > -1) {
      return <Library />
    }

    if (url.indexOf("?book") > -1) {
      return <Book />
    }

    return <Site />
  }

  styles = {}
}
