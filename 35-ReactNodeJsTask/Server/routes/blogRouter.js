const express=require("express")
const {addBlog,deleteBlog,getAllBlogs,getBlogById,uptadeBlog}=require("../controllers/blogController")
const upload = require("../middlewares/multerMiddleware")
const validate = require("../middlewares/joiValidation")
const verify=require("../middlewares/authMiddleware")
const router=express.Router()

router.get("/" , verify([]), getAllBlogs)
router.get("/:id", getBlogById)
router.delete("/:id", deleteBlog)
router.post("/", upload.single("image"),validate,addBlog)
router.put("/:id", uptadeBlog)

module.exports=router