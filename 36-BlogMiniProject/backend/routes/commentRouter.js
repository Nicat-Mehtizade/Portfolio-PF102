const express=require("express")
const {getAllComments,getCommentById,deleteComment,editComment,addComment} = require("../controllers/commentController")

const router=express.Router()

router.get("/", getAllComments)
router.get("/:id", getCommentById)
router.delete("/:id", deleteComment)
router.put("/:id", editComment)
router.post("/", addComment)

module.exports=router