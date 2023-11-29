import Images from "../images/images";

const Thumbnail = ({ thumbnail }) => (
  <div>
    <div className="w-[367px] h-[520px] overflow-hidden  mx-auto  shadow-lg">
      <Images
        image={thumbnail.image}
        className="w-[367px] h-auto pb-[15px] rounded-[8px] transition-transform transform hover:scale-110 hover:transition-transform duration-300"
      />

      <div className="p-[10px]">
        <h3 className=" text-[#26262c] font-[400] text-[32px] px-[2px]  ">
          {thumbnail.title}
        </h3>
        <p className="font-[400] text-[16px] text-[#76767f] p-[10px]  h-[500px]">
          {thumbnail.description}
        </p>
      </div>
    </div>
  </div>
);
export default Thumbnail;
