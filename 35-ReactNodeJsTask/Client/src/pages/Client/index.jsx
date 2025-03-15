import { useEffect, useState } from 'react';
import axios from "axios"

const Client = () => {
  const [blogs, setBlogs] = useState([]);
  const Blogs = async () => {
    try {
      const response = await axios("http://localhost:8000/api/blogs");
      console.log(response.data.data);
      setBlogs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Blogs();
  }, []);
  return (
    <div className='bg-[#F2F2F2] py-20'>
    <div className='max-w-[1400px] mx-auto'>
      <div className='flex flex-wrap gap-12 justify-center '>
        {blogs ? (
          blogs.map((blog)=>{
            return (<div key={blog._id} className='max-w-[22%] border flex flex-col min-h-[500px]'>
                <img className='transition duration-300  hover:bg-gray-500 hover:opacity-25 cursor-pointer' src={blog.image} alt={blog.title} />
                <div className='bg-white text-center px-2 py-4 flex flex-col gap-4 justify-center items-center flex-1'>
                <p className='text-blue-900 font-bold text-sm tracking-[3px] cursor-pointer uppercase transition duration-300 hover:text-black'>{blog.categoryId.title}</p>
                <p className='transition duration-300 text-black cursor-pointer text-2xl font-semibold hover:underline hover:decoration-gray-500'>{blog.title}</p>
                <p className='pt-8 py-3 text-gray-500 text-lg cursor-pointer'>{new Date(blog.date).toISOString().split("T")[0]}</p>
                </div>
            </div>)
          })
        ): <p>There is no blog, yet!</p>}
      </div>
    </div>
  </div>
  );
};

export default Client;
