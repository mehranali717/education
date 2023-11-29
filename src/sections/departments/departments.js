import { Thumbnail } from "../../components";
import thumbnail1 from "../../assets/images/thumbnail1.jpg";
import thumbnail2 from "../../assets/images/thumbnail2.jpg";
import thumbnail3 from "../../assets/images/thumbnail3.jpg";
import thumbnail4 from "../../assets/images/thumbnail4.jpg";
import thumbnail5 from "../../assets/images/thumbnail5.jpg";

const thumbnailData = [
  {
    image: thumbnail1,
    title: "F.A. (Humanities/Arts) ",
    description:
      "Exploring the richness of human expression, the F.A. (Humanities/Arts) department at our college nurtures creativity, critical thinking, and a profound understanding of the diverse facets of human culture and society.",
  },
  {
    image: thumbnail2,
    title: "F.Sc. (Pre-Engineering)",
    description:
      "Equipping aspiring engineers, the F.Sc. (Pre-Engineering) department blends theory and practice, laying the groundwork for success in the dynamic field of engineering.",
  },
  {
    image: thumbnail3,
    title: "F.Sc. (Pre-Medical)",
    description:
      "F.Sc. (Pre-Medical): Paving the way for future healthcare professionals, our department combines robust theory with practical experiences, ensuring students are well-prepared for the dynamic field of medicine.",
  },
  {
    image: thumbnail4,
    title: "ICS (Computer Science)",
    description:
      "ICS (Computer Science): Unleashing tech enthusiasts, our department provides a deep dive into computer science principles, offering hands-on experience with cutting-edge technologies to groom future innovators and IT professionals.",
  },
  {
    image: thumbnail5,
    title: "Associate (Arts, Science)",
    description:
      "In the Associate Degree Program (Arts & Science), we offer a versatile academic experience, blending the arts and sciences to provide students with a well-rounded education that prepares them for a range of career paths and further academic pursuits.",
  },
];
const Departments = () => (
  <section className="py-[104px] px-[40px]">
    <div className="w-[1200px] mx-auto ">
      <div className="flex justify-between w-[100%]">
        <div className="w-[50%]">
          <h2 className="font-[400] text-[39px] text-[#26262c]">Departments</h2>
        </div>
        <div className="w-[50%] pe-[80px]">
          <p className="font-[400] text-[16px] text-[#76767f] py-[46px]">
            Government Associate College (Boys) Kot Mithan District Rajanpur
            aims at offering all our students a broad and balanced curriculum
            that provides rewarding and stimulating activities to prepare them
            for the best social and cultural life.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-[49px] gap-y-[50px]">
      {thumbnailData.map((thumbnail, index) => (
        <Thumbnail thumbnail={thumbnail} key={index} />
      ))}
      </div>
    </div>
  </section>
);
export default Departments;
