const { Router } = require("express")
const checkRole = require("../middleware/checkRole");
const { getAllSpecial, getOneSpecial, postSpecial, deleteSpecial } = require("../controllers/special");
const { upload } = require("../aws_upload/upload");

const router = new Router();

router.get("/", getAllSpecial)
router.get("/:id", getOneSpecial)
router.post("", checkRole, upload.array("img", 3), postSpecial)
router.delete("/:id", checkRole, deleteSpecial)

module.exports = router;