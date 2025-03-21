const express=require("express")
const {getAllBlogs,getBlogById,deleteBlog,addBlog,editBlog} = require("../controllers/blogController")
const upload = require("../middlewares/multerMiddleware")

const router=express.Router()

router.get("/", getAllBlogs)
router.get("/:id", getBlogById)
router.delete("/:id", deleteBlog)
router.put("/:id", editBlog)
router.post("/",upload.single("image") ,addBlog)

module.exports=router