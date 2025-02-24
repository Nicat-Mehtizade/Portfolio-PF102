import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { RiTodoLine } from "react-icons/ri";
const About = () => {
  const testimonials = [
    {
      id: 1,
      text: "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.",
      name: "Micky Mouse",
      image: "https://preview.colorlib.com/theme/estore/assets/img/client.png",
    },
    {
      id: 2,
      text: "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.",
      name: "Micky Mouse",
      image:
        "https://preview.colorlib.com/theme/estore/assets/img/client_1.png",
    },
    {
      id: 3,
      text: "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.",
      name: "Micky Mouse",
      image:
        "https://preview.colorlib.com/theme/estore/assets/img/client_2.png",
    },
  ];

  return (
    <div>
      <div className={`${styles.background} `}>
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-center items-center py-30 font-bold text-5xl">
            About
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[750px] mx-auto py-20">
          <h1 className="text-blue-500 text-xl mb-2">Our Mission</h1>
          <p className="text-2xl">
            Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor
            sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices
            nec sed neque.
          </p>
        </div>
        <div className="md:flex gap-5 justify-around py-10">
          <p className="md:w-1/3 text-4xl !space-1 columns-lg font-medium mb-3">
            Credibly innovate granular internal or organic sources whereas
            standards.
          </p>
          <p className="md:w-1/3 text-gray-500 text-[17px]">
            Seamlessly empower fully researched growth strategies and
            interoperable internal or “organic” sources. Credibly innovate
            granular internal or “organic” sources whereas high standards in
            web-readiness.
          </p>
        </div>
        <div className="flex justify-around items-center py-10 flex-wrap gap-2">
          <div className="border border-[#828bb2] text-[#0b1c39;] gap-2 p-10 flex flex-col justify-center items-center min-w-[250px]">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/icon/feature_icon_1.svg"
              alt=""
            />
            <h1>Credit Card Support</h1>
          </div>
          <div className="border border-[#828bb2] text-[#0b1c39;] gap-2 p-10 flex flex-col justify-center items-center min-w-[250px]">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/icon/feature_icon_2.svg"
              alt=""
            />
            <h1>Online Order</h1>
          </div>
          <div className="border border-[#828bb2] text-[#0b1c39;] gap-2 p-10 flex flex-col justify-center items-center min-w-[250px]">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/icon/feature_icon_3.svg"
              alt=""
            />
            <h1>Free Delivery</h1>
          </div>
          <div className="border border-[#828bb2] text-[#0b1c39;] gap-2 p-10 flex flex-col justify-center items-center min-w-[250px]">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/icon/feature_icon_4.svg"
              alt=""
            />
            <h1>Product with Gift</h1>
          </div>
        </div>
      </div>
      <div className="bg-[#B08EAD]">
        <div className="max-w-[1280px] mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col py-25 items-center text-center text-white">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full border-4 border-white"
                    />
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex justify-center items-center shadow-md">
                      📋
                    </div>
                  </div>
                  <p className="text-xl italic max-w-[600px] mt-4">
                    {testimonial.text}
                  </p>
                  <span className="mt-2 text-lg font-semibold">
                    - {testimonial.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="bg-[#191D34]">
          <div className="max-w-[900px] mx-auto">
            <div className="text-white text-center py-50 text-xl flex flex-col gap-2">
              <h1 className="text-3xl font-semibold">Get promotions & updates!</h1>
              <p className="mb-10">
                Seamlessly empower fully researched growth strategies and
                interoperable internal or “organic” sources credibly innovate
                granular internal .
              </p>
              <div className="border border-white rounded-4xl p-1 flex justify-between items-center mx-auto w-[60%]">
                <input className="px-5 focus:outline-0 w-full" type="text" name="" id=""  placeholder="Enter your email"/>
                <button className=" bg-blue-600 font-medium transition duration-300 border border-transparent text-lg cursor-pointer  py-2 px-5 rounded-3xl hover:bg-white hover:border hover:text-blue-600 hover:border-blue-600">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
