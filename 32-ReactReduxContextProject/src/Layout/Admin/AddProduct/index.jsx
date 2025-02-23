import { useFormik } from "formik";
import { useAddNewProductMutation, useGetProductsQuery } from "../../../redux/services/products";
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import {productsValidationSchema} from "./validation"

const AddProduct = () => {
  const {data,isError,isLoading} = useGetProductsQuery()
  const [category,setCategory]=useState([])
const [addNewProduct]=useAddNewProductMutation()
  console.log(data);
  if(isError){
    <p>some errors occured!</p>
  }
  if(isLoading){
    <p>Loading...</p>
  }

  const formik = useFormik({
    initialValues: {
      id: nanoid(8),
      name: "",
      description: "",
      price: 0,
      discount: 0,
      category: "",
      image: "",
      rating:0,
      isNew:true,
    },
    validationSchema:productsValidationSchema,
    onSubmit: async(values, {resetForm}) => {
      try {
        console.log(values);
        const response= await addNewProduct(values)
        resetForm()
      } catch (error) {
        console.log(error);
      }
    },
  });
  useEffect(()=>{
if(data && data.length>0){
  const uniqueCategory=[...new Set(data.map((item)=>item.category))]
  setCategory(uniqueCategory)
}
  },[data])
  return (
    <div>
      <div className="max-w-[1280px] mx-auto">
        <div>
          <h1 className="text-3xl font-bold py-5">Add Product</h1>
          <form
            className="flex flex-col justify-center items-center gap-2"
            onSubmit={formik.handleSubmit}
          >
            <label className="font-bold" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="border w-[30%] py-1 rounded-2xl px-2"
            />
             {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500">{formik.errors.name}</div>
        ) : null}
            <label className="font-bold" htmlFor="description">
              Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description}
              className="border w-[30%] py-1 rounded-2xl px-2"
            />
             {formik.touched.description && formik.errors.description ? (
          <div className="text-red-500">{formik.errors.description}</div>
        ) : null}
            <label className="font-bold" htmlFor="price">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.price}
              className="border w-[30%] py-1 rounded-2xl px-2"
            />
             {formik.touched.price && formik.errors.price ? (
          <div className="text-red-500">{formik.errors.price}</div>
        ) : null}
            <label className="font-bold" htmlFor="discount">
              Discount
            </label>
            <input
              id="discount"
              name="discount"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.discount}
              className="border w-[30%] py-1 rounded-2xl px-2"
            />
            {formik.touched.discount && formik.errors.discount ? (
          <div className="text-red-500">{formik.errors.discount}</div>
        ) : null}
            <label className="font-bold" htmlFor="category">
              Category
            </label>
            <select
              className="border w-[30%] py-1 rounded-2xl px-3"
              name="category"
              id="category"
              onChange={formik.handleChange}
            >
              <option value="" selected disabled>
                Choose a category
              </option>
              {category.map((p,index)=>(
                <option key={index} value={p}>{p}</option>
              ))}
            </select>
            {formik.touched.category && formik.errors.category ? (
          <div className="text-red-500">{formik.errors.category}</div>
        ) : null}
            <label className="font-bold" htmlFor="image">
              Image
            </label>
            <input
              id="image"
              name="image"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.image}
              className="border w-[30%] py-1 rounded-2xl px-2"
            />
            {formik.touched.image && formik.errors.image ? (
          <div className="text-red-500">{formik.errors.image}</div>
        ) : null}
            <button className="border mt-2 text-white font-medium bg-blue-500 px-4 py-2 rounded-3xl cursor-pointer transition duration-300 hover:bg-blue-600" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
