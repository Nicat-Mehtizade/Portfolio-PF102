import styles from "./index.module.css";
const Hero = () => {
  return (
    <div className="bg-[#F0F0F2]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-center items-center">
          <div className={`animate__animated animate__backInLeft flex flex-col gap-5 items-start ${styles.hero}`}>
            <h1 className="text-black text-6xl md:text-8xl font-bold">
              Select Your New Perfect Style
            </h1>
            <p className="text-sm md:text-lg w-[75%]">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure.
            </p>
            <button className={`bg-[#4A4A4B] text-white py-3 px-7 font-semibold ${styles.button}`}>
              SHOP NOW
            </button>
          </div>
          <div className={`w-[500px] min-h-[500px] md:h-[80vh] lg:h-[750px] flex justify-center items-center overflow-hidden relative ${styles.imgContainer}`}>
            <img
              className={`${styles.img} absolute`}
              src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
