import { useContext } from "react";
import { FavoritesContext } from "../../../Context/FavoritesContext";
import "./index.css"
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
      const { favs, toggleFavs, clearAllFavs } = useContext(FavoritesContext);
      const navigate=useNavigate()
    
      if(favs.length==0){
       return( <p className="validation">There is no favorite,yet!</p>)
      }
      const handleDetails = (id) => {
        navigate(`/products/${id}`);
      };
  return (
    <div className="container">
       {favs ?<button onClick={()=>{clearAllFavs()}} className="clearAllBtn">Clear All</button> : ""}
         <div className="productContainer">
         
                    {favs ? (
                      favs.map((p) => (
                        <div className="product" key={p.id}>
                          <button className="heartBtn" onClick={() => toggleFavs(p)}>
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
                        </div>
                      ))
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>
    </div>
  )
}

export default Favorites