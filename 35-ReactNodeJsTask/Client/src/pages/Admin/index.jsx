import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Admin = () => {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    try {
      const response = await axios("http://localhost:8000/api/blogs");
      console.log(response.data.data);
      setBlogs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const handleDelete=async(_id)=>{
  try {
    const response=await axios.delete(`http://localhost:8000/api/blogs/${_id}`)
    setBlogs((prevBlogs)=>prevBlogs.filter((blog)=>blog._id !==_id))
  } catch (error) {
    console.log(error);
  }    
  }
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
          <div className="overflow-x-auto py-10">
          <table className="w-full border-collapse">
          <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left border border-gray-300">Image</th>
                <th className="p-3 text-left border border-gray-300">Title</th>
                <th className="p-3 text-left border border-gray-300">
                  Category   
                </th>
                <th className="p-3 text-left border border-gray-300">Content</th>
                <th className="p-3 text-center border border-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs ? (
                blogs.map((blog)=>{
                  return (
                    <tr key={blog._id}>
                      <td className="p-3 text-left border border-gray-300"><img className="w-[100px]" src={blog.image} alt="" /></td>
                      <td className="p-3 text-left border border-gray-300">{blog.title}</td>
                      <td className="p-3 text-left border border-gray-300">{blog.categoryId.title}</td>
                      <td className="p-3 text-left border border-gray-300">{blog.content}</td>
                      <td className="p-3 text-left border border-gray-300">
                        <button className="cursor-pointer transition duration-300 bg-green-500 py-2 px-3 font-medium text-white rounded-lg hover:bg-green-700">Edit</button>
                        <button onClick={()=>handleDelete(blog._id)} className="cursor-pointer transition duration-300 bg-red-500 ml-3 py-2 px-3 text-white font-medium rounded-lg hover:bg-red-700">Delete</button>
                      </td>
                    </tr>
                  )
                })
              ): <p>There is no blog,yet!</p>}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
