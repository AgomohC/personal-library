const mongoose = require("mongoose");
const BookSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  commentCount: {
    type: Number,
    default: 0,
  },
});
const Books = mongoose.model("Books", BookSchema);
module.exports = Books;
