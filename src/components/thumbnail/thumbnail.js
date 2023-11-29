import Images from "../images/images";

const Thumbnail = ({thumbnail}) => (
  <div>
    <div className="w-[367px] h-[520px] overflow-hidden  mx-auto  shadow-lg">
      <Images image={thumbnail.image} className="w-[367px] h-auto pb-[15px] rounded-[8px]" />
      <div className="p-[10px]">
      <h3 className="pb-[12px] text-[#26262c] font-[400] text-[32px]">{thumbnail.title}</h3>
      <p className="font-[400] text-[16px] text-[#76767f] px-[5px]">
        {thumbnail.description}
      </p>
      </div>
    </div>
  </div>
);
export default Thumbnail;
