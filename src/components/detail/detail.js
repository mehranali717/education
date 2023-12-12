import { useLocation } from "react-router";
import Images from "../images/images";
import { Link } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const data = location.state.data;
  return (
    <div className="w-[867px] h-[320px] overflow-hidden flex gap-x-[20px] mx-auto  shadow-lg my-[50px]">
      <Images
        image={data.image}
        className="w-[367px] h-auto pb-[15px] rounded-[8px] transition-transform transform hover:scale-110 hover:transition-transform duration-300"
      />
      <div className="p-[10px] w-[400px] flex flex-col gap-y-[10px]">
        <h3 className=" text-[#26262c] font-[400] text-[32px] ">
          {data.title}
        </h3>
        <p className="font-[400] text-[16px] text-[#76767f]">
          {data.destination}
        </p>
        <span>{data.institute}</span>
        <span>
          Email:
          <Link mailto="email@email.com" className="ps-[5px] no-underline">
            {data.email}
          </Link>
        </span>
        <p className="flex flex-col text-[#76767f]">
          <span className="font-[500] text-[20px] capitalize text-[#000]">Description:</span>
          {data.description} 
        </p>
      </div>
    </div>
  );
};
export default Detail;
