import "./App.css";
import { Routes, Route } from "react-router-dom";
import ClientLayout from "./pages/Client/ClientLayout";
import Products from "./pages/Client/Products";
import ProductDetails from "./pages/Client/ProductDetails";
import Home from "./pages/Client/Home";
import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboard from "./pages/Admin/DashBoard";
import AdminProducts from "./pages/Admin/Products";
import AddProduct from "./pages/Admin/AddProduct"
import About from "./pages/Client/About";
import Contact from "./pages/Client/Contact";
import Favorites from "./pages/Client/Favorites";
import Basket from "./pages/Client/Basket";
function App() {
  return (
    <>
      <Routes>
        {/* Client Layout */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="favorites" element={<Favorites/>} />
          <Route path="basket" element={<Basket/>} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>
        {/* Admin Layout */}

        <Route path="admin" element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="product">
            <Route index  element={<AdminProducts/>}/>
            <Route path="new" element={<AddProduct/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
