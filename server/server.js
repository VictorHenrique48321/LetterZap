const express = require("express")
const routes = require("./routes")

const app = express()

routes(app)

app.listen(5000, () => console.log("Server started on port 5000"))

module.exports = app