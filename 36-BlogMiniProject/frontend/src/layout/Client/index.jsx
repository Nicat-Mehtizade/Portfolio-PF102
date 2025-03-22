import { Outlet } from "react-router-dom"
import Header from "../../companents/Header"

const ClientLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default ClientLayout