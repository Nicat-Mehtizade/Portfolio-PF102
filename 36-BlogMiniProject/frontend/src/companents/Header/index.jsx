import { CiSearch } from "react-icons/ci";
import { SlNote } from "react-icons/sl";
import { IoNotificationsOutline } from "react-icons/io5";
import {NavLink} from "react-router-dom"
const Header = () => {
  return (
    <div className="border border-b-1 border-gray-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center py-3">
         <div className="flex items-center gap-2 md:gap-4">
         <NavLink className={`font-bold text-xl sm:text-3xl`} to={"/"}>Medium</NavLink>
          <div className="flex items-center bg-gray-100 gap-2 p-2 rounded-full">
            <CiSearch className="text-2xl text-gray-500"/>
            <input className="text-sm text-gray-800 focus:outline-0 placeholder:font-semibold" type="text" name="" id="" placeholder="Search"/>
          </div>
         </div>
         <div className="flex justify-center items-center gap-2 md:gap-5">
            <div className="flex items-center gap-2 cursor-pointer">
            <SlNote  className="text-xl text-gray-500 hidden sm:block"/>
            <p className="text-gray-500 hidden sm:block">Write</p>
            </div>
            <IoNotificationsOutline className="text-2xl text-gray-500 hidden sm:block cursor-pointer"/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
