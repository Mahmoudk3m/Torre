const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/skills/:username", mainController.getSkills);
router.get("index", mainController.getIndex);

module.exports = router;
