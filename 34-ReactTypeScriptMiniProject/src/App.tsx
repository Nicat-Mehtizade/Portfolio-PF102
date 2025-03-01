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
          <Route path="products" element={<Watches />}/>
          <Route path="products/:id" element={<Details />} />

          <Route path="*" element={<NotFound/>}/>
        </Route>
        {/* Admin Layout  */}
      </Routes>
    </>
  );
}

export default App;
