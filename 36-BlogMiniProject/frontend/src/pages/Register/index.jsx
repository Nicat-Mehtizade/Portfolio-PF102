import { useFormik } from "formik";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Signup = () => {
  const nav = useNavigate();
  const [role, setRole] = useState("user");
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${BASE_URL}/register`, {...values, role});
        console.log(response.data);

        if (response.data.status == "success") {
          toast.success("Registered Successfully!", {
            duration: 2000,
          });
          setTimeout(() => {
            nav("/login");
          }, 2000);
        }
      } catch (error) {
        console.error("Error registering:", error);
        toast.error("Registration failed. Please try again.", {
          duration: 2000,
        });
      }
    },
  });
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col justify-center items-center gap-3 my-4">
          <div className="max-w-md w-full px-5 py-10 flex flex-col gap-2 shadow-[0px_12px_24px_rgba(0,0,0,0.35)] rounded-lg">
            <h1 className="text-2xl font-bold text-center">Welcome</h1>
            <p className="text-center text-gray-500 text-sm">
              Sign in to your account or create a new one
            </p>
            <div className="flex justify-between gap-4 bg-[#F4F4F5] px-2 py-1 rounded-sm">
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  `w-[50%] text-center font-semibold py-0.5 rounded-sm ${
                    isActive ? "bg-white" : ""
                  }`
                }
              >
                Login
              </NavLink>
              <NavLink
                to={"/register"}
                className={({ isActive }) =>
                  `w-[50%] text-center font-semibold py-0.5 rounded-sm ${
                    isActive ? "bg-white" : ""
                  }`
                }
              >
                Register
              </NavLink>
            </div>
            <div className="flex items-center justify-center gap-3 ">
              <button
                onClick={() => setRole("user")}
                className={`border p-2 rounded-lg cursor-pointer text-2xl ${
                  role === "user" ? "bg-gray-200 scale-95 " : ""
                }`}
              >
                <FaUser className={`text-2xl ${role === "user" ? "scale-90" : ""}`} />
              </button>
              <button
                onClick={() => setRole("author")}
                className={`border p-0.5 rounded-lg cursor-pointer ${
                  role === "author" ? "bg-gray-200 scale-95" : ""
                }`}
              >
                <img
                 className={`w-8.5 ${role === "author" ? "scale-90" : ""}`}
                  src="https://png.pngtree.com/png-clipart/20230418/original/pngtree-writer-line-icon-png-image_9064913.png"
                  alt="author"
                />
              </button>
            </div>
            <div>
              <form
                className="flex flex-col gap-3 "
                onSubmit={formik.handleSubmit}
              >
                <label className="font-semibold" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username..."
                  className="border border-gray-400 p-1 rounded-sm"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                <label className="font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="border border-gray-400 p-1 rounded-sm focus:outline-0"
                  type="email"
                  placeholder="Enter your email..."
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <label className="font-semibold" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  placeholder="Enter your password..."
                  className="border border-gray-400 p-1 rounded-sm focus:outline-0"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <div className="flex justify-between py-2">
                  <div className="flex gap-2 items-center">
                    <input className="w-4 h-4" type="checkbox" />
                    <span className="font-semibold">Remember me</span>
                  </div>
                  <p className="cursor-pointer hover:underline">
                    Forgot password?
                  </p>
                </div>
                <button
                  className="bg-black text-white font-semibold border p-2 transition duration-300 hover:bg-gray-800 rounded-lg cursor-pointer"
                  type="submit"
                >
                  Register
                </button>
              </form>

              <p className="text-center text-gray-500 text-sm font-semibold py-2">
                OR CONTINUE WITH
              </p>
              <div className="flex justify-center gap-4 py-2">
                <div className="flex gap-2 items-center border px-6 py-2 border-gray-500 rounded-sm cursor-pointer">
                  <img
                    className="w-6"
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                  <span className="font-semibold">Google</span>
                </div>
                <div className="flex gap-2 items-center border px-6 py-2 border-gray-500 rounded-sm cursor-pointer">
                  <FaFacebook />
                  <span>Facebook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
