import { CiSearch } from "react-icons/ci";
import { SlNote } from "react-icons/sl";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto border">
        <div className="flex justify-between items-center py-2">
         <div className="flex items-center gap-4">
         <h1 className="font-bold text-3xl">Medium</h1>
          <div className="flex items-center bg-gray-100 gap-2 p-2 rounded-full">
            <CiSearch className="text-2xl text-gray-500"/>
            <input className="text-sm text-gray-800 focus:outline-0 placeholder:font-semibold" type="text" name="" id="" placeholder="Search"/>
          </div>
         </div>
         <div className="flex justify-center items-center gap-2 md:gap-5">
            <div className="flex items-center gap-2">
            <SlNote  className="text-xl text-gray-500"/>
            <p className="text-gray-500">Write</p>
            </div>
            <IoNotificationsOutline className="text-2xl text-gray-500"/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
