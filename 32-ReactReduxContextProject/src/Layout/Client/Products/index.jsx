import { useGetProductsQuery } from "../../../redux/services/products";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleFavs } from "../../../redux/features/FavoritesSlice";
import { addBasket } from "../../../redux/features/BasketSlice";
import { useEffect, useState } from "react";
const Products = () => {
  const { data, isError, isLoading } = useGetProductsQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favorites.items);
  const basket = useSelector((state) => state.basket.items);
  const [category, setCategory] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterByPrice, setFilterByPrice] = useState("");

  useEffect(() => {
    if (data && data.length > 0) {
      const uniqueCategory = [...new Set(data.map((item) => item.category))];
      setCategory(uniqueCategory);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      let filtered = data
        .filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase().trim())
        )
        .filter((p) =>
          selectedCategory == "all" ? true : p.category == selectedCategory
        );
        
      if (filterByPrice === "ascByPrice") {
        filtered = filtered.slice().toSorted((a, b) => (a.price - (a.price * a.discount) / 100) - (b.price - (b.price * b.discount) / 100));
      } else if(filterByPrice === "descByPrice") {
        filtered = filtered.slice().toSorted((a, b) =>(b.price - (b.price * b.discount) / 100) - (a.price - (a.price * a.discount) / 100));
      }
      setFilteredData(filtered);
    }
  }, [searchValue, data, selectedCategory, filterByPrice]);

  if (isError) {
    return <div>Some errors occured!</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const handleAddFavs = (p) => {
    dispatch(toggleFavs(p));
  };

  const handleAddBasket = (p) => {
    dispatch(addBasket(p));
  };

  return (
    <div>
      <div className="max-w-[1280px] mx-auto">
        <div>
          <div className="flex justify-between items-center border-b border-gray-300 py-4">
            <h1 className="text-4xl font-bold ">Products</h1>
            <div className="flex gap-1">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter a product name"
                onChange={(e) => setSearchValue(e.target.value)}
                className="border p-1 px-4 rounded-lg "
              />
              <select
                className="border rounded-lg"
                onChange={(e) => setSelectedCategory(e.target.value)}
                name=""
                id=""
              >
                <option value="all">All</option>
                {category.map((p, index) => (
                  <option key={index} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) => setFilterByPrice(e.target.value)}
                className="border rounded-lg"
                name=""
                id=""
              >
                <option value="" selected disabled>Filter By Price</option>
                <option value="ascByPrice">Lowest Price</option>
                <option value="descByPrice">Highest Price</option>
              </select>
            </div>
          </div>
          <Box
            className={`items-center justify-center`}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              padding: "30px 0px",
            }}
          >
            {filteredData &&
              filteredData.map((p) => {
                return (
                  <Box
                    key={p.id}
                    className={`items-center`}
                    sx={{
                      width: { xs: "100%", sm: "48%", md: "30%" },
                      position: "relative",
                    }}
                  >
                    <img src={p.image} alt={p.name} style={{ width: "100%" }} />
                    {p.isNew && (
                      <p className="absolute top-5 left-5 bg-red-500 text-white font-medium py-1 px-4 rounded-3xl">
                        New
                      </p>
                    )}
                    {p.discount && (
                      <p className="absolute top-5 right-5 bg-green-500 text-white font-medium py-1 px-4 rounded-3xl">
                        {p.discount}%
                      </p>
                    )}
                    <div className="flex flex-col justify-center py-3 gap-2 items-center">
                      <Box>
                        <Rating
                          name="simple-controlled"
                          value={p.rating}
                          readOnly
                        />
                      </Box>
                      <h1
                        onClick={() => {
                          handleDetails(p.id);
                        }}
                        className="cursor-pointer font-semibold text-xl transition duration-300 hover:text-blue-500"
                      >
                        {p.name}
                      </h1>
                      <div className="flex items-center gap-4 ">
                        <p className="font-bold text-xl">
                          {(p.price - (p.price * p.discount) / 100).toFixed(2)}$
                        </p>
                        <p className="line-through text-red-600 font-bold text-xl">
                          {p.price.toFixed(2)}$
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => {
                            handleAddFavs(p);
                          }}
                          className="text-2xl cursor-pointer text-red-500 border border-gray-300 rounded-full p-2"
                        >
                          {favs.find((q) => q.id == p.id) ? (
                            <IoMdHeart />
                          ) : (
                            <CiHeart />
                          )}
                        </button>
                        <button
                          onClick={() => {
                            handleAddBasket(p);
                          }}
                          className={`text-2xl cursor-pointer text-black border border-gray-300 rounded-full p-2 ${
                            basket.find((q) => q.id == p.id)
                              ? "bg-amber-300"
                              : "bg-white"
                          }`}
                        >
                          <IoCart />
                        </button>
                      </div>
                    </div>
                  </Box>
                );
              })}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Products;
