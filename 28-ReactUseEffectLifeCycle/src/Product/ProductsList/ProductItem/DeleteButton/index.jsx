import axios from "axios";
import { BASE_URL } from "../../../../../constants/index";
import "./index.css";

const DeleteButton = ({ product, setProducts }) => {
  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}products/${id}`);
      setProducts((prevProducts) => prevProducts.filter(p => p.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={() => {
        deleteProduct(product.id);
      }}
      className="deleteBtn"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
