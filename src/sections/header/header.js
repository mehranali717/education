import { useEffect, useState } from "react";
import { Logo, Navbar } from "../../components";
import "./header.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true); 
      } else {
        setIsOpen(false); 
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className=" bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300">
      <div className="w-full md:w-[600px] lg:w-[900px] xl:w-[1200px] flex items-center justify-between flex-col md:flex-row mx-auto py-[5px] px-[20px] xl:px-[0px]">
        <Logo className="w-[90px] h-[90px] mb-3 md:mb-0 self-start" />
        <span className="hamburger md:hidden" onClick={toggleMenu}></span>
        {isOpen && <Navbar className="w-[300px] lg:w-[650px] xl:w-[1000px] xl:me-[30px] " />}
      </div>
    </div>
  );
};

export default Header;
