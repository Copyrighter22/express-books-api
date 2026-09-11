const Book = require("../models/book.model");

// GET /api/books

module.exports.list = async (req, res) => {
  const books = await Book.find(req.query);
  res.json(books);
};

// GET /api/books/:id

module.exports.detail = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({ code: "not_found" });
  }

  res.json(book);
};

// POST /api/books

module.exports.create = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ code: "bad_request" });
  }
};

// PUT /api/books/:id

module.exports.update = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body);

  if (!book) {
    return res.status(404).json({ code: "not_found" });
  }

  res.json(book);
};

// DELETE /api/books/:id

module.exports.delete = async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) {
    return res.status(404).json({ code: "not_found" });
  }
  res.status(200).json({ message: "Book deleted successfully" });
};
