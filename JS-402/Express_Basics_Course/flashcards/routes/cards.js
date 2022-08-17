const express = require("express");
const router = express.Router();
const { data } = require("../data/flashcardData.json");
const { cards } = data;
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

router.get("/", (req, res) => {
  res.render("card");
});

router.get("/:id", (req, res) => {
  res.locals.colors = colors;
  res.locals.prompt = cards[req.params.id].question;
  res.locals.hint = cards[req.params.id].hint;
  res.render("card");
  console.log(res.locals);
});

module.exports = router;
