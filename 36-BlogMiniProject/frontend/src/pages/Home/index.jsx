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
import { format } from "date-fns";
import { BsBookmarkPlus } from "react-icons/bs";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [popularBlog, setPopularBlog] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const decoded = token ? jwtDecode(token) : null;
  // console.log(decoded);
  const getAllBlogs = async () => {
    try {
      const response = await axios(`${BASE_URL}/blogs`);
      setBlogs(response.data.data);

      const sortedBlogs = response.data.data.toSorted(
        (a, b) => b.likes.length - a.likes.length
      );
      setPopularBlog(sortedBlogs.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(blogs);
  console.log(popularBlog);
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
      const response = await axios.delete(`${BASE_URL}/blogs/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      toast.success("Blog deleted successfully!", {
        duration: 2000,
      });
      getAllBlogs();
    } catch (error) {
      console.log(error);
      toast.error(
        "An error occurred while deleting the blog. Please try again.",
        {
          duration: 2000,
        }
      );
    }
  };

  const topics = [
    "Data Science",
    "Self Improvement",
    "Technology",
    "Writing",
    "Relationships",
    "Cryptocurrency",
    "Politics",
  ];

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
                          {format(new Date(blog.date), "MMM dd, yyyy")}
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
          <div className="hidden lg:block border-l-1 border-gray-200 w-[35%]">
            <h1 className="font-bold text-2xl py-5 px-7">Most Popular Blogs</h1>
            {popularBlog.map((blog) => {
              return (
                <div
                  onClick={() => handleDetails(blog._id)}
                  className="py-3 px-7 flex flex-col gap-3 cursor-pointer"
                  key={blog._id}
                >
                  <div className="flex gap-1">
                    <p className="bg-blue-500 text-white font-bold rounded-full text-sm px-1 flex items-center justify-center">
                      {blog.author.username.slice(0, 1).toUpperCase()}
                    </p>
                    <p className="text-sm hover:underline">
                      {blog.author.username}
                    </p>
                  </div>
                  <h1 className="font-bold text-lg">{blog.title}</h1>
                  <div className="flex gap-3">
                    <p className="text-gray-500">
                      {format(new Date(blog.date), "MMM, dd")}
                    </p>
                    <div className="flex gap-1 items-center">
                      <PiHandsClapping className="text-gray-600" />
                      <span className="text-gray-500">{blog.likes.length}</span>
                    </div>
                  </div>
                </div>
              );
            })}
            <p className="text-gray-500 text-sm px-7 cursor-pointer font-semibold hover:underline mb-5">
              See the full list
            </p>
            <div>
              <h1 className="font-semibold text-lg px-7 py-1 mb-3">
                Recommended topics
              </h1>
              <div className="flex flex-wrap gap-3 px-7 mb-4">
                {topics.map((topic) => (
                  <p className="bg-gray-100 py-2 text-sm px-4 rounded-full font-medium cursor-pointer">
                    {topic}
                  </p>
                ))}
              </div>
              <p className="text-gray-500 px-7 text-sm cursor-pointer font-semibold hover:underline mb-5">
                See more topics
              </p>
            </div>
            <div className="px-7 py-3">
              <h1 className="font-semibold mb-5">Who to follow</h1>
              <div className="flex items-center gap-4 mb-4">
                <img
                  className="rounded-full w-9"
                  src="https://miro.medium.com/v2/resize:fill:60:60/1*AgkC3EIuY6TgqPe3kWr59w.jpeg"
                  alt=""
                />
                <div>
                  <h1 className="font-bold">Coders Stop</h1>
                  <p className="text-xs text-gray-500">
                    Software Engineer 💻. I help people to get better every
                    da...
                  </p>
                </div>
                <button className="border rounded-full py-1 text-sm cursor-pointer px-3">
                  Follow
                </button>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  className="rounded-full w-9"
                  src="https://miro.medium.com/v2/resize:fill:176:176/1*cwlpT_-EPnUAgQxQRVZAvQ.png"
                  alt=""
                />
                <div>
                  <h1 className="font-bold">The Pythoneers</h1>
                  <p className="text-xs text-gray-500">
                    Your home for innovative tech stories about Python and
                    its....
                  </p>
                </div>
                <button className="border rounded-full py-1 text-sm cursor-pointer px-3">
                  Follow
                </button>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  className="rounded-full w-9"
                  src="https://miro.medium.com/v2/resize:fill:110:110/1*f1ckfFZTi4jOIEO6ZPO8CQ.jpeg"
                  alt=""
                />
                <div>
                  <h1 className="font-bold">Jan Kammerath</h1>
                  <p className="text-xs text-gray-500">
                    I love technology, programming, computers.....
                  </p>
                </div>
                <button className="border rounded-full py-1 text-sm cursor-pointer px-3">
                  Follow
                </button>
              </div>
              <p className="text-gray-500 text-sm cursor-pointer font-semibold hover:underline mb-5">
                See more suggestions
              </p>
            </div>
            <div className="px-7">
              <h1 className="text-lg font-semibold mb-2">Reading list</h1>
              <div className="mb-4">
                <p className="text-gray-600 text-sm leading-relaxed font-semibold">
                  Click the{" "}
                  <BsBookmarkPlus className="inline mx-1 text-lg text-gray-700" />{" "}
                  on any story to easily add it to your reading list or a custom
                  list that you can share.
                </p>
              </div>
            </div>
            <div className="flex gap-2 text-[11px] px-7 text-gray-500 flex-wrap w-[80%]">
              <p className="cursor-pointer">Help</p>
              <p className="cursor-pointer">Status</p>
              <p className="cursor-pointer">About</p>
              <p className="cursor-pointer">Careers</p>
              <p className="cursor-pointer">Press</p>
              <p className="cursor-pointer">Blog</p>
              <p className="cursor-pointer">Privacy</p>
              <p className="cursor-pointer">Rules</p>
              <p className="cursor-pointer">Terms</p>
              <p className="cursor-pointer">Text to speech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
