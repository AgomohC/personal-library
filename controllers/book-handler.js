const Comments = require("../models/Comments");
const Books = require("../models/Book");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const createBook = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    throw new BadRequestError(`missing require field title`);
  }
  const newBook = await Books.create({ title });

  res.status(StatusCodes.CREATED).json(newBook);
};
const getAllBooks = async (req, res) => {
  res.send("gcgc");
};
const getSingleBook = async (req, res) => {
  res.send("gygg");
};
const createComment = async (req, res) => {
  res.send("jhur");
};
const deleteBook = async (req, res) => {
  res.send("yrkkm");
};
const deleteAllBooks = async (req, res) => {
  res.send(gg);
};

module.exports = {
  createBook,
  getAllBooks,
  getSingleBook,
  createComment,
  deleteBook,
  deleteAllBooks,
};
