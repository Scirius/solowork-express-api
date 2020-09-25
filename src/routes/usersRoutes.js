const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getSingleUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
