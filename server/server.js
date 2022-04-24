const express = require("express")
const routes = require("./routes")

const port = process.env.PORT || 5000
const app = express()

routes(app)

app.listen(port, () => console.log(`Server started on port ${port}`))

module.exports = app