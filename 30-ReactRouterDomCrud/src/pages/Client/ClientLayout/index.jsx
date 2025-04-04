import { Outlet } from "react-router-dom"
import Header from "./../Header"
import ClientFooter from "../Footer"
const ClientLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <ClientFooter/>
    </div>
  )
}

export default ClientLayout