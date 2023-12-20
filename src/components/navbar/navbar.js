import { Link } from "react-router-dom";

const Navbar = (props) => {
  const navItems = [
    { title: "Home" ,url:"home"},
    { title: "Downloads",url:"downloads"},
    { title: "Faculty" ,url:"faculty"},
    { title: "Fee Structure" ,url:"fee-structure"},
    { title: "Time Table" ,url:"time-table"},
    { title: "Contact Us" ,url:"contact-us"},
  ];
  return (
    <nav className={`${props.className} min-w-[360px]`}>
      <ul className="flex w-full justify-center flex-wrap">
        {navItems.map((item, index) => (
          <li key={index}><Link to={item.url} className={`${props.navfont} text-[#76767f] xl:text-[15px] text-[13px] px-[10px] xl:px-[16px] font-[600] lg:font-[700] no-underline`} >{item.title}</Link></li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
