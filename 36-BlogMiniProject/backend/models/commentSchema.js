const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true, versionKey: false }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
