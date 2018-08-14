const { memoize, includes, last, sortBy } = require("lodash")
const express = require("express")
const cors = require("cors")
const { promisify } = require("util")
const AdmZip = require("adm-zip")
const request = require("request")

const app = express()

app.use(cors())

app.get("/download", async (req, res) => {
  request.get(req.query.url).pipe(res)
})

app.listen(3000, () => console.log("Example app listening on port 3000!"))
