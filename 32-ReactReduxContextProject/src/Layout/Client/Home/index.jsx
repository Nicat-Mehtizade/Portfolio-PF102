import { useEffect, useState } from "react";
import BestCollectionSection from "../../../components/BestCollectionSection";
import FindBestProductSection from "../../../components/FindBestProductsSection";
import Hero from "../../../components/Hero";
import ImagesSection from "../../../components/ImagesSection";
import InfoSection from "../../../components/InfoSection";
import LatestProducts from "../../../components/LatestProducts";
import ShopByCategory from "../../../components/ShopByCategory";
import SubscribeSection from "../../../components/SubscribeSection";
import { FaArrowUp } from "react-icons/fa6";
const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Hero />
      <ShopByCategory />
      <LatestProducts />
      <FindBestProductSection />
      <BestCollectionSection />
      <SubscribeSection />
      <InfoSection />
      <ImagesSection />
      <button
        onClick={scrollToTop}
        className={`cursor-pointer fixed bottom-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl shadow-lg transition-transform duration-300 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Home;
