require("babel-core/register")
require("babel-polyfill")
require("./component")

const ogError = console.error
console.error = (...args) => {
  if (
    args[0].indexOf("is unrecognized in this browser.") === -1 &&
    args[0].indexOf("Always use lowercase HTML tags in React") === -1 &&
    args[0].indexOf("Always use lowercase HTML tags in React") === -1 &&
    args[0].indexOf("React does not recognize the `$") === -1 &&
    args[0].indexOf("non-boolean attribute") === -1 &&
    args[0].indexOf("Invalid attribute name") === -1
  ) {
    ogError(...args)
  }
}
import React from "react"
import { render } from "react-dom"
const Root = require("./views/root").default

render(<Root />, document.getElementById("root"))
