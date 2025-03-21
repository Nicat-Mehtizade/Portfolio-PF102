const express=require("express")
const {getAllBlogs,getBlogById,deleteBlog,addBlog,editBlog} = require("../controllers/blogController")
const upload = require("../middlewares/multerMiddleware")
const verify = require("../middlewares/authMiddleware")
const router=express.Router()

router.get("/",verify(["admin","user","author"]), getAllBlogs)
router.get("/:id",verify(["admin","user","author"]), getBlogById)
router.delete("/:id",verify(["admin","author"]), deleteBlog)
router.put("/:id",verify(["admin","author"]), editBlog)
router.post("/",upload.single("image"),verify(["admin","author"]) ,addBlog)

module.exports=router