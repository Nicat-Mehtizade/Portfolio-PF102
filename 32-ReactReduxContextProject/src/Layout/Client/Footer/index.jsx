import Logo from "./../../../components/NavBar/Logo"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";
import styles from "./index.module.css"
const Footer = () => {
  return (
    <div className="py-20">
      <div className="max-w-[1280px] mx-auto">
        <div className={`flex justify-between items-start gap-5 ${styles.footer}`}>
            <div className={`flex  flex-col gap-5 w-[25%] ${styles.footerColumn}`}>
              <Logo/>
              <p className="w-[75%] text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className={`w-[25%] flex flex-col gap-4 ${styles.footerColumn}`}>
              <h1 className="text-xl font-bold">Quick Links</h1>
              <p className="text-gray-500 cursor-pointer transition duration-300 hover:translate-x-2 hover:text-blue-500">About</p>
              <p className="text-gray-500 cursor-pointer transition duration-300 hover:translate-x-2 hover:text-blue-500">Offer & Discounts</p>
              <p className="text-gray-500 cursor-pointer transition duration-300 hover:translate-x-2 hover:text-blue-500">Get Coupon</p>
              <p className="text-gray-500 cursor-pointer transition duration-300 hover:translate-x-2 hover:text-blue-500">Contact Us</p>
            </div>
            <div className={`w-[25%] flex flex-col gap-4 ${styles.footerColumn}`}>
              <h1 className="text-xl font-bold">New Products</h1>
              <p className="text-gray-500 cursor-pointer transition duration-300 hover:translate-x-2 hover:text-blue-500">Woman Cloth</p>
              <p className="text-gray-500 cursor-pointer transition duration-300 hover:translate-x-2 hover:text-blue-500">Fashion Accessories</p>
              <p className="text-gray-500 cursor-pointer transition duration-300 hover:translate-x-2 hover:text-blue-500">Man Accessories</p>
              <p className="text-gray-500 cursor-pointer transition duration-300 hover:translate-x-2 hover:text-blue-500">Rubber made Toys</p>
            </div>
            <div className={`w-[25%] flex flex-col gap-4 ${styles.footerColumn}`}>
              <h1 className="text-xl font-bold">Support</h1>
              <p className="text-gray-500 cursor-pointer transition duration-300 hover:translate-x-2 hover:text-blue-500">Frequently Asked Questions</p>
              <p className="text-gray-500 cursor-pointer transition duration-300 hover:translate-x-2 hover:text-blue-500">Terms & Conditions</p>
              <p className="text-gray-500 cursor-pointer transition duration-300 hover:translate-x-2 hover:text-blue-500">Privacy Policy</p>
              <p className="text-gray-500 cursor-pointer transition duration-300 hover:translate-x-2 hover:text-blue-500">Report a Payment Issue</p>
            </div>
        </div>
        <div className={`mt-20 flex justify-between items-center gap-5 ${styles.copyright}`}>
          <p className="text-gray-500 font-medium">Copyright ©2025 All rights reserved | This template is made by <span className="cursor-pointer text-blue-500">Nijat Mehtizade</span> </p>
          <div className="flex gap-3">
          <FaTwitter className="cursor-pointer transition duration-300 hover:text-blue-500" />
          <FaFacebookF  className="cursor-pointer transition duration-300 hover:text-blue-500"/>
          <FaBehance className="cursor-pointer transition duration-300 hover:text-blue-500" />
          <RiGlobalFill  className="cursor-pointer transition duration-300 hover:text-blue-500"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer