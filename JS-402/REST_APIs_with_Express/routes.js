const express = require("express");
const router = express.Router();
const records = require("./records");

function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

//Send GET request to /quotes to READ a list of quotes
router.get("/quotes", async (req, res) => {
  const quotes = await records.getQuotes();
  res.json(quotes);
});

// Send a GET request to /quotes/:id READ(view) a quote
router.get(
  "/quotes/:id",
  asyncHandler(async (req, res) => {
    const quote = await records.getQuote(req.params.id);
    if (quote) {
      res.json(quote);
    } else {
      res.status(404).json({ message: "Quote not found" });
    }
  })
);

// Send a GET request to READ(view) /quotes:id a random quote
router.get(
  "/quotes/quote/random",
  asyncHandler(async (req, res, next) => {
    const quote = await records.getRandomQuote();
    res.json(quote);
  })
);

// Send a POST request to /quote CREATE a new quote
router.post(
  "/quotes",
  asyncHandler(async (req, res) => {
    if (req.body.author && req.body.quote) {
      const quote = await records.createQuote({
        quote: req.body.quote,
        author: req.body.author,
      });
      res.status(201).json(quote);
    } else {
      res.status(400).json({ mnesssage: "Quote and author invalid!" });
    }
  })
);

// Send PUT request to /quotes:id UPDATE(edit) a quote
router.put(
  "/quotes/:id",
  asyncHandler(async (req, res) => {
    const quote = await records.getQuote(req.params.id);
    if (quote) {
      quote.quote = req.body.quote;
      quote.author = req.body.author;
      await records.updateQuote(quote);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Quote Not Found" });
    }
  })
);

// SEnd a DELETE request to /quotes:id Delete a quote
router.delete(
  "/quotes/:id",
  asyncHandler(async (req, res, next) => {
    const quote = await records.getQuote(req.params.id);
    await records.deleteQuote(quote);
    res.status(204).end();
    next(err);
  })
);

module.exports = router;
