import { useState } from "react";
import "./index.css";
import { nanoid } from "nanoid";
import { BASE_URL } from "../../constants";
import axios from "axios";
const AddProduct = ({setProducts}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [isDiscount, setIsDiscount] = useState(false);

  const handleAddProduct = () => {
    const newProduct = {
      id: nanoid(8),
      isDiscounted: isDiscount,
      name: name,
      price: +price,
    };
    console.log(newProduct);

    const addProduct = async () => {
      try {
        const response = await axios.post(`${BASE_URL}products`, newProduct);
        setProducts((prevProducts) => [...prevProducts, response.data]);
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    addProduct();
  };

  return (
    <div className="addProduct">
      <input
        type="text"
        name=""
        id=""
        placeholder="Product Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="number"
        name=""
        id=""
        placeholder="Price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <div className="checkBox">
        <input
          type="checkBox"
          name=""
          id=""
          onChange={(e) => {
            setIsDiscount(e.target.checked);
          }}
        />
        <p>Discounted</p>
      </div>
      <button onClick={handleAddProduct} className="addProductBtn">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
