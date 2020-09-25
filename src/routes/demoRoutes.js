const express = require("express");
const demoController = require("../controllers/demoController");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/recreate", demoController.recreate, userController.getAll);

module.exports = router;
