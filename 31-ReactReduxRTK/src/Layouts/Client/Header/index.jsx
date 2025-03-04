import ClientLogo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="shadow-xl">
    <div className="mx-auto max-w-[1280px]">
      <div className="flex justify-between p-5">
        <ClientLogo />
        <Navigation />
      </div>
    </div>
    </div>
  );
};

export default Header;
