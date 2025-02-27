import Logo from "./Logo";
import Navigation from "./Navigation";
import HeaderBtns from "./HeaderBtns";

const Header = () => {
  return (
    <div>
      <div className="max-w-[1380px] mx-auto">
        <div className="flex justify-between py-10 items-center">
            <Logo/>
            <Navigation/>
            <HeaderBtns/>
        </div>
      </div>
    </div>
  );
};

export default Header;
