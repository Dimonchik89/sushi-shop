const {Router} = require("express");
const {push} = require('../controllers/push');

const router = new Router();

router.post("/", push)

module.exports = router;