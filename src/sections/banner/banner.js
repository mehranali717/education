import { Button } from "../../components";
import bannerbgImage from "../../assets/images/banner-bg.jpg";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./banner.css";
const Banner = () => (
    <Carousel>
    <Carousel.Item>
      <img  src={bannerbgImage} className="w-[100%] h-[500px]"/>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <Carousel.Caption>
          <div className="w-[950px] mx-auto flex flex-col items-center gap-y-[20px] ">
            <h1 className="text-[56px] text-[#fff] font-[400] leading-[1.2]">
              Government Associate College (Boys) Kot Mithan District Rajanpur
            </h1>
            <span className="text-[#F4F4F5] font-[400] text-[16px]">
              This is where we teach students skills they need to transform
              themselves, others, and our global communities.
            </span>
            <Button value="our academics" />
          </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={bannerbgImage} className="w-[100%] h-[500px]" />
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <Carousel.Caption>
          <div className="w-[950px] mx-auto flex flex-col items-center  gap-y-[20px] ">
            <h1 className="text-[56px] text-[#fff] font-[400] leading-[1.2]">
              Government Associate College (Boys) Kot Mithan District Rajanpur
            </h1>
            <span className="text-[#F4F4F5] font-[400] text-[16px]">
              This is where we teach students skills they need to transform
              themselves, others, and our global communities.
            </span>
            <Button value="our academics" />
          </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  src={bannerbgImage} className="w-[100%] h-[500px]"/>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <Carousel.Caption>
          <div className="w-[950px] mx-auto flex flex-col items-center  gap-y-[20px] ">
            <h1 className="text-[56px] text-[#fff] font-[400] leading-[1.2]">
              Government Associate College (Boys) Kot Mithan District Rajanpur
            </h1>
            <span className="text-[#F4F4F5] font-[400] text-[16px]">
              This is where we teach students skills they need to transform
              themselves, others, and our global communities.
            </span>
            <Button value="our academics" />
          </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
export default Banner;
