const express = require("express");
const router = express.Router();
const { data } = require("../data/flashcardData.json");
const { cards } = data;

router.get("/", (req, res) => {
  const numberOfCards = cards.length;
  const flashcardId = Math.floor(Math.random() * numberOfCards);
  res.redirect(`/cards/${flashcardId}`);
});

router.get("/:id", (req, res) => {
  const { side } = req.query;
  const { id } = req.params;

  const name = req.cookies.username;
  const text = cards[id][side];
  const { hint } = cards[id];
  const templateData = { id, text, name, side };

  if (side === "question") {
    templateData.hint = hint;
    templateData.sideToShow = "answer";
    templateData.sideToShowDisplay = "Answer";
  } else if (side === "answer") {
    templateData.sideToShow = "question";
    templateData.sideToShowDisplay = "Question";
  } else if (!side) {
    return res.redirect(`/cards/${id}?side=question`);
  }
  res.render("card", templateData);
});

router.post("/goodbye", (req, res) => {
  res.clearCookie("username");
  res.redirect("/hello");
});

module.exports = router;
