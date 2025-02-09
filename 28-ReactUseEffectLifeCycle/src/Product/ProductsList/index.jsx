import axios from "axios";
import { BASE_URL } from "../../../constants/index";
import { useEffect} from "react";
import ProductItem from "./ProductItem";
const ProductsList = ({ products, setProducts, searchTerm }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())  
  );
  const getProduct = async () => {
    try {
      const response = await axios(`${BASE_URL}products`);
      // console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <ProductItem setProducts={setProducts} products={filteredProducts} />
    </div>
  );
};

export default ProductsList;
