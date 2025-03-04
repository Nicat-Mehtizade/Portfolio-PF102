import styles from "./index.module.css";

const BestCollectionSection = () => {
  return (
    <div className="mb-30 ">
      <div className="max-w-[1280px] mx-auto">
        <div className={`flex justify-evenly items-end ${styles.parent}`}>
          <div className="flex flex-col gap-8 justify-start items-start ">
            <h1 className="font-bold text-4xl">
              Best Collection <br /> of This Month
            </h1>
            <p className="text-gray-700 text-lg">
              Designers who are interesten crea.
            </p>
            <button className={`bg-[#2577FD] py-3 px-8 text-white font-medium rounded-3xl mb-25 cursor-pointer ${styles.button}`}>
              Shop Now
            </button>
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection1.png"
              alt=""
            />
          </div>
          <img
          className={styles.image}
            src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection2.png"
            alt=""
          />
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <p className="text-lg py-4 px-5 font-semibold text-end rounded-lg">
                Menz Winter <br />
                Jacket
              </p>
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection3.png"
                alt=""
              />
            </div>
            <div className="flex items-end justify-center ">
              <p className="bg-[#2577FD] text-white text-lg py-4 px-5 font-semibold text-end rounded-lg">
                Menz Winter <br />
                Jacket
              </p>
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection4.png"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-lg py-4 px-5 font-semibold text-end rounded-lg">
                Menz Winter <br />
                Jacket
              </p>
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCollectionSection;
