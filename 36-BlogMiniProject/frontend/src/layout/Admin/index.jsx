import { NavLink, Outlet } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { ImStatsBars } from "react-icons/im";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

const AdminLayout = () => {
  const [isOpened, setIsOpened] = useState(true);
  const token = localStorage.getItem("token");
  const decoded = token ? jwtDecode(token) : null;

  return (
    <div className="flex h-screen bg-gray-50">
      <div
        className={`border-r border-gray-200  h-full flex flex-col transition-all duration-300 ease-in-out flex-shrink-0 ${
          isOpened ? "w-60" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 font-bold text-xl">
          {isOpened && <p className="whitespace-nowrap">Medium Admin</p>}
          <button
            className="cursor-pointer transition-transform duration-300 p-1 rounded-md hover:bg-gray-300"
            onClick={() => setIsOpened(!isOpened)}
          >
            <IoMdClose className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-4 px-2">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-lg rounded-md cursor-pointer transition-all hover:scale-105 ${
                isActive ? "bg-black text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <ImStatsBars className="text-xl min-w-[20px]" />
            <span
              className={`ml-3 transition-opacity duration-200 whitespace-nowrap ${
                isOpened ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              Dashboard
            </span>
          </NavLink>

          <NavLink
            to="/admin/blog"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-lg rounded-md cursor-pointer transition-all hover:scale-105 ${
                isActive ? "bg-black text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <IoNewspaperOutline className="text-xl  min-w-[20px]" />
            <span
              className={`ml-3 transition-opacity duration-200 whitespace-nowrap ${
                isOpened ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              Blogs
            </span>
          </NavLink>
          <NavLink
            end
            to="/admin/users"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-lg rounded-md cursor-pointer transition-all hover:scale-105 ${
                isActive ? "bg-black text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <FaUsers className="text-xl  min-w-[20px]" />
            <span
              className={`ml-3 transition-opacity duration-200 whitespace-nowrap ${
                isOpened ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              Users
            </span>
          </NavLink>
          <div className="flex items-center px-4 py-2 text-lg hover:bg-gray-200 rounded-md cursor-pointer transition-all hover:scale-105">
            <IoIosNotificationsOutline className="text-xl  min-w-[20px]" />
            <span
              className={`ml-3 transition-opacity duration-200 whitespace-nowrap ${
                isOpened ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              Notifications
            </span>
          </div>
          <div className="flex items-center px-4 py-2 text-lg hover:bg-gray-200 rounded-md cursor-pointer transition-all hover:scale-105">
            <IoSettingsOutline className="text-xl  min-w-[20px]" />
            <span
              className={`ml-3 transition-opacity duration-200 whitespace-nowrap ${
                isOpened ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              Settings
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div>
          <div className="flex border-b-1 border-gray-200 justify-end py-3 px-5 gap-4">
            <button className="text-2xl border p-2 border-gray-300 rounded-lg">
              <IoIosNotificationsOutline />
            </button>
            <div className="flex items-center gap-2">
              <p className="bg-gradient-to-br from-blue-400 to-purple-500 w-10 h-10 text-white rounded-full flex items-center justify-center font-semibold">
                {decoded.username.slice(0, 1).toUpperCase()}
              </p>
              <div>
                <p className="font-semibold">{decoded.username}</p>
                <p className="text-gray-500 text-xs">
                  {decoded.role
                    .slice(0, 1)
                    .toUpperCase()
                    .concat(decoded.role.slice(1))}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
