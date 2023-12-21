import { Logo, Navbar } from "../../components";
import "./header.css";
const Header = () => (
  <div className=" bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300">
    <div className="w-[600px] lg:w-[900px] xl:w-[1200px] flex items-center justify-between mx-auto py-[5px] px-[20px] xl:px-[0px]">
      <Logo className="w-[90px] h-[90px] " />
      <Navbar className="w-[300px] lg:w-[650px] xl:w-[1000px] xl:me-[30px]" />
    </div>
  </div>
);

export default Header;
