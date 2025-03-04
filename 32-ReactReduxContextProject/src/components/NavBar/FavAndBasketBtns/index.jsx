import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import SignInBtn from "../SignInBtn";
import styles from "./index.module.css";
import { useSelector } from "react-redux";

const FavAndBasketBtns = () => {
  const favs=useSelector((state)=>state.favorites.items)
  const basket=useSelector((state)=>state.basket.items)
  return (
    <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
      <NavLink
        className={`border-1 border-gray-300 rounded-[50%] p-1.5 inline-block relative `}
        to={"/favorites"}
      >
        <CiHeart className={`text-2xl   `} />
        <p
          className={`absolute -top-2 -right-2 bg-blue-500 text-white !text-xs font-medium w-5 h-5 flex items-center justify-center rounded-full shadow-md`}
        >
          {favs.length}
        </p>
      </NavLink>
      <NavLink
        className={`border-1 border-gray-300 rounded-[50%] p-2 inline-block relative ${styles.button}`}
        to={"/basket"}
      >
        <IoCart className={`text-xl `} />
        <p className={`absolute -top-2 -right-2 bg-blue-500 !text-xs text-white font-medium w-5 h-5 flex items-center justify-center rounded-full shadow-md ${styles.number}`}>
          {basket.length}
        </p>
      </NavLink>
      <SignInBtn />
    </div>
  );
};

export default FavAndBasketBtns;
