const express = require("express");
const likeBlog = require("../controllers/likeController");
const verify = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/:id", verify(["admin", "user", "author"]), likeBlog);

module.exports = router;
