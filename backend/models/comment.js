const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  email: { type: String, required: true },
  comment: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
