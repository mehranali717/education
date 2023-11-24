import { CollegeDetailsFooter, NavFooter } from "../../components";

const Footer = () => (
  <footer className="pt-[80px] px-[40px] pb-[40px] bg-[#f6f7fd] flex flex-col">
    <div className=" w-[1200px] mx-auto">
      <CollegeDetailsFooter />
      <NavFooter />
    </div>
  </footer>
);
export default Footer;
