import { useState } from "react";
import "./index.css";
import { BASE_URL } from "../../../constants";
import axios from "axios";
const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    image: "",
    description: "",
  });
  const handleAddProduct = async (e) => {
    e.preventDefault();
    console.log(newProduct);
    try {
      const response = await axios.post(`${BASE_URL}products`, newProduct);
      setNewProduct({
        title: "",
        price: 0,
        image: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="addProduct">
          <div className="add">
            <h2>Add New Product</h2>
            <form onSubmit={handleAddProduct} action="">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                required
                value={newProduct.title}
                onChange={(e) => {
                  setNewProduct({ ...newProduct, title: e.target.value });
                }}
              />
              <label htmlFor="Price">Price</label>
              <input
                type="number"
                name="Price"
                id="Price"
                required
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    price: Number(e.target.value),
                  })
                }
              />
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                name="image"
                id="image"
                required
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              <label htmlFor="Description">Description</label>
              <input
                type="text"
                name="Description"
                id="Description"
                required
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
              />
              <button className="addBtn" type="submit">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
