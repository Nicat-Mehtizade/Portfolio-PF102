import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import {NavLink, useNavigate} from "react-router-dom"
const Header = () => {
  const token= localStorage.getItem("token")
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("token")
    navigate("/login")
  }
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
            <NavLink to={"/login"} className={`text-gray-500 transition duration-300 hover:text-gray-300 ${token ? "hidden ": ""}`}>Login</NavLink>
            <button onClick={handleLogout} className={`cursor-pointer text-gray-500 transition duration-300 hover:text-black ${!token ? "hidden": ""}`}>Log Out</button>
            <IoNotificationsOutline className="text-2xl text-gray-500 hidden sm:block cursor-pointer"/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
