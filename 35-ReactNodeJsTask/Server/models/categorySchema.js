const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
  title: {type:String, required:true, unique:true, trim: true},
  productCount:{ type: Number, required: true}
  },
  { timestamps: true, versionKey: false }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
