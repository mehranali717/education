import Logo from "../logo/logo";
import Navbar from "../navbar/navbar";
import SocialLinks from "../social_links/social_links";
const socialIcons = [{ icon: "twitter" }, { icon: "twitter" }, { icon: "twitter" }];
const NavFooter = () => (
  <div className="pt-[48px] pb-[24px] flex justify-between items-center ">
    <Logo className="max-w-[75px] h-[75px] md:max-w-[200px] md:h-[200px] lg:max-w-[275px] lg:h-[275px] "/>
    <Navbar className="w-[550px]" navfont="font-[400]" />
    <SocialLinks socialIcons={socialIcons}/>
  </div>
);
export default NavFooter;
