const mongoose = require("mongoose");
const BookSchema = mongoose.Schema({
  title: String,
});
const Books = mongoose.model("Books", BookSchema);
module.exports = Books;
