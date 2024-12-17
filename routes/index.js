var express = require("express");
var router = express.Router();
const { fetchHeroesBatch, fetchHeroById } = require("../controllers/heroController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/fetchHeroes", fetchHeroesBatch);
router.get("/fetchHeroById", fetchHeroById);

module.exports = router;
