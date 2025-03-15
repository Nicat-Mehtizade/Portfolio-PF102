const express=require("express")
const {addBlog,deleteBlog,getAllBlogs,getBlogById,uptadeBlog}=require("../controllers/blogController")
const upload = require("../middlewares/multerMiddleware")
const router=express.Router()

router.get("/" , getAllBlogs)
router.get("/:id", getBlogById)
router.delete("/:id", deleteBlog)
router.post("/", upload.single("image"),addBlog)
router.put("/:id", uptadeBlog)

module.exports=router