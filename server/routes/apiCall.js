const Router = require("express")
const cors = require("cors")
const getWords = require("../helpers/getWord")

const router = Router()

router.get("/api", cors(), getWords)

module.exports = router