import axios from "axios";
import { BASE_URL } from "../../constants";
import { useEffect, useState } from "react";
import { CiExport } from "react-icons/ci";
import { format } from "date-fns";
import { motion } from "framer-motion";

const AdminUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const token = localStorage.getItem("token");
  const getAllUsers = async () => {
    try {
      const response = await axios(`${BASE_URL}/users`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setAllUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/users/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      getAllUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-bold mb-2"
      >
        User Management
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        className="text-gray-500 mb-7"
      >
        Manage and monitor all users on your platform
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
        className="rounded-lg shadow-[2px_2px_12px_rgba(0,0,0,0.35)]"
      >
        <div className="flex justify-between items-center border-b-2 px-4 py-3 pb-4 bg-gray-100">
          <p className="font-semibold">
            All Users <span>({allUsers.length})</span>
          </p>
          <div className="flex items-center text-gray-500 font-semibold gap-1">
            <CiExport className="text-lg" />
            <p>Export</p>
          </div>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className=" bg-gray-100">
              <th className="px-4 py-2 text-left">USER</th>
              <th className="px-4 py-2 text-left">ROLE</th>
              <th className="px-4 py-2 text-left">JOINED</th>
              <th className="px-4 py-2 text-left">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {allUsers ? (
              allUsers.map((user,index) => {
                return (
                  <motion.tr
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                    className="border-b-1 border-gray-300"
                    key={user._id}
                  >
                    <td className="px-4 py-2 flex items-center gap-2">
                      <p className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-medium">
                        {user.username.slice(0, 1).toUpperCase()}
                      </p>
                      <div>
                        <p className="font-semibold">{user.username}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-3 py-1 rounded-full text-white text-sm font-medium
    ${
      user.role === "admin"
        ? "bg-green-500"
        : user.role === "author"
        ? "bg-yellow-500"
        : "bg-gray-400"
    }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-gray-500">
                      {format(new Date(user.createdAt), "MMM dd, yyyy")}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="bg-red-500 py-1 px-2 rounded-full text-white font-semibold cursor-pointer transition duration-300 hover:bg-red-400"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                );
              })
            ) : (
              <p>There is no user!</p>
            )}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default AdminUsers;
