import { useState } from "react";
import { useAddProductMutation } from "../../../redux/services/products";

const AddProduct = () => {
  const [AddProduct] = useAddProductMutation();
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = AddProduct(newProduct);
      setNewProduct({
        title: "",
        description: "",
        price: 0,
        image: "",
      })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="mx-auto max-w-[1280px]">
        <div className="h-[85vh] flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-3xl gap-4 items-end "
          >
            <input
              onChange={(e) => {
                setNewProduct({ ...newProduct, title: e.target.value });
              }}
              className="border p-2 w-full rounded-lg"
              type="text"
              value={newProduct.title}
              name=""
              id=""
              placeholder="Title"
            />
            <input
              onChange={(e) => {
                setNewProduct({ ...newProduct, description: e.target.value });
              }}
              className="border p-2 w-full rounded-lg"
              type="text"
              name=""
              id=""
              value={newProduct.description}
              placeholder="Description"
            />
            <input
              onChange={(e) => {
                setNewProduct({ ...newProduct, price: Number(e.target.value) });
              }}
              className="border p-2 w-full rounded-lg"
              type="number"
              name=""
              id=""
              value={newProduct.price}
              placeholder="Price"
            />
            <input
              onChange={(e) => {
                setNewProduct({ ...newProduct, image: e.target.value });
              }}
              className="border p-2 w-full rounded-lg"
              type="text"
              name=""
              id=""
              value={newProduct.image}
              placeholder="Image"
            />
            <button className="border w-20 p-2 flex justify-center items-center transition duration-300 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
