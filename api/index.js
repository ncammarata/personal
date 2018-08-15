const express = require("express")
const path = require("path")
const cors = require("cors")
const url = require("url")

const request = require("request")

const app = express()

app.use(cors())

app.get("/download", async (req, res) => {
  request.get(req.query.url).pipe(res)
})

app.get("*", function(req, res) {
  const userPath = url.parse(req.url).pathname
  const index = path.join(`./dist`, "index.html")
  const file = path.join(`./dist`, userPath)

  if (userPath.indexOf(".") > -1) {
    res.sendFile(path.resolve(file))
  } else {
    res.sendFile(path.resolve(index))
  }
})

app.listen(3000, () => console.log("Example app listening on port 3000!"))
