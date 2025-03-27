import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { FiUser } from "react-icons/fi";
import { IoBookmarksOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi2";
import { PiStarFourFill } from "react-icons/pi";
import { MdOutlineContactSupport } from "react-icons/md";
import { motion,AnimatePresence } from "framer-motion";
const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const decoded = token ? jwtDecode(token) : null;
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="border border-b-1 border-gray-200 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-2 md:gap-4">
            <NavLink className="font-bold text-xl sm:text-3xl" to={"/"}>
              Medium
            </NavLink>
            <div className="flex items-center bg-gray-100 gap-2 p-2 rounded-full">
              <CiSearch className="text-2xl text-gray-500" />
              <input
                className="text-sm text-gray-800 hidden sm:block focus:outline-0 placeholder:font-semibold"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 md:gap-5 relative">
            {!token && (
              <NavLink
                to={"/login"}
                className="text-gray-500 transition duration-300 hover:text-gray-300"
              >
                Login
              </NavLink>
            )}

            {token && (
              <>
                <IoNotificationsOutline className="text-2xl text-gray-500  hidden sm:block cursor-pointer" />

                <div
                  className="relative cursor-pointer"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <div className="flex justify-center items-center w-9 h-9 rounded-full bg-blue-900 text-white font-semibold">
                    {decoded.username.slice(0, 1)}
                  </div>

                  <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div 
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }} 
                    className="absolute right-0 top-10 bg-white rounded-lg w-65 py-5 z-50 shadow-[2px_2px_12px_rgba(0,0,0,0.35)]">
                      <ul className="text-sm text-gray-600 border-b-1 border-gray-200">
                        <li className="py-1 hover:text-black cursor-pointer text-sm font-semibold p-5 flex items-center gap-3 mb-3 text-gray-500">
                          <FiUser className="text-2xl text-gray-400" />
                          Profile
                        </li>
                        <li className="py-1 hover:text-black cursor-pointer text-sm font-semibold p-5 flex items-center gap-3 mb-3 text-gray-500">
                          <IoNewspaperOutline className="text-2xl text-gray-400" />
                          Stories
                        </li>
                        <li className="py-1 hover:text-black cursor-pointer text-sm font-semibold p-5 flex items-center gap-3 mb-3 text-gray-500">
                          <HiOutlineChartBar className="text-2xl text-gray-400" />
                          Stats
                        </li>
                        <NavLink
                          to={"/about"}
                          className="py-1 hover:text-black cursor-pointer text-sm font-semibold p-5 flex items-center gap-3 mb-3 text-gray-500"
                        >
                          <IoBookmarksOutline className="text-2xl text-gray-400" />
                          About
                        </NavLink>
                        <NavLink
                          to={"/contact"}
                          className="py-1 hover:text-black cursor-pointer text-sm font-semibold p-5 flex items-center gap-3 mb-3 text-gray-500"
                        >
                          <MdOutlineContactSupport className="text-2xl text-gray-400" />
                          Contact
                        </NavLink>
                      </ul>
                      <ul className="py-5 border-b-1 border-gray-200">
                        <li className="text-gray-500 hover:text-black font-medium px-5 mb-2 text-sm">
                          Settings
                        </li>
                        <li className="text-gray-500 hover:text-black font-medium px-5 mb-2 text-sm">
                          Refine recommendations
                        </li>
                        <li className="text-gray-500 hover:text-black font-medium px-5 mb-2 text-sm">
                          Manage publications
                        </li>
                        <li className="text-gray-500 hover:text-black font-medium px-5 mb-2 text-sm">
                          Help
                        </li>
                      </ul>
                      <ul className="py-5 border-b-1 border-gray-200">
                        <li className="text-gray-500 hover:text-black font-medium px-5 mb-2 text-sm flex items-center justify-between">
                          Become a Medium member
                          <PiStarFourFill className="text-yellow-400" />
                        </li>
                        <li className="text-gray-500 hover:text-black font-medium px-5 mb-2 text-sm">
                          Create a Mastodon account
                        </li>
                        <li className="text-gray-500 hover:text-black font-medium px-5 mb-2 text-sm">
                          Apply for author verification
                        </li>
                        <li className="text-gray-500 hover:text-black font-medium px-5 mb-2 text-sm">
                          Apply to the Partner Program
                        </li>
                        <li className="text-gray-500 hover:text-black font-medium px-5 mb-2 text-sm">
                          Gift a membership
                        </li>
                      </ul>
                      <button
                        onClick={handleLogout}
                        className="text-sm w-full text-red-500 hover:text-red-700 font-semibold py-3 text-left px-5 cursor-pointer"
                      >
                        <div>
                          <p>Sign Out</p>
                        </div>
                      </button>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
