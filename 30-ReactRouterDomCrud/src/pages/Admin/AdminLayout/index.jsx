import { Outlet } from "react-router-dom"
import AdminHeader from "../AdminHeader"
import AdminFooter from "../AdminFooter"

const AdminLayout = () => {
  return (
    <div>
        <AdminHeader/>
        <Outlet/>
        <AdminFooter/>
    </div>
  )
}

export default AdminLayout