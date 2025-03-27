import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext=createContext(null)

const AuthProvider=({children})=>{
    const [token,setToken]=useState(null)
    const navigate = useNavigate();
    useEffect(() => {
        const checkTokenExpiration = () => {
          const storedToken = localStorage.getItem("token");
          const expiredDate = localStorage.getItem("tokenExpiredDate");
    
          if (storedToken && expiredDate && Date.now() < Number(expiredDate)) {
            setToken(storedToken);
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("tokenExpiredDate");
            setToken(null);
            navigate("/login")
          }
        };
    
        checkTokenExpiration();
        const interval = setInterval(checkTokenExpiration, 60000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <AuthContext.Provider value={{token, setToken}}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider