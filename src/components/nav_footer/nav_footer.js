import Logo from "../logo/logo";
import Navbar from "../navbar/navbar";
import SocialLinks from "../social_links/social_links";
const socialIcons = [{ icon: "twitter" }, { icon: "twitter" }, { icon: "twitter" }];
const NavFooter = () => (
  <div className="pt-[48px] pb-[24px] flex justify-between items-center">
    <Logo className="max-w-[275px] h-[275px] "/>
    <Navbar className="w-[550px]" />
    <SocialLinks socialIcons={socialIcons}/>
  </div>
);
export default NavFooter;
