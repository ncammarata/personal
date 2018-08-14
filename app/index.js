require("babel-core/register")
require("babel-polyfill")
require("./component")

const ogError = console.error
console.error = (...args) => {
  if (
    args[0].indexOf("is unrecognized in this browser.") === -1 &&
    args[0].indexOf("Always use lowercase HTML tags in React") === -1 &&
    args[0].indexOf("non-boolean attribute") === -1 &&
    args[0].indexOf("Invalid attribute name") === -1
  ) {
    ogError(...args)
  }
}
import React from "react"
import { render } from "react-dom"

String.prototype.hashCode = function() {
  var hash = 0
  if (this.length == 0) {
    return hash
  }
  for (var i = 0; i < this.length; i++) {
    var char = this.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}

const Root = require("./views/root").default

render(<Root />, document.getElementById("root"))
