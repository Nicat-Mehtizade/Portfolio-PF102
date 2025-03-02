import { NavLink } from "react-router-dom";
import Logo from "../Header/Logo";

const AdminNavBar = () => {
  return (
    <div className="sticky top-0 z-10 bg-white shadow-xl">
      <div className="max-w-[1380px] mx-auto">
        <div className="flex justify-between py-8 items-center ">
          <Logo />
          <div className="flex gap-1 md:gap-8 text-xs md:text-lg font-medium">
            <NavLink end
              className={({ isActive }) =>
                `transition duration-300 hover:text-red-500 ${
                  isActive ? "text-red-500" : ""
                }`
              }
              to={"/admin"}
            >
              DashBoard
            </NavLink>
            <NavLink end
              className={({ isActive }) =>
                `transition duration-300 hover:text-red-500 ${
                  isActive ? "text-red-500" : ""
                }`
              }
              to={"/admin/product"}
            >
              Watches
            </NavLink>
            <NavLink end
              className={({ isActive }) =>
                `transition duration-300 hover:text-red-500 ${
                  isActive ? "text-red-500" : ""
                }`
              }
              to={"/admin/new"}
            >
              AddProduct
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavBar;
