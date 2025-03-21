const express=require("express")
const app = express()
const ConnectDb=require("./config/db")
const cors=require("cors")
const blogRouter= require("./routes/blogRouter")
const categoryRouter=require("./routes/categoryRouter")
const userRouter=require("./routes/authRouter")
const dotenv=require("dotenv")
const path=require("path")
ConnectDb()
app.use(cors())
app.use(express.json())

app.use("/api/blogs" , blogRouter)
app.use("/api/categories" , categoryRouter)
app.use("/api/users", userRouter)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })

