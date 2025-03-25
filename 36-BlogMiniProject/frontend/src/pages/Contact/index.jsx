import { FaRegEnvelope } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_eq8jysu", "template_b6eodnj", form.current, {
        publicKey: "kUSUW87y0B9D3TMtO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="bg-gradient-to-br from-white to-gray-200 min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center gap-16 justify-center flex-wrap py-10">
          <div className=" flex flex-col items-center">
            <div className="bg-blue-200 rounded-full w-16 h-16 flex justify-center items-center mb-5">
              <FaRegEnvelope className="text-4xl text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
            <p className="text-gray-500 text-lg mb-8">
              Have a question or feedback? We'd love to hear from you.
            </p>
            <div className="shadow-[2px_2px_12px_rgba(0,0,0,0.35)] rounded-lg ">
              <div className="border-b-1 border-gray-200 p-4">
                <h1 className="font-semibold text-2xl mb-2">Contact Us</h1>
                <p className="text-gray-600 mb-3">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col p-4 border-b-1 border-gray-200"
              >
                <label htmlFor="name">Name</label>
                <input
                  className="border border-gray-400 p-2 rounded-lg mb-4 focus:outline-0"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
                <label htmlFor="email">Email</label>
                <input
                  className="border border-gray-400 p-2 rounded-lg mb-4 focus:outline-0"
                  type="text"
                  name="email"
                  placeholder="your.email@example.com"
                />
                <label htmlFor="message">Message</label>
                <textarea
                  className="border min-h-[150px] border-gray-400 p-2 focus:outline-0 rounded-lg mb-4"
                  name="message"
                  placeholder="Tell us what you're thinking about..."
                />
                <button className="bg-blue-600 w-full cursor-pointer transition duration-300 hover:bg-blue-700 py-2 rounded-lg text-white font-semibold flex justify-center items-center gap-1">
                  <p>Send Message</p> <BsSend className=" mt-1" />
                </button>
              </form>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428674853683!2d49.8513705758253!3d40.37719087144594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1saz!2saz!4v1742932489530!5m2!1saz!2saz"
            loading="lazy"
            className="w-full max-w-[600px] h-[250px] md:h-[400px] rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
