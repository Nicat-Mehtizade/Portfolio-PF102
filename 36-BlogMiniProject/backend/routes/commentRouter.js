const express=require("express")
const {getAllComments,getCommentById,deleteComment,editComment,addComment} = require("../controllers/commentController")
const verify = require("../middlewares/authMiddleware")

const router=express.Router()

router.get("/",verify(["admin","user","author"]), getAllComments)
router.get("/:id",verify(["admin","user","author"]), getCommentById)
router.delete("/:id",verify(["admin","user","author"]), deleteComment)
router.put("/:id",verify(["admin","user","author"]), editComment)
router.post("/",verify(["admin","user","author"]), addComment)

module.exports=router