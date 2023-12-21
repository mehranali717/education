import { Thumbnail } from "../../components";
import thumbnailImage1 from "../../assets/images/staff1.jpeg";
import thumbnailImage2 from "../../assets/images/staff2.jpeg";
import thumbnailImage3 from "../../assets/images/staff3.jpeg"
const thumbnailData = [
    {image:thumbnailImage1, title:"Muhammad Asim Ullah", destination:"Principle", email:"email@email.com", institute:"Shaikh Ahmad Hassan School of Law", description:"Dr. Sadaf Aziz joined the Department of Law and Policy as an Assistant Professor and was amongst the small cohort of faculty who launched the BA-LL.B. program here. She designed the first labour law"},
    {image:thumbnailImage2, title:"Tauseef-Ul-Mohsin Razi", destination:"Lecturer (English)",  email:"email@email.com", institute:"Shaikh Ahmad Hassan School of Law" , description:"Dr. Sadaf Aziz joined the Department of Law and Policy as an Assistant Professor and was amongst the small cohort of faculty who launched the BA-LL.B. program here. She designed the first labour law"},
    {image:thumbnailImage3, title:"Muhammad Zubair", destination:"Lecturer ( Political Science)",  email:"email@email.com", institute:"Shaikh Ahmad Hassan School of Law" , description:"Dr. Sadaf Aziz joined the Department of Law and Policy as an Assistant Professor and was amongst the small cohort of faculty who launched the BA-LL.B. program here. She designed the first labour law"},
]
const FacultyDepart = (props) => (
  <section className="py-[104px] px-[40px] bg-gradient-to-t from-purple-300 via-transparent to-purple-100">
    <div className="w-[600px] lg:w-[900px] xl:w-[1200px] mx-auto ">
      <div className="lg:flex justify-between w-[100%]">
        <div className="w-[50%]">
          <h2 className="font-[400] text-[39px] text-[#26262c]">
            {props.title}
          </h2>
        </div>
        <div className="lg:w-[50%] pe-[80px]">
          <p className="font-[400] text-[16px] text-[#76767f] py-[46px]">
            {props.tagline}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-[49px] gap-y-[50px]">
        {thumbnailData.map((thumbnail, index) => (
          <Thumbnail thumbnail={thumbnail} key={index} faculty={true}/>
        ))}
      </div>
    </div>
  </section>
);
export default FacultyDepart;
