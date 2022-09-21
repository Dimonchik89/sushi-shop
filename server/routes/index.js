const { Router } = require("express");
const product = require("./product");
const category = require("./category");
const type = require("./type");
const user = require("./user");
const cart = require("./cart");
const special = require("./special");

const router = new Router();

router.use("/product", product)
router.use("/category", category)
router.use("/type", type)
router.use("/user", user)
router.use("/cart", cart)
router.use("/special", special);

module.exports = router;