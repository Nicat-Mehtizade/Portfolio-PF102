import { useGetDataQuery } from "../../redux/services/watchesApi";
import type { Watch } from "../../types";
import { CiHeart } from "react-icons/ci";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavs } from "../../redux/features/FavoritesSlice";
import { IoMdHeart } from "react-icons/io";
import { addToBasket } from "../../redux/features/BasketSlice";
import { RootState } from "../../redux/App/store";
const WatchesSection = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useGetDataQuery();
  const favs = useSelector((state: RootState) => state.favorites.items);
  const basket = useSelector((state: RootState) => state.basket.items);
  const dispatch = useDispatch();
  console.log(basket);

  if (isError) {
    return <p className="flex justify-center items-center py-20 text-3xl font-bold">Some errors occured!</p>;
  }

  if (isLoading) {
    return <p className="flex justify-center items-center py-20 text-3xl font-bold">Loading...</p>;
  }

  const handleDetails = (id: string | number) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="py-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center flex flex-col justify-center items-center gap-2">
          <h1 className="text-4xl text-black font-bold">Popular Items</h1>
          <p className="text-sm text-gray-400 w-[75%] md:w-[45%] text-center ">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida.
          </p>
          <div className="flex flex-wrap justify-evenly gap-6">
            {data && data?.length > 0 ? (
              data.map((p: Watch) => {
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
                      <button onClick={()=>dispatch(addToBasket(p))} className="cursor-pointer absolute bottom-0 left-0 w-full  text-white  text-lg font-semibold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        {basket.find((item:Watch)=>item.id == p.id) ? <p className="bg-orange-500 py-4">Already in Cart</p> : <p className="bg-red-500 py-4">Add to Cart</p>}
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
          <button
            className={`bg-red-500 text-white font-medium text-sm py-4 px-6 mt-15 cursor-pointer ${styles.button}`}
          >
            VIEW MORE PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchesSection;
