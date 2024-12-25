var express = require("express");
var router = express.Router();
const {
  fetchHeroesBatch,
  fetchHeroById,
  fetchRandomHeroes,
} = require("../controllers/heroController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/fetchHeroes", fetchHeroesBatch);
router.get("/fetchHeroById", fetchHeroById);
router.get("/getRandomHeroes", fetchRandomHeroes);

module.exports = router;
