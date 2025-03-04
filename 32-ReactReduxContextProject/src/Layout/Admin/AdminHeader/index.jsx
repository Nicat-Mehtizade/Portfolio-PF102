import { NavLink } from "react-router-dom";
import Logo from "../../../components/NavBar/Logo";
import TopBlackSide from "../../../components/NavBar/TopBlackSide";

const AdminHeader = () => {
  return (
    <div>
      <TopBlackSide />

      <div className="max-w-[1280px] mx-auto">
        <div>
          <div className="flex items-center justify-between py-4">
            <Logo />
            <div className="flex gap-3">
                <NavLink to={"/admin"} end className={`${({isActive})=>(isActive ? "text-red-500" : "")} transition duration-300 hover:text-red-500`}>
                    Dashboard
                </NavLink>
                <NavLink to={"/admin/product"} end className={`${({isActive})=>(isActive ? "text-red-500" : "")} transition duration-300 hover:text-red-500`}>
                    Products
                </NavLink>
                <NavLink to={"/admin/product/new"} end className={`${({isActive})=>(isActive ? "text-red-500" : "")} transition duration-300 hover:text-red-500`}>
                    Add Product
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
