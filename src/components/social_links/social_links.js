import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; 
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; 
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; 

const SocialLinks =()=> {
return <div className="w-[100px] justify-end">
    <ul className="flex justify-between gap-2">
    <Link className="text-[#000] no-underline"><FontAwesomeIcon icon={faFacebook} /></Link>
    <Link className="text-[#000] no-underline"><FontAwesomeIcon icon={faInstagram} /></Link>
    <Link className="text-[#000] no-underline"><FontAwesomeIcon icon={faTwitter} /></Link>
    </ul>
</div>}
export default SocialLinks