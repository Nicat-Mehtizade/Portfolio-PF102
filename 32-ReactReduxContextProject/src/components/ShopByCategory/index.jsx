import styles from "./index.module.css";

const ShopByCategory = () => {
  return (
    <div>
      <div className="max-w-[1280px] mx-auto">
        <div className="py-20">
          <h1 className="text-center text-3xl mb-10 font-bold">Shop by Category</h1>
          <div className={`flex gap-8 ${styles.main}`}>
          {/* First Card */}
            <div >
              <div className={`${styles.image1}`}>
                <img
                  
                  src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg"
                  alt=""
                />

                <div className={`${styles.categoryText1}`}>
                  <h1 className={`font-bold text-xs sm:text-xl md:text-2xl lg:text-3xl ${styles.text}`}>Owmen`s</h1>
                  <p className={`bg-yellow-400 text-center p-0 md:p-1 font-medium relative rounded-2xl text-xs md:text-sm ${styles.desc}`}>Best New Deals</p>
                  <h3 className={`font-[Yellowtail,serif] italic font-bold text-nowrap text-xs md:text-xl lg:text-2xl absolute lg:top-14 text-[#0071fe;] ${styles.collection}`}>New Collection</h3>
                </div>
              </div>
            </div>
          {/* Second Card */}
            <div >
              <div className={`${styles.image2}`}>
                <img
                  
                  src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg"
                  alt=""
                />

                <div className={`${styles.categoryText2}`}>
                  <p className={`font-[Yellowtail,serif] italic font-bold text-nowrap text-xs sm:text-lg md:text-xl lg:text-2xl text-[#0071fe;] ${styles.text}`}>Discount!</p>
                  <h1 className={`font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl ${styles.desc}`}>Winter Cloth</h1>
                  <p className={`text-xs lg:text-lg ${styles.collection}`}>New Collection</p>
                </div>
              </div>
            </div>
          {/* Third Card */}
            <div >
              <div className={`${styles.image3}`}>
                <img
                  
                  src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg"
                  alt=""
                />

                <div className={`${styles.categoryText3}`}>
                  <h1 className={`font-bold text-xs sm:text-xl md:text-2xl lg:text-3xl ${styles.text}`}>Man`s Cloth</h1>
                  <p className={`bg-yellow-400 text-center p-0 md:p-1 font-medium relative rounded-2xl text-xs md:text-sm ${styles.desc}`}>Best New Deals</p>
                  <h3 className={`font-[Yellowtail,serif] italic font-bold text-nowrap text-xs md:text-xl lg:text-2xl absolute lg:top-14 text-[#0071fe;] ${styles.collection}`} >New Collection</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory