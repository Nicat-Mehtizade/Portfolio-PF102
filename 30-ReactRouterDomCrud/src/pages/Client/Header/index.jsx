import { NavLink } from "react-router-dom";
import "./index.css";
const ClientHeader = () => {
  return (
    <div className="client">
      <div className="container">
        <div className="clientHeader">
          <h1 className="title">Client Product</h1>
          <nav className="nav">
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
              to={"/admin"} className="admin"
            >
              Admin
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;
