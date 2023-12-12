import { Logo, Navbar } from "../../components";
import "./header.css";
const Header = () => (
  <div className="header-bg">
    <div className="sm:w-full xl:w-[1200px] flex items-center justify-between mx-auto py-[5px] px-[20px] xl:px-[0px]">
      <Logo className="w-[90px] h-[90px] " />
      <Navbar className="xl:w-[1000px] w-[800px] xl:me-[30px]" />
    </div>
  </div>
);

export default Header;
