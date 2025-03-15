import { useFormik } from "formik";
import "./index.css";
import { BASE_URL } from "../../../constants";
import axios from "axios";
import { bookValidationSchema } from "./validation";
const AddBook = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      image: "",
    },
    validationSchema: bookValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      try {
        const response = await axios.post(`${BASE_URL}products`, values);

        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="w-[100%] border-1 parentDiv">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-[25%] justify-center items-center"
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          className="border-1"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="text-red-500">{formik.errors.title}</div>
        ) : null}

        <label htmlFor="price">Price</label>
        <input
          className="border-1"
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div className="text-red-500">{formik.errors.price}</div>
        ) : null}

        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          className="border-1 input"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="text-red-500">{formik.errors.description}</div>
        ) : null}
        <label htmlFor="image">Image</label>
        <input
          id="image"
          name="image"
          className="border-1 input"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div className="text-red-500">{formik.errors.image}</div>
        ) : null}
        <button className="border-1 rounded-lg submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
