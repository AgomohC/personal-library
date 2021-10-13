const Comments = require("../models/Comments");
const Books = require("../models/Book");
const { BadRequestError, NotFoundError } = require("../errors");
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
  const { _id } = req.params;
  const book = await Books.findOne({ _id });
  if (!book) {
    throw new NotFoundError(`no books with id ${_id}`);
  }
  let comments = (await Comments.find({ createdBy: _id })) || [];
  const returnedBook = {
    title: book.title,
    _id: book._id,
    comments,
    commentCount: comments.length,
  };
  res.status(StatusCodes.OK).json(returnedBook);
};
const createComment = async (req, res) => {
  const {
    params: { _id },
    body: { comment },
  } = req;
  if (!comment) {
    throw new BadRequestError(`missing required field comment`);
  }
  const comments = await Comments.create({ comment, createdBy: _id });
  const bookComments = await Comments.find({ createdBy: _id });
  const updatedBook = await Books.findByIdAndUpdate(
    { _id },
    { commentCount: bookComments.length },
    { new: true }
  );
  if (!updatedBook) {
    throw new NotFoundError(`no book found`);
  }
  const returnedBook = {
    title: updatedBook.title,
    _id,
    bookComments,
    commentCount: bookComments.length,
  };

  res.status(StatusCodes.CREATED).json(returnedBook);
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
