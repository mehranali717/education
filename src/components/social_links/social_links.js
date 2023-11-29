import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SocialLinks =({socialIcons})=> <div className="w-[100px] justify-end">
    <ul className="flex justify-between">
    {socialIcons.map((item, index)=><Link key={index} className="text-[#000] no-underline"><FontAwesomeIcon icon="facebook"/>s</Link>)}
    </ul>
</div>
export default SocialLinks