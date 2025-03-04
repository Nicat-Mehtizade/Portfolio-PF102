import styles from "./index.module.css";
import { BsBoxSeam } from "react-icons/bs";
import { MdLockOpen } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";
const InfoSection = () => {
  return (
    <div className="py-20 bg-red-600">
      <div className="max-w-[1280px] mx-auto">
        <div className={`flex justify-between items-center gap-20 px-30 ${styles.main}`}>
          <div className={`text-white flex flex-col w-[30%] gap-3 ${styles.info}`}>
            <BsBoxSeam className="text-4xl" />
            <h1 className="font-bold text-xl">Free Shipping Method</h1>
            <p className="text-white">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </div>
          <div className={`text-white flex flex-col w-[30%] gap-3 ${styles.info}`}>
            <MdLockOpen className="text-4xl" />
            <h1 className="font-bold text-xl">Secure Payment System</h1>
            <p className="text-white">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </div>
          <div className={`flex text-white flex-col w-[30%] gap-3 ${styles.info}`}>
            <LuRefreshCw className="text-4xl" />
            <h1 className="font-bold text-xl">Secure Payment System</h1>
            <p className="text-white">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
