const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  latestComment: { type: String },
  avatar: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
