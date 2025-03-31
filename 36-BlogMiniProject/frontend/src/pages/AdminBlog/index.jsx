import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { CiCalendar } from "react-icons/ci";
import { LuDot } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";
import { format } from "date-fns";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    // @ts-expect-error https://github.com/pmndrs/react-spring/issues/2341
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
  maxHeight: "80vh",
  overflowY: "auto",
};

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const token = localStorage.getItem("token");
  const [open, setOpen] = React.useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getAllBlogs = async () => {
    try {
      const response = await axios(`${BASE_URL}/blogs`);
      setBlogs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (blog) => {
    setSelectedBlog({
      ...blog,
      image: blog.image || "",
    });
    setOpen(true);
  };

  const handleSaveChanges = async () => {
    if (!selectedBlog) return;

    try {
      const formData = new FormData();

      console.log(selectedBlog.title, selectedBlog.content);
      formData.append("title", selectedBlog.title);
      formData.append("content", selectedBlog.content);

      if (selectedBlog.image instanceof File) {
        formData.append("image", selectedBlog.image);
      }

      const response = await axios.patch(
        `${BASE_URL}/blogs/${selectedBlog._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${token}`,
          },
        }
      );

      getAllBlogs();
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };
  // ... existing code ...

  useEffect(() => {
    getAllBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/blogs/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      getAllBlogs();
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
        Blog Management
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        className="text-gray-500"
      >
        Manage and monitor all blog posts on your platform
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {blogs &&
          blogs.map((blog) => {
            return (
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
                key={blog._id}
                className="shadow-xl rounded-lg overflow-hidden flex flex-col h-[410px] transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-t-lg h-[200px] w-full object-cover"
                />
                <div className="p-3 flex flex-col flex-grow gap-1">
                  <h1 className="text-xl font-semibold">
                    {blog.title && blog.title.length > 70
                      ? blog.title.slice(0, 70) + "..."
                      : blog.title}
                  </h1>
                  <p className="text-gray-500 text-sm flex-grow">
                    {blog.content.slice(0, 100) + "..."}
                  </p>
                  <div className="flex items-center text-gray-500">
                    <div className="flex items-center gap-1">
                      <CiCalendar />
                      <p className="text-sm">
                        {format(new Date(blog.date), "MMM dd, yyyy")}
                      </p>
                    </div>
                    <LuDot />
                    <div className="flex items-center gap-1">
                      <IoEyeOutline />
                      <p className="text-sm">
                        {Math.floor(Math.random() * (1000 - 100 + 1)) + 100}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-auto  pt-2">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="bg-blue-100 text-blue-700 flex gap-1 items-center px-3 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-blue-300"
                    >
                      <FiEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="bg-red-100 text-red-700 flex gap-1 items-center px-3 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-red-300"
                    >
                      <RiDeleteBinLine /> Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>
      <div>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              TransitionComponent: Fade,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="spring-modal-title" variant="h6" component="h2">
                <div>
                  <h1 className="text-2xl font-semibold mb-3">
                    Edit Blog Post
                  </h1>
                  <p className="text-gray-500 text-sm">
                    Make changes to your blog post here. Click save when you're
                    done.
                  </p>
                </div>
              </Typography>
              <div className="flex flex-col">
                <label htmlFor="title" className="font-semibold text-lg">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="border border-gray-400 rounded-lg p-1 mb-3"
                  value={selectedBlog?.title || ""}
                  onChange={(e) =>
                    setSelectedBlog((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                />
                <label htmlFor="image" className="font-semibold text-lg">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={(e) =>
                    setSelectedBlog((prev) => ({
                      ...prev,
                      image: e.target.files[0],
                    }))
                  }
                  className="border border-gray-400 rounded-lg p-1 mb-3"
                />
                <img
                  className="h-[250px] rounded-lg mb-3"
                  src={selectedBlog?.image}
                  alt={selectedBlog?.title}
                />
                <label htmlFor="content" className="font-semibold text-lg">
                  Content
                </label>
                <textarea
                  type="text"
                  name="content"
                  value={selectedBlog?.content || ""}
                  onChange={(e) =>
                    setSelectedBlog((prev) => ({
                      ...prev,
                      content: e.target.value,
                    }))
                  }
                  className="border border-gray-400 rounded-lg p-1 mb-3 min-h-[200px] w-full"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleSaveChanges}
                    className="bg-black text-white font-semibold w-[20%] p-2 rounded-lg cursor-pointer transition duration-300 hover:bg-gray-700 "
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default AdminBlog;
