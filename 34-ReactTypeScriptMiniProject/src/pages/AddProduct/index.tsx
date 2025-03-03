import { useFormik } from 'formik';
import { useAddNewDataMutation } from '../../redux/services/watchesApi';
import { nanoid } from 'nanoid';
import watchesValidationSchema from './validation';
const AddProduct = () => {
  const [AddProduct]=useAddNewDataMutation()

  const formik = useFormik({
    initialValues: {
      id: nanoid(8),
      brand: '',
      model: '',
      price: 0,
      description:"",
      rating:0,
      image:"",
      quantity: 1,
    },
    validationSchema:watchesValidationSchema,
    onSubmit: async ( values, {resetForm}) => {
      try {
        const response= await AddProduct(values)
        resetForm()
      } catch (error) {
        console.log(error);
      }

    },
  });
  return (
    <div>
      <div className="max-w-[1280px] mx-auto">
        <div className='flex justify-center py-15'>
        <form className='flex flex-col py-15 justify-center w-1/2 gap-2 p-3' onSubmit={formik.handleSubmit}>
       <label htmlFor="brand">Brand</label>
       <input
         id="brand"
         name="brand"
         type="text"
         className='border rounded-lg p-1'
         onChange={formik.handleChange}
         value={formik.values.brand}
       />
        {formik.errors.brand && formik.touched.brand ? (
          <div className='text-red-500'>{formik.errors.brand}</div>
        ) : null}
       <label htmlFor="model">Model</label>
       <input
         id="model"
         name="model"
         type="text"
         className='border rounded-lg p-1'
         onChange={formik.handleChange}
         value={formik.values.model}
       />
       {formik.errors.model && formik.touched.model ? (
          <div className='text-red-500'>{formik.errors.model}</div>
        ) : null}
       <label htmlFor="price">Price</label>
       <input
         id="price"
         name="price"
         type="number"
         className='border rounded-lg p-1'
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       {formik.errors.price && formik.touched.price ? (
          <div className='text-red-500'>{formik.errors.price}</div>
        ) : null}
       <label htmlFor="description">Description</label>
       <input
         id="description"
         name="description"
         type="text"
         className='border rounded-lg p-1'
         onChange={formik.handleChange}
         value={formik.values.description}
       />
        {formik.errors.description && formik.touched.description ? (
          <div className='text-red-500'>{formik.errors.description}</div>
        ) : null}
       <label htmlFor="image">Image</label>
       <input
         id="image"
         name="image"
         type="text"
         className='border rounded-lg p-1'
         onChange={formik.handleChange}
         value={formik.values.image}
       />
        {formik.errors.image && formik.touched.image ? (
          <div className='text-red-500'>{formik.errors.image}</div>
        ) : null}
       <button className='bg-blue-500 cursor-pointer transition duration-300 hover:bg-blue-600 w-[20%] text-white font-semibold py-2 rounded-lg' type="submit">Submit</button>
     </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct