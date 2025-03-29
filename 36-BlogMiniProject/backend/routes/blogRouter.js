const express = require("express");
const {
  getAllBlogs,
  getBlogById,
  deleteBlog,
  addBlog,
  editBlog,
} = require("../controllers/blogController");
const upload = require("../middlewares/multerMiddleware");
const verify = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.delete("/:id", verify(["admin", "author"]), deleteBlog);
router.put("/:id", verify(["admin", "author"]), editBlog);
router.patch(
  "/:id",
  upload.single("image"),
  verify(["admin", "author"]),
  editBlog
);
router.post("/", upload.single("image"), verify(["admin", "author"]), addBlog);

module.exports = router;
