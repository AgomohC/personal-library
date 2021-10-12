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
  const returnedBook = {
    _id: newBook._id,
    title: newBook.title,
  };
  res.status(StatusCodes.CREATED).json(returnedBook);
};
const getAllBooks = async (req, res) => {
  const books = await Books.find({}).select({
    title: 1,
    commentCount: 1,
    _id: 1,
  });
  res.status(StatusCodes.OK).json(books);
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
