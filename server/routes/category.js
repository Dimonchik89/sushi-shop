const { Router } = require("express");
const { getAllCategory, createCategory, delCategory, getOneCategory, updateCategory } = require("../controllers/category");
const checkRole = require("../middleware/checkRole");
const {uploadIcon} = require("../aws_upload/upload");

const router = new Router();

router.get("/", getAllCategory)
router.post("/", checkRole, createCategory)
router.delete("/:id", checkRole, delCategory)
router.get("/:id", getOneCategory)
router.put("/:id", updateCategory)

module.exports = router;