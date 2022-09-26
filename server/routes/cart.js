const { Router } = require("express");
const { addProductToCart, getCartProduct, getAllCartProduct, deleteProduct, acceptOrder, sendOrder, errorOrder } = require("../controllers/cart");
const checkRole = require("../middleware/checkRole");

const router = new Router();

router.get("/", checkRole, getAllCartProduct)
router.post("/", addProductToCart)
router.get("/:id", getCartProduct)
router.delete("/:id", deleteProduct)
router.post("/accept", acceptOrder)
router.post("/send", sendOrder)
router.post("/error", errorOrder)

module.exports = router;
