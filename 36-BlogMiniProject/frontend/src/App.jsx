import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./companents/PriveteRoute";
import ClientLayout from "./layout/Client";
import AdminLayout from "./layout/Admin";
import AdminBlog from "./pages/AdminBlog";
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
        </Route>

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
