import styles from "./index.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaTabletAlt } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import ImagesSection from "../../../components/ImagesSection";

const Contact = () => {
  return (
    <div>
      <div className={`${styles.background} `}>
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-center items-center py-30 font-bold text-5xl">
            Contact Us
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto">
        <div>
          <iframe
            className="w-full py-30 md:min-h-[700px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428674853683!2d49.8513705758253!3d40.37719087144594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1saz!2saz!4v1740433092210!5m2!1saz!2saz"
            loading="lazy"
          ></iframe>
        </div>
        <div className="md:flex justify-between items-center gap-4 ">
          <div className=" md:w-[70%] px-2">
            <h1 className="text-3xl font-medium mb-3">Get in Touch</h1>
            <form className=" flex flex-col items-start gap-4 mb-6" action="">
              <textarea
                className="border border-gray-300 w-full h-[120px] p-2 placeholder:text-gray-400"
                name=""
                id=""
                placeholder="Enter Message"
              ></textarea>
              <div className="w-full flex justify-between gap-2">
                <input
                  className="border border-gray-300 w-full p-2 placeholder:text-gray-400"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your name"
                />
                <input
                  className="border border-gray-300 w-full p-2 placeholder:text-gray-400"
                  type="text"
                  name=""
                  id=""
                  placeholder="Email"
                />
              </div>
              <input
                className="w-full border border-gray-300 p-2 placeholder:text-gray-400 mb-5"
                type="text"
                name=""
                id=""
                placeholder="Enter Subject"
              />
              <button className="bg-blue-500 text-white font-medium py-3 px-6 tracking-widest mb-8 transition duration-300 rounded-sm cursor-pointer hover:bg-red-500">
                SEND
              </button>
            </form>
          </div>
          <div className="md:w-[28%] flex flex-col gap-7 mb-4">
            <div className="flex justify-start items-start  gap-5">
              <IoHomeOutline className="text-3xl text-gray-400" />
              <div>
                <h3 className="text-black font-medium text-lg">
                  Buttonwood, California.
                </h3>
                <p className="text-gray-400  text-lg">Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="flex justify-start items-start  gap-5">
              <FaTabletAlt className="text-3xl text-gray-400" />
              <div>
                <h3 className="text-black font-medium text-lg">
                  +1 253 565 2365
                </h3>
                <p className="text-gray-400  text-lg">Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="flex justify-start items-start  gap-5">
              <RxEnvelopeClosed className="text-3xl text-gray-400" />
              <div>
                <h3 className="text-black font-medium text-lg">
                  support@colorlib.com
                </h3>
                <p className="text-gray-400  text-lg">
                  Send us your query anytime!
                </p>
              </div>
            </div>
          </div>
        </div>
        <ImagesSection/>
      </div>
    </div>
  );
};

export default Contact;
