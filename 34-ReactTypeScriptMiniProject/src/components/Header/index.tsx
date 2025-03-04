import Logo from "./Logo";
import Navigation from "./Navigation";
import HeaderBtns from "./HeaderBtns";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-white shadow-xl">
      <div className="max-w-[1380px] mx-auto">
        <div className="flex justify-between py-8 items-center ">
            <Logo/>
            <Navigation/>
            <HeaderBtns/>
        </div>
      </div>
    </div>
  );
};

export default Header;
