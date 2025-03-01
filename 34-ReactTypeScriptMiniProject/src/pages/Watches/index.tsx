import { useNavigate } from "react-router-dom";
import { useGetDataQuery } from "../../redux/services/watchesApi";
import { useDispatch, useSelector } from "react-redux";
import { Watch } from "../../types";
import { toggleFavs } from "../../redux/features/FavoritesSlice";
import { IoMdHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { addToBasket } from "../../redux/features/BasketSlice";
import { useEffect, useState } from "react";

const Watches = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useGetDataQuery();
  const favs = useSelector((state: RootState) => state.favorites.items);
  const basket = useSelector((state: RootState) => state.basket.items);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Watch[]>([]);
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.length > 0) {
      const uniqueCategory: string[] = [
        ...new Set(data.map((item) => item.model)),
      ];
      setCategory(uniqueCategory);
    }
  }, [data]);

  useEffect(() => {
    if (!data) return;
    let filtered = data.filter(
      (item) =>
        (item.model.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.brand.toLowerCase().includes(searchValue.toLowerCase())) &&
        (selectedCategory ? item.model === selectedCategory : "all")
    );
    if (price == "AscByPrice") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [searchValue, selectedCategory, data, price]);

  if (isError) {
    return (
      <p className="flex justify-center items-center py-20 text-3xl font-bold">
        Some errors occured!
      </p>
    );
  }

  if (isLoading) {
    return (
      <p className="flex justify-center items-center py-20 text-3xl font-bold">
        Loading...
      </p>
    );
  }

  const handleDetails = (id: string | number) => {
    navigate(`/products/${id}`);
  };

  return (
    <div>
      <div className="max-w-[1280px] mx-auto">
        <div className="py-15">
          <div className="md:flex justify-between items-center">
            <h1 className="text-2xl md:text-4xl font-bold text-red-500">
              All Watches
            </h1>
            <div className="flex justify-center gap-1 w-full  md:w-[50%]">
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                className="border rounded-lg w-full md:w-[60%] p-2 focus:outline-0"
                type="text"
                placeholder="Enter brand or model name"
              />
              <select
                className="border rounded-lg w-full md:w-[20%] focus:outline-0"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="" selected>
                  All Brands
                </option>
                {category.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
              <select
                className="border rounded-lg w-full md:w-[20%] focus:outline-0"
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="">Filter By Price</option>
                <option value="AscByPrice">Lowest Price</option>
                <option value="DescByPrice">Highest Price</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly gap-6 py-15">
            {filteredProducts && filteredProducts?.length > 0 ? (
              filteredProducts.map((p: Watch) => {
                return (
                  <div
                    key={p.id}
                    className="md:w-[30%] sm:w-[48%] xs:w-[100%] flex flex-col gap-3 group"
                  >
                    <div className="border-b-3 border-red-500 relative overflow-hidden">
                      <img src={p.image} alt={p.model} className="w-full" />
                      <button
                        onClick={() => dispatch(toggleFavs(p))}
                        className="absolute top-3 right-3  p-2 bg-transparent duration-500  opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      >
                        {favs.find((fav: Watch) => fav.id == p.id) ? (
                          <IoMdHeart className="w-8 h-8 text-red-500" />
                        ) : (
                          <CiHeart className="w-8 h-8 text-red-500" />
                        )}
                      </button>
                      <button
                        onClick={() => dispatch(addToBasket(p))}
                        className="cursor-pointer absolute bottom-0 left-0 w-full  text-white  text-lg font-semibold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                      >
                        {basket.find((item: Watch) => item.id == p.id) ? (
                          <p className="bg-orange-500 py-4">Already in Cart</p>
                        ) : (
                          <p className="bg-red-500 py-4">Add to Cart</p>
                        )}
                      </button>
                    </div>
                    <h1
                      onClick={() => handleDetails(p.id)}
                      className="font-bold text-xl transition duration-300 cursor-pointer hover:text-red-500"
                    >
                      {p.brand} {p.model}
                    </h1>
                    <p className="font-semibold text-lg text-gray-700">
                      $ {p.price}
                    </p>
                  </div>
                );
              })
            ) : (
              <p>There is no watch!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
