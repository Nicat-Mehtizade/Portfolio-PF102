import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./companents/PrivateRoute";
import ClientLayout from "./layout/Client";
import AdminLayout from "./layout/Admin";
import Details from "./pages/Details";
import About from "./pages/About";
import AddPostPage from "./pages/AddPost";
import Contact from "./pages/Contact";
import Dashboard from "./pages/DashBoard";
import AdminBlog from "./pages/AdminBlog";
import AdminUsers from "./pages/AdminUsers";

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
          <Route path="/blogs/:id" element={<Details />} />
          <Route path="/new" element={<AddPostPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/about" element={<About />} />

        <Route element={<PrivateRoute roles={["admin"]} />}>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="blog" element={<AdminBlog />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
