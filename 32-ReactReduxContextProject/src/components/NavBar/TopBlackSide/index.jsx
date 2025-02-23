import styles from "./index.module.css"
const TopBlackSide = () => {
  return (
    <div className={`bg-black ${styles.topHeader}`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between py-4 font-medium">
          <div className="flex text-white gap-4 text-sm items-center">
            <div className="flex items-center justify-center gap-2">
              <img className="w-8 h-5"
                src="https://preview.colorlib.com/theme/estore/assets/img/icon/header_icon.png"
                alt=""
              />
              <select name="" id="" className="bg-black text-xs">
                <option value="USA">USA</option>
                <option value="SPN">SPN</option>
                <option value="CDA">CDA</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <p className="text-xs">+777 2345 7886</p>
          </div>
          <div className="flex text-white gap-10 text-sm">
            <p className="cursor-pointer">My account</p>
            <p className="cursor-pointer">Wishlist</p>
            <p className="cursor-pointer">Shopping</p>
            <p className="cursor-pointer">Cart</p>
            <p className="cursor-pointer">Checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlackSide;
