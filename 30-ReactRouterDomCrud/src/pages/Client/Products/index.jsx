import { useEffect, useState } from "react";
import { BASE_URL } from "./../../../constants/index";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sort, setSort] = useState("");
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const response = await axios(`${BASE_URL}products`);
      setProducts(response.data);
      setAllProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleDetails = (id) => {
    navigate(`/products/${id}`);
  };
  const handleSearch = () => {
    if (inputValue.value == "") {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter((p) =>
        p.title.toLowerCase().trim().includes(inputValue.toLowerCase().trim())
      );
      setProducts(filteredProducts);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [inputValue]);

  switch (sort) {
    case "ascByPrice":
      products.sort((a, b) => a.price - b.price);
      break;
    case "descByPrice":
      products.sort((a, b) => b.price - a.price);
      break;
    case "ascByTitle":
      products.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "descByTitle":
      products.sort((a, b) => b.title.localeCompare(a.title));
      break;

    default:
      getProducts()
      break;
  }

  return (
    <div>
      <div className="container">
        <div className="products">
          <h1 className="productsTitle">Products</h1>
          <div className="searchBar">
            <input
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              className="search"
              type="text"
              placeholder="Enter the product name."
            />
            <select 
              onChange={(e) => {
                setSort(e.target.value);
              }}
              className="select"
              
            >
              <option selected disabled>
                select sort order
              </option>
              <option value="ascByPrice">ascByPrice</option>
              <option value="descByPrice">descByPrice</option>
              <option value="ascByTitle">ascByTitle</option>
              <option value="descByTitle">descByTitle</option>
              <option value="default">Default</option>
            </select>
          </div>
          <div className="productContainer">
            {products ? (
              products.map((p) => (
                <div
                  onClick={() => {
                    handleDetails(p.id);
                  }}
                  className="product"
                  key={p.id}
                >
                  <img className="productImage" src={p.image} alt="" />
                  <h1 className="productTitle">
                    {p.title.slice(0, 40) + "..."}
                  </h1>
                  <p className="productDesc">
                    {p.description.slice(0, 100) + "..."}
                  </p>
                  <p className="productPrice">Price: {p.price}$</p>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
