const Category = require("../models/categorySchema");

const getAllCategory = async (req, res) => {
  try {
    const categories=await Category.find()
    res.status(200).json({
        data:categories
    })
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

const getCategoryById=async (req,res)=>{
    const {id}= req.params
    try {
        const category=await Category.findById(id)
        res.status(200).json({
            data:category
        })
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
}

const deleteCategory=async (req,res)=>{
    const {id}= req.params

    try {
        const deletedCategory= await Category.findByIdAndDelete(id)
        res.status(200).json({
            data:deletedCategory,
            message:"Successfully deleted"
        })
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
}

const addCategory=async (req, res)=>{

    try {
        const newCategory= await Category.create({...req.body})
        await newCategory.save()
        res.status(200).json({
            data:newCategory,
            message: "Successfully added"
        })
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
}

const uptadeCategory=async (req,res)=>{
    const {id}=req.params
    try {
        const updatedCategory=await Category.findByIdAndUpdate(id, {...req.body}, {new:true})
        res.status(200).json({
            data:uptadeCategory,
            message: "Succesfully uptaded"
        })
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
}

module.exports={getAllCategory,addCategory,deleteCategory,getCategoryById,uptadeCategory}