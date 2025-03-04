import { Outlet } from "react-router-dom"
import Footer from "./../../Client/Footer"
import AdminHeader from "../AdminHeader"
const AdminLayout = () => {
  return (
    <div>
        <AdminHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AdminLayout