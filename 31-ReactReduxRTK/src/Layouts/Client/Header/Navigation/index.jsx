import { NavLink } from "react-router-dom";
import styles from "./index.module.css"
import { useSelector } from "react-redux";
const Navigation = () => {
  const favs = useSelector((state) => state.favorites.items);

  return (
    <nav className={styles.nav}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>

      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>

      <NavLink
        to={"/contact"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact
      </NavLink>

      <NavLink
        to={"/products"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Products
      </NavLink>

      <NavLink
        to={"/new"} end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Add Product
      </NavLink>

      <NavLink
        to={"/favorites"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Favorites <span className="text-red-500 font-medium">({favs.length})</span>
      </NavLink>

      <NavLink
        to={"/basket"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Basket
      </NavLink>
    </nav>
  );
};

export default Navigation;
