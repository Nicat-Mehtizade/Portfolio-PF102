import axios from "axios";
import { BASE_URL } from "../../constants";
import { useEffect, useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { PiHandsClapping } from "react-icons/pi";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { SlNote } from "react-icons/sl";
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const decoded = token ? jwtDecode(token) : null;
  console.log(decoded);
  const getAllBlogs = async () => {
    try {
      const response = await axios(`${BASE_URL}/blogs`);
      setBlogs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(blogs);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const handleDetails = (id) => {
    navigate(`/blogs/${id}`);
  };

  const handleAddBlog = () => {
    if (decoded.role == "user") {
      toast.error(
        "You do not have access to add blogs. Only authors can add them.",
        {
          duration: 2000,
        }
      );
    } else {
      navigate("/new");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/blogs/${id}`,{
        headers: {
          Authorization: `${token}`
        }
      });

      toast.success("Blog deleted successfully!", {
        duration: 2000,
      });
      getAllBlogs()
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while deleting the blog. Please try again.", {
        duration: 2000,
      });
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-[1380px] mx-auto">
        <div className="flex gap-15">
          <div className="lg:w-[60%] mx-10 lg:ml-30  py-10">
            <div className="flex border-b-1 border-gray-300 justify-between font-semibold mb-10 text-sm items-center text-gray-500">
              <div className="flex items-center gap-4 md:gap-7">
                <FaPlus />
                <p className="text-black border-b-1 py-5">For you</p>
                <p>Following</p>
                <p className="hidden sm:block">
                  Featured{" "}
                  <span className="text-white bg-green-700 p-0.5 rounded-sm text-xs">
                    New
                  </span>
                </p>
                <p className="hidden sm:block">React</p>
                <p className="hidden sm:block">Coding</p>
              </div>
              <button
                onClick={handleAddBlog}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <SlNote className="text-xl text-gray-500 group-hover:text-black" />
                <p className="text-gray-500 group-hover:text-black">Write</p>
              </button>
            </div>
            {blogs ? (
              blogs.map((blog) => {
                return (
                  <div
                    onClick={() => handleDetails(blog._id)}
                    className="border-b-1 py-5 cursor-pointer border-gray-200"
                    key={blog._id}
                  >
                    <div className="flex gap-5 items-center justify-between ">
                      <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-lg md:text-2xl lg:w-[85%]">
                          {blog.title.length > 50
                            ? blog.title.slice(0, 50) + "..."
                            : blog.title}
                        </h1>
                        <p className="text-gray-600 text-sm">
                          {blog.content.slice(0, 125) + "..."}
                        </p>
                      </div>
                      <img
                        className="w-20 lg:max-h-40 lg:w-40"
                        src={blog.image}
                        alt={blog.title}
                      />
                    </div>
                    <div className=" py-4 flex justify-between lg:w-[70%]">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-3">
                          <PiStarFourFill className="text-yellow-400" />
                          <span className="text-gray-500 text-sm">
                            {new Date(blog.date).toISOString().split("T")[0]}
                          </span>
                        </div>
                        <div className="flex gap-1 items-center">
                          <PiHandsClapping className="text-gray-600" />
                          <span className="text-gray-500">
                            {blog.likes.length}
                          </span>
                        </div>
                      </div>
                      <div className="text-gray-500 flex gap-1 md:gap-4 text-2xl">
                        <button
                          className={
                            decoded.id == blog.author._id ? "block" : "hidden"
                          }
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(blog._id);
                          }}
                        >
                          <CiCircleMinus className="cursor-pointer hover:text-black" />
                        </button>
                        <MdOutlineBookmarkAdd className="cursor-pointer hover:text-black" />
                        <BsThreeDots className="cursor-pointer hover:text-black" />
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>There is no blog,yet!</p>
            )}
          </div>
          <div className="hidden lg:block border-l-1 border-gray-200 w-[35%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
