import { FaHeart, FaInfo } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavs } from "../../../redux/features/FavoritesSlice";

const Favorites = () => {
  const favs = useSelector((state) => state.favorites.items);
  const dispacth = useDispatch();
  console.log(favs);

  const handleAddFavs = (product) => {
    dispacth(toggleFavs(product));
  };

  return (
    <div>
      <div className="mx-auto max-w-[1280px]">
        <div className="py-20 flex flex-wrap justify-center items-center gap-5">
          {favs ? (
            favs.map((fav) => {
              return (
                <div
                  key={fav.id}
                  className="w-[300px] relative h-[500px] border flex flex-col cursor-pointer items-stretch justify-start p-5 gap-2 transition duration-400 border-gray-500 rounded-lg hover:translate-y-[-10px] hover:shadow-2xl "
                >
                  <img
                    className="w-full h-auto object-contain p-4 max-h-[300px]"
                    src={fav.image}
                    alt=""
                  />
                  <h1 className="font-bold text-xl ">
                    {fav.title.slice(0, 20) + "..."}
                  </h1>
                  <p>
                    <span className="font-bold">Category: </span>
                    {fav.category}
                  </p>
                  <p>{fav.description.slice(0, 50) + "..."}</p>
                  <p>
                    <span className="font-bold">Price: </span>
                    {fav.price}$
                  </p>
                  <button className="border rounded-[50%] bg-amber-300 flex justify-center absolute transition duration-300 text- p-1 text-2xl hover:translate-y-[-10px]">
                    <IoCart />
                  </button>
                  <button className="border border-black  rounded-[50%] right-[50px] top-[20px] bg-blue-500 flex justify-center transition duration-300 absolute p-1.5 text-xl text-white hover:translate-y-[-10px]">
                    <FaInfo />
                  </button>
                  <button
                    onClick={() => handleAddFavs(fav)}
                    className="border border-black  rounded-[50%] left-[60px] top-[20px] bg-red-500 flex justify-center transition duration-300 absolute p-1.5 text-xl text-white hover:translate-y-[-10px]"
                  >
                    <FaHeart />
                  </button>
                  <button className="border border-black  rounded-[50%] right-[10px] top-[20px] bg-red-700 flex justify-center transition duration-300 absolute p-1.5 text-xl text-white hover:translate-y-[-10px]">
                    <MdDelete />
                  </button>
                </div>
              );
            })
          ) : (
            <p>There is no favorite yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
