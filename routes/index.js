var express = require("express");
var router = express.Router();
const { fetchHeroes } = require("../controllers/heroController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/fetchHeroes", fetchHeroes);

module.exports = router;
