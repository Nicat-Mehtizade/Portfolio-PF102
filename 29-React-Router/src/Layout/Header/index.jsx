import { NavLink } from "react-router";
import "./index.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
    <header className="header">
      <Logo />
      <nav>
        <ul className="navLinks">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="headerTitle">
        Clean Blog
    </div>
    </header>
  
    </>
  );
};

export default Header;
