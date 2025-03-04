import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="flex gap-1 md:gap-8 text-xs md:text-lg font-medium">
      <NavLink className={({isActive})=>`transition duration-300 hover:text-red-500 ${(isActive ? "text-red-500" : "")}`} to={"/"}>Home</NavLink>
      <NavLink  className={({isActive})=>`transition duration-300 hover:text-red-500 ${(isActive ? "text-red-500" : "")}`} to={"/products"}>Watches</NavLink>
      <NavLink  className={({isActive})=>`transition duration-300 hover:text-red-500 ${(isActive ? "text-red-500" : "")}`} to={"/about"}>About</NavLink>
      <NavLink  className={({isActive})=>`transition duration-300 hover:text-red-500 ${(isActive ? "text-red-500" : "")}`} to={"/contact"}>Contact</NavLink>
    </div>
  );
};

export default Navigation;
