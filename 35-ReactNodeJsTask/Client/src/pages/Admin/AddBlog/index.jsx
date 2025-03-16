import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
const AddBlog = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    categoryId: "",
    image: null,
  });
  const fileInputRef = useRef(null);
  const getAllCategories = async () => {
    try {
      const response = await axios("http://localhost:8000/api/categories");
      setCategories(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("content", formData.content);
      form.append("categoryId", formData.categoryId);
      form.append("image", formData.image);

      console.log(form);

      const response = await fetch("http://localhost:8000/api/blogs", {
        method: "POST",
        body: form,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#F2F2F2]">
      <div className="max-w-[1400px] mx-auto">
        <div>
          <div className="flex justify-center gap-10 py-5">
            <NavLink
              to={"/admin"}
              end
              className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
            >
              Admin Table
            </NavLink>
            <NavLink
              to={"/admin/new"}
              end
              className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
            >
              Add Blog
            </NavLink>
          </div>
          <div className="h-[91vh]">
            <div className="flex justify-center items-center h-full">
              <form
                action=""
                onSubmit={handleSubmit}
                className="flex flex-col w-[40%] gap-3 mx-auto "
              >
                <input
                  className="border p-2 rounded-lg bg-white"
                  type="text"
                  name="title"
                  placeholder="Enter a title"
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
                <input
                  className="border p-2 rounded-lg bg-white"
                  type="text"
                  name="content"
                  placeholder="Enter a content"
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                />
                <input
                  ref={fileInputRef}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.files[0] })
                  }
                  className="border p-2 rounded-lg bg-white"
                  type="file"
                  name="image"
                />
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, categoryId: e.target.value })
                  }
                  name="categoryId"
                  className="p-2 rounded-lg border bg-white"
                >
                  <option value="" selected disabled>
                    Select a category
                  </option>
                  {categories.map((q) => (
                    <option value={q._id} key={q._id}>
                      {q.title}
                    </option>
                  ))}
                </select>
                <button
                  className="border rounded-lg w-[20%] cursor-pointer transition duration-300  bg-white font-semibold hover:bg-gray-300 py-1"
                  type="submit"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
