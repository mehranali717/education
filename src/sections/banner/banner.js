import { Button } from "../../components";
import "./banner.css";
const Banner = () => (
  <div className=" background-img flex justify-start h-[843px] flex items-center">
    <div className="w-[1200px] mx-auto ">
      <div className=" w-[550px] flex flex-col items-start justify-between h-[715px]">
        <h1 className="text-[80px] text-[#fff] font-[400] leading-[1.2]">
          Government Associate College (Boys) Kot Mithan District Rajanpur
        </h1>
        <span className="text-[#F4F4F5] font-[400] text-[16px]">
          This is where we teach students skills they need to transform
          themselves, others, and our global communities.
        </span>
        <Button value="our academics"/>
      </div>
    </div>
  </div>
);
export default Banner;
