const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");

router.get("/", staticController.homepage);
router.get("/*", staticController.page404);
module.exports = router;
