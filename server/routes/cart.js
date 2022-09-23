const { Router } = require("express");
const { addProductToCart, getCartProduct, getAllCartProduct, deleteProduct } = require("../controllers/cart");
const checkRole = require("../middleware/checkRole");

const router = new Router();

router.get("/", checkRole, getAllCartProduct)
router.post("/", addProductToCart)
router.get("/:id", getCartProduct)
router.delete("/:id", deleteProduct)

module.exports = router;
