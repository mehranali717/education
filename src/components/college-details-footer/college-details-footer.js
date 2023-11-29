import { Link } from "react-router-dom";

const CollegeDetailsFooter = () => (
  <div className="flex justify-between pb-[40px]">
    <div className="w-[550px] flex flex-col">
      <h2 className="text-[#26262c] text-[32px] pb-[32px] font-[400] leading-[1.5]">
        Government Associate College (Boys) Kot Mithan District Rajanpur​
      </h2>
      <span className="text-[#76767f] text-[16px] font-[400]">
        Address: Rojhan Road, Kot Mithan, Rajanpur, Punjab
      </span>
    </div>
    <div className="w-[275px] flex flex-col">
      <h2 className="text-[#26262c] text-[32px] pb-[32px] font-[400] leading-[1.5] align-start">
        Main Office
      </h2>
      <span className="text-[#76767f] text-[16px] font-[400]">
        <Link href="+92 333 3628113" className="text-[#76767f] text-[16px] font-[400] no-underline">+92 333 3628113</Link>
      </span>
      <span className="text-[#76767f] text-[16px] font-[400]">
        9:00 a.m. – 4:00 p.m.
      </span>
    </div>
  </div>
);

export default CollegeDetailsFooter;
