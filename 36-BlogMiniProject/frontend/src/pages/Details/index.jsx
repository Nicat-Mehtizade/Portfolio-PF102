import { useParams } from "react-router-dom";
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

const Details = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

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
  }, []);

  if (loading) {
    return <p className="font-bold text-3xl text-center py-10">Loading...</p>;
  }

  console.log(blog);
  return (
    <div>
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
                  {blog.date
                    ? new Date(blog.date).toISOString().split("T")[0]
                    : "No date available"}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="border-t-1 border-b-1 border-gray-200 flex justify-between py-5">
              <div className="flex items-center gap-5">
                <div className="flex gap-1 items-center">
                  <PiHandsClapping className="text-gray-600" />
                  <span className="text-gray-500">{blog.likes.length}</span>
                </div>
                <div>
                  <FaRegComment className="text-gray-600" />
                </div>
              </div>
              <div className="text-gray-500 flex gap-1 md:gap-4 text-2xl">
                <MdOutlineBookmarkAdd className="cursor-pointer" />
                <MdOutlinePlayCircle className="cursor-pointer" />
                <PiUploadSimple className="cursor-pointer" />
                <BsThreeDots className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="">
            <img className="py-5" src={blog.image} alt={blog.title} />
            <p className="text-xl ">{blog.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
