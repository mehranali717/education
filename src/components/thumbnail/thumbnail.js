import { Link, useNavigate } from "react-router-dom";
import Images from "../images/images";

const Thumbnail = ({ thumbnail, faculty = false }) => {
  const navigate = useNavigate();
  const viewDetailHandler = (data) => {
    navigate(`/view`, {
      state: {
        data: data,
      },
    });
  };
  return (
      <div className="w-[367px] h-[520px] overflow-hidden  mx-auto  shadow-lg bg-gradient-to-t from-green-200 to-transparent via-white">
        <Images
          image={thumbnail.image}
          className="w-[367px] h-auto pb-[15px] rounded-[8px] transition-transform transform hover:scale-110 hover:transition-transform duration-300"
        />

        <div className="p-[10px]">
          <h3 className=" text-[#26262c] font-[400] text-[32px] ">
            {thumbnail.title}
          </h3>
          <p className="font-[400] text-[16px] text-[#76767f]">
            {thumbnail.destination}
          </p>
          {faculty && (
            <Link
              onClick={viewDetailHandler(thumbnail)}
              className="text-[#002581] capitalize text-[13px] font-[600] no-underline cursor-pointer"
            >
              Profile
            </Link>
          )}
        </div>
      </div>
  );
};
export default Thumbnail;
