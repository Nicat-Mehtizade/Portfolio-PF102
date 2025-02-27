import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientLayout from "./Layout/ClientLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Watches from "./pages/Watches";
import Details from "./pages/Details";
function App() {
  return (
    <>
      <Routes>
        {/* Client Layout */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Watches />}>
            <Route path=":id" element={<Details />} />
          </Route>
        </Route>
        {/* Admin Layout  */}
      </Routes>
    </>
  );
}

export default App;
