import { IoMdHeart } from "react-icons/io";
import { Watch } from "../../types";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavs } from "../../redux/features/FavoritesSlice";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const favs = useSelector((state: RootState) => state.favorites.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetails = (id: string | number) => {
    navigate(`/products/${id}`);
  };
  return (
    <div>
      <div className="max-w-[1280px] mx-auto">
        <div className="py-15">
          <span className="text-4xl font-bold text-red-500">Favorites</span>
          <div className="flex flex-wrap justify-evenly gap-6">
            {favs && favs?.length > 0 ? (
              favs.map((p: Watch) => {
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
                        <IoMdHeart className="w-8 h-8 text-red-500" />
                      </button>
                      <button className="cursor-pointer absolute bottom-0 left-0 w-full bg-red-500 text-white py-4 text-lg font-semibold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        Add to Cart
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

export default Favorites;
