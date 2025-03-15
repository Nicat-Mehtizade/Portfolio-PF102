import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "./../../../constants/index";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from "../../../Context/FavoritesContext";
import toast, { Toaster } from "react-hot-toast";
import { BasketContext } from "../../../Context/BasketContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sort, setSort] = useState("");
  const navigate = useNavigate();
  const { favs, toggleFavs } = useContext(FavoritesContext);
  const {basket,addBasket}=useContext(BasketContext)
  
console.log(basket);
  const notify = () => toast.success("Added Successfully");

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

  useEffect(() => {
    let sortedProducts = [...allProducts];
    switch (sort) {
      case "ascByPrice":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "descByPrice":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "ascByTitle":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "descByTitle":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "default":
        sortedProducts = [...allProducts];
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  }, [sort, allProducts]);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container">
        <div className="products">
          <h1 className="productsTitle text-2xl font-bold">Products</h1>
          <div className="searchBar">
            <input
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              className="search border-1"
              type="text"
              placeholder="Enter the product name."
            />
            <select
              onChange={(e) => {
                setSort(e.target.value);
              }}
              className="select border-1"
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
                <div className="product" key={p.id}>
                  <button
                    className="heartBtn"
                    onClick={() => {
                      toggleFavs(p);
                      notify();
                    }}
                  >
                    {favs.find((q) => q.id == p.id) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                  <img className="productImage" src={p.image} alt="" />
                  <h1
                    onClick={() => {
                      handleDetails(p.id);
                    }}
                    className="productTitle"
                  >
                    {p.title.slice(0, 40) + "..."}
                  </h1>
                  <p className="productDesc">
                    {p.description.slice(0, 100) + "..."}
                  </p>
                  <p className="productPrice">Price: {p.price}$</p>
                  <button onClick={()=>addBasket(p)} className="border-1 rounded-lg font-medium !p-1 !mb-2 text-black transition duration-300 hover:bg-black hover:text-white">Add to Cart</button>
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
