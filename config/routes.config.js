const express = require("express");
const books = require("../controllers/book.controller");

const router = express.Router();

router.get("/api/books", books.list);

router.get("/api/books/:id", books.detail);

router.post("/api/books", books.create);

router.put("/api/books/:id", books.update);

router.delete("/api/books/:id", books.delete);

module.exports = router;
