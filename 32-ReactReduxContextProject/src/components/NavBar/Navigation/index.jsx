import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
const Navigation = () => {
  return (
    <div className="flex gap-2 sm:gap-4 md:gap-5 lg:gap-7">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
         ` transition duration-300 hover:text-red-500 ${isActive ? `${styles.active}` :""}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to={"/products"}
        className={({ isActive }) =>
          ` transition duration-300 hover:text-red-500 ${
            isActive ? `${styles.active}` : ""
          }`
        }
      >
        Products
      </NavLink>

    </div>
  );
};

export default Navigation;
