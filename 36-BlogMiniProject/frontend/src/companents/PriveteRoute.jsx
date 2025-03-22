import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
const PriveteRoute = ({roles}) => {
  const { token } = useContext(AuthContext);
  const decoded = jwtDecode(token);
console.log(decoded);
  if (!token) {
    toast.error("You don't have access.",{
        duration:2000
    });
    return (
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <Navigate to="/login" />
      </>
    );
  }
  return (
    <div>
      {roles.includes(decoded.role) ? <Outlet/> : <Navigate to="/login" />}
    </div>
  );
};

export default PriveteRoute;
