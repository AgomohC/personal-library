const mongoose = require("mongoose");
const BookSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
});
const Books = mongoose.model("Books", BookSchema);
module.exports = Books;
