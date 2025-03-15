const express=require("express")
const {addCategory,deleteCategory,getAllCategory,getCategoryById,uptadeCategory}=require("../controllers/categoryController")

const router=express.Router()

router.get("/" , getAllCategory)
router.get("/:id", getCategoryById)
router.delete("/:id", deleteCategory)
router.post("/" ,addCategory)
router.put("/:id", uptadeCategory)

module.exports=router