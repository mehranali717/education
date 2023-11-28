import Images from "../images/images";

const Thumbnail = ({thumbnail}) => (
  <div>
    <div className="w-[367px] mx-auto">
      <Images image={thumbnail.image} className="w-[367px] h-auto pb-[15px]" />
      <h3 className="pb-[12px] text-[#26262c] font-[400] text-[32px]">{thumbnail.title}</h3>
      <p className="font-[400] text-[16px] text-[#76767f]">
        {thumbnail.description}
      </p>
    </div>
  </div>
);
export default Thumbnail;
