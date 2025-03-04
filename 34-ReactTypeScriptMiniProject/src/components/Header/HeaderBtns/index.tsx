import { CiHeart } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import type { RootState } from "./../../../redux/App/store"

const HeaderBtns = () => {
  const favs=useSelector((state:RootState)=>state.favorites.items)
  const basket=useSelector((state:RootState)=>state.basket.items)

  return (
    <div className="flex gap-1 md:gap-4">
      <NavLink to={"/favorites"} className="relative cursor-pointer text-xs sm:text-lg md:text-2xl border transition duration-300 border-gray-400 p-2 rounded-full hover:text-red-500">
        <CiHeart />
        <p className="absolute top-0 right-6 md:right-8 translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 flex items-center justify-center bg-blue-500 text-white text-xs rounded-full">
          {favs.length}
        </p>
      </NavLink>
      <NavLink to={"/basket"} className="relative cursor-pointer text-xs  sm:text-lg md:text-2xl border transition duration-300 border-gray-400 p-2 rounded-full hover:text-red-500">
        <IoCart />
        <p className="absolute top-0 right-6 md:right-8 translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 flex items-center justify-center bg-blue-500 text-white text-xs rounded-full">
          {basket.length}
        </p>
      </NavLink>
    </div>
  );
};

export default HeaderBtns;
