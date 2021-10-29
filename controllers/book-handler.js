// import models
const Comments = require("../models/Comments");
const Books = require("../models/Book");

// import errors
const { BadRequestError, NotFoundError } = require("../errors");

// import http status codes
const { StatusCodes } = require("http-status-codes");

// create single book
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
  //  json return
  return res.status(StatusCodes.CREATED).json(returnedBook);
};

// get all books
const getAllBooks = async (req, res) => {
  const books = await Books.find({}).select({
    title: 1,
    commentCount: 1,
    _id: 1,
  });
  return res.status(StatusCodes.OK).json(books);
};

// get single book
const getSingleBook = async (req, res) => {
  const { _id } = req.params;
  const book = await Books.findOne({ _id });
  if (!book) {
    throw new NotFoundError(`no books with id ${_id}`);
  }
  let comments = await Comments.find({ createdBy: _id });
  const returnedBook = {
    title: book.title,
    _id: book._id,
    commentCount: comments.length,
    comments,
  };
  //  json return
  return res.status(StatusCodes.OK).json(returnedBook);
};

//  create single comment
const createComment = async (req, res) => {
  const {
    params: { _id },
    body: { comment },
  } = req;
  if (!comment) {
    throw new BadRequestError(`missing required field comment`);
  }

  //  find book with provided id
  const book = await Books.findById({ _id });
  if (!book) {
    throw new NotFoundError(`no book found`);
  }

  // add comment to the database
  await Comments.create({ comment, createdBy: _id });
  const bookComments = await Comments.find({ createdBy: _id });
  const updatedBook = await Books.findByIdAndUpdate(
    { _id },
    { commentCount: bookComments.length },
    { new: true }
  );
  const returnedBook = {
    title: updatedBook.title,
    _id,
    bookComments,
    commentCount: bookComments.length,
  };
  // json return
  return res.status(StatusCodes.CREATED).json(returnedBook);
};

// delete a single book and comments associated with book
const deleteBook = async (req, res) => {
  const { _id } = req.params;

  const book = await Books.findByIdAndDelete({ _id });
  await Comments.deleteMany({ createdBy: _id });
  if (!book) {
    throw new NotFoundError(`No book with _id: ${_id} exists`);
  }
  // json return
  return res
    .status(StatusCodes.OK)
    .json({ result: `successfully deleted, _id: ${_id}` });
};

// delete all books
const deleteAllBooks = async (req, res) => {
  await Books.deleteMany({});
  await Comments.deleteMany({});
  return res.status(StatusCodes.OK).json({ msg: "deleted successfully" });
};

// export controller functions
module.exports = {
  createBook,
  getAllBooks,
  getSingleBook,
  createComment,
  deleteBook,
  deleteAllBooks,
};
