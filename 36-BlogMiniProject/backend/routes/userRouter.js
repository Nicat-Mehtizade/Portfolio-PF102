const express=require("express")
const {getAllUsers,getUserById,deleteUser,editUser}=require("../controllers/userController")
const verify = require("../middlewares/authMiddleware")

const router=express.Router()

router.get("/",verify(["admin"]), getAllUsers)
router.get("/:id",verify(["admin"]), getUserById)
router.delete("/:id",verify(["admin"]), deleteUser)
router.put("/:id",verify(["admin"]), editUser)

module.exports=router