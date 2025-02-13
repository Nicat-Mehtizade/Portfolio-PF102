import { NavLink } from "react-router-dom";
import "./index.css";
const AdminHeader = () => {
  return (
    <div className="adminSide">
      <div className="container">
        <div className="adminHeader">
          <h1 className="adminTitle">Admin Product</h1>
          <nav className="adminNav">
            <NavLink
              to={"/admin"} end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
            <NavLink
              to={"/admin/product"} end
              className={({ isActive }) => (isActive ? "active" : "") }
            >
              Products 
            </NavLink>
            <NavLink
              to={"/admin/product/new"} end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Add Product
            </NavLink>
            <NavLink to={"/"} className="clientBtn">
              Client
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
