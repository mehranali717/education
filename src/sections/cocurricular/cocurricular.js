import sports1Image from "../../assets/images/sports1.jpeg";
import sports2Image from "../../assets/images/sports2.jpeg";
import sports3Image from "../../assets/images/sports3.jpeg";
import CircleImage from "../../assets/images/circle.png";
import { Images } from "../../components";

const SportsData = [
  { image: sports1Image },
  { image: sports2Image },
  { image: sports3Image },
];
const Cocurricular = () => (
  <div className="py-[104px] px-[40px]">
    <div className="w-[600px] lg:w-[900px] xl:w-[1200px] mx-auto flex flex-col lg:flex-row gap-y-[40px] items-center justify-between lg:items-start ">
      <div className="flex flex-col gap-y-[15px] w-[700px] lg:w-[550px] ">
        {SportsData.map((item, index) => (
          <Images image={item.image} key={index} className="rounded-[8px] shadow-lg" />
        ))}
      </div>
      <div className="w-[700px] lg:w-[550px] flex flex-col gap-y-[30px] pe-[64px]">
        <h2 className="text-[56px] text-[#26262c] font-[600]">
          Our Co-curricular Activities
        </h2>
        <div className="flex gap-[10px] ">
          <Images image={CircleImage} className="w-[25px] h-[25px]" />
          <div className="flex flex-col gap-[10px]">
            <span className="text-[#26262c] text-[24px] font-[500]">
              Sports
            </span>
            <p className="font-[400] text-[16px] text-[#76767f]">
              Encourage physical fitness, teamwork, and sportsmanship through
              inter-house and inter-school sports competitions in various
              disciplines like cricket, football, basketball, and more.
            </p>
          </div>
        </div>
        <div className="flex gap-[10px] ">
          <Images image={CircleImage} className="w-[25px] h-[25px]" />
          <div className="flex flex-col gap-[10px]">
            <span className="text-[#26262c] text-[24px] font-[500]">
              Debates and Public Speaking:
            </span>
            <p className="font-[400] text-[16px] text-[#76767f]">
              Develop communication and critical thinking skills through regular
              debates, public speaking contests, and discussions.
            </p>
          </div>
        </div>
        <div className="flex gap-[10px] ">
          <Images image={CircleImage} className="w-[25px] h-[25px] " />
          <div className="flex flex-col gap-[10px]">
            <span className="text-[#26262c] text-[24px] font-[500]">
              Career Guidance Sessions:
            </span>
            <p className="font-[400] text-[16px] text-[#76767f]">
              Organize sessions with professionals from various fields to guide
              students in making informed decisions about their future careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Cocurricular;
