const Comment = require("../models/commentSchema");

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({});

    if (comments.length === 0) {
      return res.status(404).json({ message: "Comments not found!" });
    }

    res.status(200).json({
      data: comments,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getCommentById = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findById(id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found!" });
    }

    res.status(200).json({
      data: comment,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedComment = await Comment.findByIdAndDelete(id);

    if (!deletedComment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }

    res.status(200).json({
      message: "Succesfully deleted",
      data: deletedComment,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const editComment = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }

    res.status(200).json({
      message: "Comment Updated",
      data: updatedComment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error,
    });
  }
};

const addComment = async (req, res) => {
  try {
    const addedComment = await Comment.create({ ...req.body });
    await addedComment.save();
    res.status(201).json({
      data: addedComment,
      message: "Successfully added",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error,
    });
  }
};

const getCommentsByBlogId = async (req, res) => {
  const { blogId } = req.params;
  try {
    const comments = await Comment.find({ blogId }).populate("authorId", "username");

    if (comments.length === 0) {
      return res.status(404).json({ message: "No comments found for this blog!" });
    }

    res.status(200).json({
      data: comments,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  getAllComments,
  getCommentById,
  deleteComment,
  addComment,
  editComment,
  getCommentsByBlogId
};
