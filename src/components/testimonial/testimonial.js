import Images from "../images/images";
import commasImage from "../../assets/images/invertedcomma.png"
const Testimonial = () => (
  <div className="py-[104px] px-[40px] bg-[#f6f7fd] testimonial">
    <div className="w-[1200px] mx-auto flex flex-col gap-y-[30px]">
      <Images image={commasImage} className="w-[100px] h-[70px]"/>
      <p className="text-[56px] italic leading-[1.2em] text-[#76767f] font-[500px] ps-[30px]">
        We aim at inspiring our students to dream more, learn more, do more, and
        become more in their respective journeys of life.
      </p>
      <p className="text-[#26262c] font-[400] text-[24px] ps-[30px]">Muhammad Asim Ullah — College Principal</p>
    </div>
  </div>
);
export default Testimonial
