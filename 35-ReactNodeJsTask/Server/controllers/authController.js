const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { exist } = require("joi");
dotenv.config();

const register = async (req, res) => {
    const { username, email, password } = req.body;
  const existUser = await User.findOne({ email: email });
  try {
    if (existUser) {
      return res.status(400).json({
        status: "error",
        message: "Email already exist",
      });
    }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser=new User({username, email, password:hashedPassword})

      await newUser.save()

      res.status(201).json({
        status:"success",
        message: "User registered successfully"
      })
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const login =async (req, res)=>{
  const {email,password}=req.body

  const existUser=await User.findOne({email})
  try {
    if(!existUser || !(await bcrypt.compare(password, existUser.password))){
      return res.status(400).json({status:"error", message:"Invalid email or password"})
    }

    const token=jwt.sign(
      {
        username:existUser.username,
        role: existUser.role
      },
      process.env.JWT_SECRET,
      {expiresIn: 60 * 60}
    )

    res.status(200).json({status: 'success', message: 'User logged in successfully', token: `Bearer ${token}`});

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

module.exports={register, login}