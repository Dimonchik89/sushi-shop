const { Router } = require("express")
const { setTheme, getTheme } = require("../controllers/theme");

const router = new Router();

router.get("/", getTheme)
router.post("/", setTheme)

module.exports = router