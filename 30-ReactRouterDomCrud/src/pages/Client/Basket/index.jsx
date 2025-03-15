import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BasketContext } from "../../../Context/BasketContext";
import { FavoritesContext } from "../../../Context/FavoritesContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Basket = () => {
  const { basket, addBasket } = useContext(BasketContext);
  const { favs, toggleFavs } = useContext(FavoritesContext);
  const navigate = useNavigate();

  const notify = () => toast.success("Added Successfully");

  const handleDetails = (id) => {
    navigate(`/products/${id}`);
  };
  
  return (
    <div>
      <div className="container">
        {basket ? (
          basket.map((p) => (
            <div className="product" key={p.id}>
              <button
                className="heartBtn"
                onClick={() => {
                  toggleFavs(p);
                  notify();
                }}
              >
                {favs.find((q) => q.id == p.id) ? <FaHeart /> : <FaRegHeart />}
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
              <button
                onClick={() => addBasket(p)}
                className="border-1 rounded-lg font-medium !p-1 !mb-2 text-black transition duration-300 hover:bg-black hover:text-white"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Basket;
