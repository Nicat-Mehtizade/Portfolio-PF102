import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./companents/PriveteRoute";
import ClientLayout from "./layout/Client";
import AdminLayout from "./layout/Admin";
import AdminBlog from "./pages/AdminBlog";
import Details from "./pages/Details";
import About from "./pages/About";
function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/blogs/:id" element={<Details/>}/>
        </Route>
        <Route path="/about" element={<About/>}/>
        
        <Route path="/" element={<PrivateRoute roles={["admin"]} />} >
          <Route path="admin" element={<AdminLayout />}>
            <Route path="blog" element={<AdminBlog />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
