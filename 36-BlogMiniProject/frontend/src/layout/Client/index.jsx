import { Outlet } from "react-router-dom"
import Header from "../../companents/Header"
import Footer from "../../companents/Footer"

const ClientLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default ClientLayout