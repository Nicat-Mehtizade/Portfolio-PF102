import styles from "./index.module.css"

const FindBestProductSection = () => {
    return (
      <section className="py-30">
      <div className=" mx-auto max-w-[1280px]">
        <div className={`bg-[#FFF6D9] rounded-lg relative flex items-center justify-between p-25 ${styles.parent}`}>
          <div className="absolute left-[120px] bottom-0">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/categori/card-man.png"
              className={`w-[100px] md:w-[160px] ${styles.image}`}
            />
          </div>
  
          <div className={`flex-1 text-center md:text-left ml-[300px] ${styles.text}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Find The Best Product  from Our Shop
            </h1>
            <p className="text-gray-600 mt-3 text-lg">
            Designers who are interesten creating state ofthe.
            </p>
            <button className="mt-5 px-10 py-3 bg-black transition text-white duration-300 rounded-4xl shadow-md hover:translate-y-[-5px] hover:shadow-2xl ">
              Shop Now
            </button>
          </div>
  
          <div className="absolute right-10 bottom-5">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/categori/card-shape.png"
              className={`w-[120px] ${styles.clothImg}`}
            />
          </div>
        </div>
      </div>
    </section>
    );
  };
  
  export default FindBestProductSection;
  