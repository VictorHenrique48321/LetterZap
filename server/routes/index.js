const bodyParser = require("body-parser")

const apiCall = require("./apiCall")

module.exports = app => {
  app.use(
    bodyParser.json(),
    apiCall
  )
}