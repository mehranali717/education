import { CollegeDetailsFooter, CopyRight, NavFooter } from "../../components";

const Footer = () => (
  <footer className="pt-[80px] px-[40px] pb-[40px] bg-gradient-to-t from-purple-300 via-white to-purple-100 flex flex-col">
    <div className="w-[600px] lg:w-[900px] xl:w-[1200px] mx-auto">
      <CollegeDetailsFooter />
      <NavFooter />
      <CopyRight />
    </div>
  </footer>
);
export default Footer;
