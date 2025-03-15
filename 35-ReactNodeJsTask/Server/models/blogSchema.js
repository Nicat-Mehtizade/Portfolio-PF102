const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    date: { type: Date, default: Date.now },
    image: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
