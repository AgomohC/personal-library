const router = require("express").Router();
const {
  createBook,
  getAllBooks,
  getSingleBook,
  createComment,
  deleteBook,
  deleteAllBooks,
} = require("../controllers/book-handler");
router
  .route("/books")
  .post(createBook)
  .get(getAllBooks)
  .get(getSingleBook)
  .post(createComment)
  .delete(deleteBook)
  .delete(deleteAllBooks);

module.exports = router;
