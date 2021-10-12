const mongoose = require("mongoose");
const CommentSchema = mongoose.Schema({
  comment: String,
  createdBy: String,
});
const Comments = mongoose.model("Comments", CommentSchema);
module.exports = Comments;
