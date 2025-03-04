import Header from "./../Header"
import Footer from "./../Footer"
import {Outlet} from "react-router-dom"
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