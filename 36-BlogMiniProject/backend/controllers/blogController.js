const Blog = require("../models/blogSchema");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});

    if (!blogs) {
      return res.status(404).json({ message: "Blogs not found!" });
    }

    res.status(200).json({
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found!" });
    }

    res.status(200).json({
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json({
      message: "Succesfully deleted",
      data: deletedBlog,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const editBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, { ...req.body }, {new:true});

    if (!updatedBlog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json({
      message: "Blog Updated",
      data: updatedBlog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error,
    });
  }
};

const addBlog = async (req, res) => {
  const imageUrl = `http://localhost:8000/${req.file.path}`;
  try {
    const addedBlog = await Blog.create({ ...req.body, image: imageUrl });
    await addedBlog.save();
    res.status(201).json({
      data: addedBlog,
      message: "Successfully added",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error,
    });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  deleteBlog,
  editBlog,
  addBlog,
};
