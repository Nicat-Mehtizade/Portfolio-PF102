import styles from "./index.module.css";
const WatchOfChoice = () => {
  return (
    <div>
      <div className="max-w-[1180px] mx-auto">
        <div className="py-15 flex flex-col gap-30">
          <div className="md:flex justify-evenly">
            <div className="md:w-[45%] flex flex-col items-center  md:items-start justify-center gap-6 mb-5">
              <h1 className="text-4xl md:text-5xl font-bold">Watch of Choice</h1>
              <p className="w-[75%] text-gray-500">
                Enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
              <button
                className={`bg-red-500 text-white font-medium text-sm py-4 px-6 mt-15 cursor-pointer ${styles.button}`}
              >
                SHOP WATCHES
              </button>
            </div>
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png"
              alt=""
              className="md:w-[45%]"
            />
          </div>
          <div className="md:flex justify-between">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png"
              alt=""
              className="md:w-[45%] mb-5"
            />
            <div className="md:w-[45%] flex flex-col items-center  md:items-start justify-center gap-6 mb-5">
              <h1 className="text-4xl md:text-5xl font-bold">Watch of Choice</h1>
              <p className="w-[75%] text-gray-500">
                Enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
              <button
                className={`bg-red-500 text-white font-medium text-sm py-4 px-6 mt-15 cursor-pointer ${styles.button}`}
              >
                SHOP WATCHES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchOfChoice;
