const Blog = require("../models/blogSchema");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const likeBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Token is missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    console.log(userId);

    const isLiked = blog.likes.some((like) => like?.userId?.toString() === userId)
    if (isLiked) {
      blog.likes = blog.likes.filter((like) => like?.userId?.toString() !== userId);
    } else {
      blog.likes.push({ userId });
    }
    await blog.save();
    res.status(200).json({ data: blog.likes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = likeBlog;
