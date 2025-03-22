import { createContext, useState } from "react";

export const AuthContext=createContext(null)

const AuthProvider=({children})=>{
    const storedToken=localStorage.getItem("token")
    const [token,setToken]=useState(storedToken ?? "")
    return (
        <AuthContext.Provider value={{token, setToken}}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider