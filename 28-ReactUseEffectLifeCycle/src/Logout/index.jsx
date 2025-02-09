import "./index.css"
const Logout = ({setIsLogged}) => {
    const handleLogout=()=>{
      setIsLogged(false)
    }
  return (
    <button className="logoutBtn" onClick={handleLogout}>LOGOUT</button>
  )
}

export default Logout