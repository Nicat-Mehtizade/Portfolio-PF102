import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { TrendingUp } from "lucide-react";
import { TrendingDown } from "lucide-react";
import { delay, easeOut, motion, useInView } from "framer-motion";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  const getAllBlogs = async () => {
    try {
      const response = await axios(`${BASE_URL}/blogs`);
      setBlogs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllUsers = async () => {
    try {
      const response = await axios(`${BASE_URL}/users`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
    getAllUsers();
  }, []);

  const stats = [
    140, 105, 135, 120, 115, 88, 145, 150, 75, 165, 55, 95, 85, 105, 155, 115,
    130, 145, 110, 150, 155, 85, 100, 145, 165, 170, 158, 163, 158, 165,
  ];

  console.log(users);
  return (
    <div className="p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-bold mb-2"
      >
        Dashboard
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        className="text-gray-500"
      >
        Welcome back, here's what's happening with your platform today.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-10 "
      >
        <div className="border border-gray-300 p-6 flex rounded-lg  justify-between transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div>
            <p className="font-medium text-gray-500">Total Blogs</p>
            <p className="text-2xl font-bold mb-1">{blogs.length}</p>
            <p className="text-xs text-gray-500">vs. previous month</p>
          </div>
          <div className="flex gap-1 bg-green-200 text-green-800 rounded-full h-5 items-center justify-center text-sm p-3">
            <TrendingUp className="w-4" />
            <p className="text-xs font-medium">+12.5%</p>
          </div>
        </div>
        <div className="border border-gray-300 p-6 flex rounded-lg  justify-between transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div>
            <p className="font-medium text-gray-500">Total Users</p>
            <p className="text-2xl font-bold mb-1">{users.length}</p>
            <p className="text-xs text-gray-500">vs. previous month</p>
          </div>
          <div className="flex gap-1 bg-green-200 text-green-800 rounded-full h-5 items-center justify-center text-sm p-3">
            <TrendingUp className="w-4" />
            <p className="text-xs font-medium">+18.2%</p>
          </div>
        </div>
        <div className="border border-gray-300 p-6 flex rounded-lg  justify-between transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div>
            <p className="font-medium text-gray-500">Engagement Rate</p>
            <p className="text-2xl font-bold mb-1">5.2%</p>
            <p className="text-xs text-gray-500">vs. previous month</p>
          </div>
          <div className="flex gap-1 bg-red-200 text-red-800 rounded-full h-5 items-center justify-center text-sm p-3">
            <TrendingDown className="w-4" />
            <p className="text-xs font-medium">-2.1%</p>
          </div>
        </div>
        <div className="border border-gray-300 p-6 flex rounded-lg  justify-between transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div>
            <p className="font-medium text-gray-500">Avg. Read Time</p>
            <p className="text-2xl font-bold mb-1">4m 32s</p>
            <p className="text-xs text-gray-500">vs. previous month</p>
          </div>
          <div className="flex gap-1 bg-green-200 text-green-800 rounded-full h-5 items-center justify-center text-sm p-3">
            <TrendingUp className="w-4" />
            <p className="text-xs font-medium">+0.8%</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
        className="p-5 bg-white rounded-lg border border-gray-300"
      >
        <h1 className="text-xl font-bold">User Activity</h1>
        <p className="text-gray-500 text-sm">
          User engagement over the last 30 days
        </p>
        <div className="flex gap-2 p-5 items-end h-[250px]">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: `${stat}px` }}
              transition={{ delay: 1.3, duration: 1.0, ease: easeOut }}
              key={index}
              className={`w-[2.5%] bg-[#464649] rounded-t-md border`}
            ></motion.div>
          ))}
        </div>
      </motion.div>
      <div className="py-10 w-full">
        <motion.iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428674853683!2d49.8513705758253!3d40.37719087144594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1saz!2saz!4v1743111684865!5m2!1saz!2saz"
          width="600"
          height="450"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{opacity:1 , scale:1}}
          viewport={{once:true, amount:0.2}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="rounded-lg w-full"
          referrerpolicy="no-referrer-when-downgrade"
        ></motion.iframe>
      </div>

    </div>
  );
};

export default Dashboard;
