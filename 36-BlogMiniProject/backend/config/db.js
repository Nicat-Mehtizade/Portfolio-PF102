const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()

function connectDb(){
    const db=process.env.DB.replace("<password>",process.env.PASSWORD)
    mongoose.connect(db)
    .then(()=>console.log("Connected to MongoDB"))
    .catch((err)=>console.log(err))
}

module.exports=connectDb