import { NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative bg-[#242424] min-h-screen">
      <span className="absolute top-[6%] left-[32%] text-white text-2xl">
        .
      </span>
      <span className="absolute top-[9%] left-[47%] text-white text-2xl">
        .
      </span>
      <span className="absolute top-[5%] left-[57%] text-white text-2xl">
        .
      </span>
      <span className="absolute top-[18%] left-[47%] text-white text-2xl">
        .
      </span>
      <span className="absolute top-[36%] left-[32%] text-white text-2xl">
        .
      </span>
      <span className="absolute top-[44%] left-[55%] text-white text-2xl">
        .
      </span>
      <div className="border-b-1 border-white mb-20">
        <div className="max-w-[1480px]">
          <div className="py-4 px-4">
            <NavLink className="text-white text-3xl font-bold" to={"/"}>
              Medium
            </NavLink>
          </div>
        </div>
      </div>
      <div className="max-w-[1480px]">
        <div className="px-10 text-white">
          <motion.h1
          initial={{opacity:0, y:-50}}
          animate={{opacity:1 , y:0}}
          transition={{delay:0.2 , duration:0.5 , ease:"easeOut"}}
           className="text-4xl md:text-6xl font-semibold md:w-[40%] py-10">
            Everyone has a story to tell
          </motion.h1>
          <motion.p
          initial={{opacity:0, y:-50}}
          animate={{opacity:1 , y:0}}
          transition={{delay:0.5 , duration:0.5 , ease:"easeOut"}}
          className="md:w-[50%] text-xl py-10">
            Medium is a home for human stories and ideas. Here, anyone can share
            knowledge and wisdom with the world—without having to build a
            mailing list or a following first. The internet is noisy and
            chaotic; Medium is quiet yet full of insight. It’s simple,
            beautiful, collaborative, and helps you find the right readers for
            whatever you have to say.
          </motion.p>
          <motion.p 
          initial={{opacity:0, y:-50}}
          animate={{opacity:1 , y:0}}
          transition={{delay:0.8 , duration:0.5 , ease:"easeOut"}}
          className=" md:w-[40%] text-2xl leading-relaxed relative text-white py-5">
            <span className="bg-[#505050] ">
              Ultimately, our goal is to deepen our collective
            </span>
            <br />
            <span className="bg-[#505050] ">
              understanding of the world through the power of
            </span>
            <br />
            <span className="bg-[#505050] ">writing.</span>
          </motion.p>
          <motion.p
          initial={{opacity:0, y:-50}}
          animate={{opacity:1 , y:0}}
          transition={{delay:1.1 , duration:0.5 , ease:"easeOut"}}
          className="md:w-[50%] text-xl py-5">
            We believe that what you read and write matters. Words can divide or
            empower us, inspire or discourage us. In a world where the most
            sensational and surface-level stories often win, we’re building a
            system that rewards depth, nuance, and time well spent. A space for
            thoughtful conversation more than drive-by takes, and substance over
            packaging.
          </motion.p>
          <motion.p 
          initial={{opacity:0, y:-50}}
          animate={{opacity:1 , y:0}}
          transition={{delay:1.4 , duration:0.5 , ease:"easeOut"}}
          className="md:w-[50%] text-xl">
            Over 100 million people connect and share their wisdom on Medium
            every month. They’re software developers, amateur novelists, product
            designers, CEOs, and anyone burning with a story they need to get
            out into the world. They write about what they’re working on, what’s
            keeping them up at night, what they’ve lived through, and what
            they’ve learned that the rest of us might want to know too.
          </motion.p>
          <motion.p 
          initial={{opacity:0, y:-50}}
          animate={{opacity:1 , y:0}}
          transition={{delay:1.7 , duration:0.5 , ease:"easeOut"}}
          className="md:w-[50%] text-xl py-5 mb-20">
            Instead of selling ads or selling your data, we’re supported by a
            growing community of over a million Medium members who believe in
            our mission. If you’re new here, start reading. Dive deeper into
            whatever matters to you. Find a post that helps you learn something
            new, or reconsider something familiar—and then write your story.
          </motion.p>
        </div>
      </div>
      <motion.div 
      initial={{opacity:0, y:-50}}
      animate={{opacity:1 , y:0}}
      transition={{delay:2 , duration:0.5 , ease:"easeOut"}}
      >
        <NavLink
          to={"/"}
          className="flex justify-between items-center w-full cursor-pointer border-t-1 py-5 border-white px-5 transition duration-300 group hover:bg-white"
        >
          <p className="text-white text-2xl md:text-6xl font-semibold transition duration-300 group-hover:text-black">
            Start Reading
          </p>
          <IoIosArrowRoundForward className="text-white text-6xl md:text-9xl transition duration-300 group-hover:text-black" />
        </NavLink>
        <NavLink
          to={"/new"}
          className="flex justify-between items-center w-full cursor-pointer border-t-1 py-5 border-white px-5 transition duration-300 group hover:bg-white"
        >
          <p className="text-white text-2xl md:text-6xl font-semibold transition duration-300 group-hover:text-black">
            Start Writing
          </p>
          <IoIosArrowRoundForward className="text-white text-6xl md:text-9xl transition duration-300 group-hover:text-black" />
        </NavLink>
        <button
          to={"/new"}
          className="flex justify-between items-center w-full cursor-pointer border-t-1 py-5 border-white px-5 transition duration-300 group hover:bg-white"
        >
          <p className="text-white text-2xl md:text-6xl font-semibold transition duration-300 group-hover:text-black">
            Become a member
          </p>
          <IoIosArrowRoundForward className="text-white text-6xl md:text-9xl transition duration-300 group-hover:text-black" />
        </button>
      </motion.div>
      <div className="py-4 px-4 bg-white text-center md:flex justify-between">
        <NavLink className="text-black text-3xl font-bold" to={"/"}>
          Medium
        </NavLink>
        <div className="flex justify-center text-xs gap-2 underline">
          <button className="cursor-pointer">About</button>
          <button className="cursor-pointer">Terms</button>
          <button className="cursor-pointer">Privacy</button>
          <button className="cursor-pointer">Help</button>
          <button className="cursor-pointer">Teams</button>
          <button className="cursor-pointer">Press</button>
        </div>
      </div>
    </div>
  );
};

export default About;
