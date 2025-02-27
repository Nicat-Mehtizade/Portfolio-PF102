import { CiHeart } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
const HeaderBtns = () => {
  return (
    <div className="flex gap-1 md:gap-4">
      <button className="cursor-pointer text-xl md:text-2xl border transition duration-300 border-gray-400 p-0.5 md:p-1 rounded-full hover:text-red-500">
        <CiHeart />
      </button>
      <button className="cursor-pointer text-xl md:text-2xl border transition duration-300 border-gray-400 p-0.5 md:p-1 rounded-full hover:text-red-500">
        <IoCart />
      </button>
    </div>
  );
};

export default HeaderBtns;
