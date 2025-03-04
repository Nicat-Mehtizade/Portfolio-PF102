import { useEffect, useState } from "react";
import { BASE_URL } from "./../../../constants/index";
import { useParams } from "react-router";
import "./index.css"
import { FaStar } from "react-icons/fa6";

import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProduct = async (id) => {
    try {
      const response = await axios(`${BASE_URL}products/${id}`);
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);
  return (
    <div>
      <div className="container">
        {product ? (
          <div className="detailProduct">
            <img className="detailImage" src={product.image} alt="" />
            <div className="detailRightSide">
                <h1 className="detailTitle">{product.title}</h1>
                <h3 className="detailCategory"><span className="highlight">Category:</span> {product.category}</h3>
                <p className="detailDesc">{product.description}</p>
                <p className="detailPrice"><span className="highlight">Price:</span> {product.price}$</p>
                <p className="detailRate"><span className="highlight">Rate:</span> {product.rating.rate}<FaStar className="star" /></p>
                <p><span className="highlight">Count:</span> {product.rating.count}</p>
            </div>
          </div>
        ) : (
          <p>Not Found 404</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
