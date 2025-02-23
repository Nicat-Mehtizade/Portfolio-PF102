import styles from "./index.module.css";

const SubscribeSection = () => {
  return (
    <div className="mb-15">
      <div className="max-w-[1280px] mx-auto">
        <div>
          <div className={`${styles.background} bg-[#DFF1FF] relative py-20 flex justify-evenly items-center`}>
            <img
              className={`absolute left-0 top-[-10px] w-[450px] ${styles.image}`}
              src="https://preview.colorlib.com/theme/estore/assets/img/collection/latest-man.png"
              
            />
            <div className={`z-1 px-20 ${styles.text}`}>
              <h1 className="text-4xl font-bold mb-3">Get Our <br /> Latest Offers News</h1>
              <p className="text-xl">Subscribe news latter</p>
            </div>
            <div className={`bg-white  rounded-4xl flex ${styles.inputBar}`}>
                <input className="focus:outline-0 px-8" type="text" name="" id="" placeholder="Your email here"/>
                <div className="h-full">
                <button className="cursor-pointer py-3 px-7 bg-[#2577FD] h-full rounded-4xl text-white">Shop Now</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
