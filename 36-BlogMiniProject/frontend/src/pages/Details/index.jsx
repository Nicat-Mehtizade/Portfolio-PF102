import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { PiHandsClapping } from "react-icons/pi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlinePlayCircle } from "react-icons/md";
import { PiUploadSimple } from "react-icons/pi";
import { AiOutlineSafety } from "react-icons/ai";
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
import { TiDelete } from "react-icons/ti";
import { format } from "date-fns";

const Details = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const token = localStorage.getItem("token");
  const decoded = token ? jwtDecode(token) : null;
  const navigate = useNavigate();

  const getAllComments = async () => {
    try {
      const response = await axios(`${BASE_URL}/comments/blog/${id}`);
      setAllComments(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allComments);
  useEffect(() => {
    getAllComments();
  }, []);

  const getBlogById = async () => {
    try {
      const response = await axios(`${BASE_URL}/blogs/${id}`);
      setBlog(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogById();
    console.log(blog);
  }, [id]);

  if (loading) {
    return <p className="font-bold text-3xl text-center py-10">Loading...</p>;
  }

  const handleLike = async (blogId) => {
    try {
      if (!token) {
        console.log("Token missing");
        return;
      }
      console.log(token);

      const response = await axios.post(
        `${BASE_URL}/likes/${blogId}`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(response.data);
      getBlogById();
    } catch (error) {
      console.error(error);
    }
  };

  const handleComment = async (id) => {
    const currentToken = localStorage.getItem("token");
    if (!currentToken) {
      toast.error("Token Expired.", {
        duration: 2000,
      });
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/comments`,
        { text: comment, blogId: id, authorId: decoded.id },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(response.data);
      setComment("");
      getAllComments();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/comments/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log(response.data);
      getAllComments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-[780px] mx-auto">
        <div className="flex flex-col justify-center py-10">
          <h1 className="font-bold text-5xl ">{blog.title}</h1>
          <div className="flex items-center gap-3 py-10">
            <p className="uppercase bg-blue-600 w-10 h-10 flex justify-center items-center text-center text-white font-semibold text-xl rounded-full ">
              {blog.author?.username.slice(0, 1)}
            </p>
            <div>
              <div className="flex gap-2 items-center">
                <span className="font-semibold">{blog.author?.username}</span>
                <span>
                  <LuDot />
                </span>
                <span className="underline font-medium">Follow</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">
                  <span className="text-gray-500">Published in </span>
                  {blog.author?.username}
                </p>
                <span>
                  <LuDot />
                </span>
                <p className="text-gray-600 font-medium">
                  {format(new Date(blog.date), "MMM dd, yyyy")}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="border-t-1 border-b-1 border-gray-200 flex justify-between py-5">
              <div className="flex items-center gap-5">
                <button
                  onClick={() => handleLike(blog._id)}
                  className="flex gap-1 items-center cursor-pointer"
                >
                  <PiHandsClapping className="text-gray-600" />
                  <span className="text-gray-500">{blog.likes.length}</span>
                </button>
                <div className="flex gap-1 items-center">
                  <FaRegComment className="text-gray-600" />
                  <span className="text-gray-500">{allComments.length}</span>
                </div>
              </div>
              <div className="text-gray-500 flex gap-1 md:gap-4 text-2xl">
                <MdOutlineBookmarkAdd className="cursor-pointer hover:text-black" />
                <MdOutlinePlayCircle className="cursor-pointer hover:text-black" />
                <PiUploadSimple className="cursor-pointer hover:text-black" />
                <BsThreeDots className="cursor-pointer hover:text-black" />
              </div>
            </div>
          </div>
          <div className="">
            <img className="py-5" src={blog.image} alt={blog.title} />
            <p className="text-xl ">{blog.content}</p>
          </div>
        </div>
      </div>
      <div className="py-10 border-t-1 border-gray-200">
        <div className="max-w-[780px] mx-auto">
          <div className=" border-b-1 pb-7 border-gray-200">
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-2xl font-semibold">Responses</h1>
              <AiOutlineSafety />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <p className="w-9 h-9 bg-blue-800 rounded-full text-white font-semibold flex justify-center items-center">
                  {decoded.username.slice(0, 1)}
                </p>
                <p className="font-medium">{decoded.username}</p>
              </div>
              <textarea
                onChange={(e) => setComment(e.target.value)}
                className="bg-gray-200 rounded-lg p-3 text-gray-700 w-full focus:outline-0"
                value={comment}
                placeholder="What are your thoughts?"
              ></textarea>
              <button
                onClick={() => handleComment(blog._id)}
                className="bg-gray-200 text-gray-700 p-2 rounded-lg cursor-pointer transition duration-300 hover:bg-gray-400"
              >
                Submit
              </button>
            </div>
          </div>
          <div>
            {allComments.map((comment) => (
              <div
                key={comment._id}
                className="mb-3 border-b-1 border-gray-300 pb-2 py-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="bg-blue-800 text-white w-9 h-9 flex items-center justify-center rounded-full font-semibold">
                      {comment.authorId.username.slice(0, 1)}
                    </p>
                    <div>
                      <p className="font-medium">{comment.authorId.username}</p>
                      <p className="text-gray-500">
                        {new Date(comment.date).toISOString().split("T")[0]}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    {comment.authorId._id == decoded.id && (
                      <TiDelete
                        onClick={() => handleDeleteComment(comment._id)}
                        className="cursor-pointer text-gray-500 text-2xl hover:text-black"
                      />
                    )}
                    <BsThreeDots className="cursor-pointer text-gray-500 text-xl hover:text-black" />
                  </div>
                </div>
                <p className="py-4">
                  {comment.text
                    .slice(0, 1)
                    .toUpperCase()
                    .concat(comment.text.slice(1))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
