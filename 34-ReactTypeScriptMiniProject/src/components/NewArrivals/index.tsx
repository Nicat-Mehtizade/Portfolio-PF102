import styles from "./index.module.css";

const NewArrivals = () => {
  return (
    <div>
      <div className="max-w-[1280px] mx-auto">
        <div className="py-30">
          <h1 className="text-black font-bold text-5xl mb-15 ml-17">New Arrivals</h1>
          <div className="md:flex justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-center gap-4 mb-4">
              <div className={styles.watch}>
                <img
                  className={styles.watchImg}
                  src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
                  alt=""
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-700">Thermo Ball Etip Gloves</h2>
              <p className="text-red-500 text-lg font-medium">$ 45,743</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mb-4">
              <div className={styles.watch}>
                <img
                  className={styles.watchImg}
                  src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"
                  alt=""
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-700">Thermo Ball Etip Gloves</h2>
              <p className="text-red-500 text-lg font-medium">$ 45,743</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className={styles.watch}>
                <img
                  className={styles.watchImg}
                  src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"
                  alt=""
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-700">Thermo Ball Etip Gloves</h2>
              <p className="text-red-500 text-lg font-medium">$ 45,743</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
