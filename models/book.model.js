const Joi = require("joi");

const books = require("../books.json");

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  genre: Joi.string().required(),
  year: Joi.number().integer().required(),
  available: Joi.boolean(),
});

class Book {
  static find(query) {
    let result = [...books];

    if (query.genre) {
      result = result.filter((b) => b.genre === query.genre);
    }

    if (query.sort === "year") {
      result.sort((a, b) => a.year - b.year);
    }

    return result;
  }

  static findById(id) {
    const book = books.find((b) => b.id === +id);
    return book;
  }
  static create(body) {
    const { error, value } = bookSchema.validate(body);

    if (error) {
      throw new Error(error.details);
    }

    const newBook = {
      id: books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1,
      ...value,
    };

    books.push(newBook);

    return newBook;
  }

  static findByIdAndUpdate(id, body) {
    const idx = books.findIndex((b) => b.id === +id);

    if (idx === -1) {
      return null;
    }

    books[idx] = { ...books[idx], ...body };

    return books[idx];
  }

  static findByIdAndDelete(id) {
    const idx = books.findIndex((b) => b.id === Number(id));
    if (idx === -1) {
      return null;
    }

    books.splice(idx, 1);

    return null;
  }
}

module.exports = Book;
