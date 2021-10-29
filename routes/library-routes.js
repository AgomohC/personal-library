// require controllers
const router = require("express").Router();
const {
  createBook,
  getAllBooks,
  getSingleBook,
  createComment,
  deleteBook,
  deleteAllBooks,
} = require("../controllers/book-handler");
router.route("/books").post(createBook).get(getAllBooks).delete(deleteAllBooks);
router
  .route("/books/:_id")
  .get(getSingleBook)
  .post(createComment)
  .delete(deleteBook);

module.exports = router;
