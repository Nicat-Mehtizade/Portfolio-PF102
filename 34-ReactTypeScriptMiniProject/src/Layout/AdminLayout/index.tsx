import { Outlet } from "react-router-dom"
import AdminNavBar from "../../components/AdminNavBar"
import Footer from "../../components/Footer"

const AdminLayout = () => {
  return (
    <div>
      <AdminNavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AdminLayout