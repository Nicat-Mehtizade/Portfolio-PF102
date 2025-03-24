const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
const app=express()
const conntectDb=require("./config/db")
const blogRouter=require("./routes/blogRouter")
const commentRouter=require("./routes/commentRouter")
const userRouter=require("./routes/userRouter")
const authRouter=require("./routes/authRouter")
const likeRouter=require("./routes/likeRouter")
const path=require("path")

dotenv.config()

conntectDb()

app.use(cors())
app.use(express.json())

app.use("/api/blogs", blogRouter)
app.use("/api/comments", commentRouter)
app.use("/api/users" , userRouter)
app.use("/api", authRouter)
app.use("/api/likes", likeRouter);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })