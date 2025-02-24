import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientLayout from "./Layout/Client/ClientLayout";
import Home from "./Layout/Client/Home";
import Favorites from "./Layout/Client/Favorites";
import Basket from "./Layout/Client/Basket";
import NotFound from "./Layout/Client/NotFound";
import Products from "./Layout/Client/Products";
import Details from "./Layout/Client/Details";
import AdminLayout from "./Layout/Admin/AdminLayout";
import Dashboard from "./Layout/Admin/DashBoard";
import AdminProducts from "./Layout/Admin/AdminProducts";
import AddProduct from "./Layout/Admin/AddProduct";
import About from "./Layout/Client/About";
function App() {
  return (
    <>
      <Routes>
        {/* Client Layout */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="basket" element={<Basket />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Details />} />


          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Admin Layout  */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/product" element={<AdminProducts />} />
          <Route path="/admin/product/new" element={<AddProduct />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
