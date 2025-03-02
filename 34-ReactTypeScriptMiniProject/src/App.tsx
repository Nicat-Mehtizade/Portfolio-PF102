import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientLayout from "./Layout/ClientLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Watches from "./pages/Watches";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound";
import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import AdminWatches from "./pages/AdminWatches";
import AddProduct from "./pages/AddProduct";
function App() {
  return (
    <>
      <Routes>
        {/* Client Layout */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="basket" element={<Basket />} />
          <Route path="products" element={<Watches />} />
          <Route path="products/:id" element={<Details />} />

          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Admin Layout  */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/product" element={<AdminWatches/>}/>
          <Route path="/admin/new" element={<AddProduct/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
