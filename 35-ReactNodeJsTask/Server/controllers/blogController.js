const Blog = require("../models/blogSchema");

const getAllBlogs = async (req, res) => {
  try {
    const blogs=await Blog.find()
    .populate("categoryId", "title productCount")
    res.status(200).json({
        data:blogs
    })
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

const getBlogById=async (req,res)=>{
    const {id}= req.params
    try {
        const blog=await Blog.findById(id)
        res.status(200).json({
            data:blog
        })
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
}

const deleteBlog=async (req,res)=>{
    const {id}= req.params

    try {
        const deletedBlog= await Blog.findByIdAndDelete(id)
        res.status(200).json({
            data:deletedBlog,
            message:"Successfully deleted"
        })
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
}

const addBlog=async (req, res)=>{
 const imageUrl = `http://localhost:8000/${req.file.path}`
 console.log(imageUrl);
 console.log("Req.body:", req.body);
 console.log("Req.file:", req.file);
    try {
        const newBlog= await Blog.create({
            title: req.body.title,
            content: req.body.content,
            categoryId: req.body.categoryId,
            image: imageUrl, })

        await newBlog.save()
        res.status(201).json({
            data:newBlog,
            message: "Successfully added"
        })
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
}

const uptadeBlog=async (req,res)=>{
    const {id}=req.params
    try {
        const updatedBlog=await Blog.findByIdAndUpdate(id, {...req.body}, {new:true})
        res.status(200).json({
            data:updatedBlog,
            message: "Succesfully uptaded"
        })
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
}

module.exports={getAllBlogs,getBlogById,addBlog,deleteBlog,uptadeBlog}