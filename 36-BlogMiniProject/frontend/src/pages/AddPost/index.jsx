import { ImageIcon } from "lucide-react";
import { useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { BASE_URL } from "../../constants";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const AddPost = () => {
  // const [selectedFile, setSelectedFile] = useState(null);
  const token = localStorage.getItem("token");
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    image: null,
  });

  // const handleFileChange = (e) => {
  //     const file = e.target.files[0];
  //     setSelectedFile(file ? file.name : null);
  //   };

  const handlePost = async () => {
    if (!newBlog.title || !newBlog.content || !newBlog.image) {
      toast.error("Fill in all fields. Cannot submit empty!", {
        duration: 2000,
      });
      return; // Boşdursa, dayandırırıq
    }
    try {
      const formData = new FormData();
      formData.append("title", newBlog.title);
      formData.append("content", newBlog.content);
      formData.append("image", newBlog.image);

      const response = await axios.post(`${BASE_URL}/blogs`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      });

      toast.success("Blog created successfully!", {
        duration: 2000,
      });

      setNewBlog({
        title: "",
        content: "",
        image: null,
      });
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while creating the blog. Please try again.", {
        duration: 2000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-center text-slate-800">
            Create New Post
          </h1>
        </header>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <input
              type="text"
              placeholder="Title"
              value={newBlog.title}
              onChange={(e) =>
                setNewBlog({ ...newBlog, title: e.target.value })
              }
              className="w-full text-4xl font-bold outline-none placeholder-slate-300"
              required
            />
          </div>

          <div className="p-6 border-b border-slate-100">
            <label
              htmlFor="coverImage"
              className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center cursor-pointer hover:bg-slate-50 transition-colors flex flex-col items-center gap-2"
            >
              <ImageIcon className="h-10 w-10 text-slate-400" />
              <p className="text-slate-500">Add a cover image</p>
              <input
                id="coverImage"
                type="file"
                accept="image/*"
                required
                onChange={(e) =>
                  setNewBlog({ ...newBlog, image: e.target.files[0] })
                }
                className="hidden"
              />
            </label>
            {newBlog.image && (
              <p className="mt-2 text-slate-600 text-sm">
                Selected file:{" "}
                <span className="font-medium">{newBlog.image.name}</span>
              </p>
            )}
          </div>

          <div className="p-6">
            <textarea
              placeholder="Tell your story..."
              required
              value={newBlog.content}
              onChange={(e) =>
                setNewBlog({ ...newBlog, content: e.target.value })
              }
              className="w-full min-h-[300px] text-lg outline-none resize-none placeholder-slate-300 leading-relaxed"
            ></textarea>
          </div>
          {/* <button className="bg-gray-900 w-full hover:bg-gray-700 text-white  py-2 rounded-lg font-medium transition-colors">
              Publish
            </button> */}

          <div className="p-6 pt-0">
            <button
              onClick={handlePost}
              className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-gray-900 text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center cursor-pointer"
            >
              <span className="mr-2">Publish</span>
              <FaArrowAltCircleUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
