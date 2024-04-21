import { Button, Input } from "../../components";
import "./login.css";
const Login = () => (
  <div className="loginbg">
    <div className="w-full md:w-[600px] lg:w-[900px] xl:w-[1200px] mx-auto formbg rounded-[10px] flex items-center">
     <div className="w-[770px] mx-auto flex flex-col items-center gap-y-[50px]">
     <h2 className="text-[#fff] text-[40px] font-[500] text-center">Wish to know more about admissions and updates? Subscribe now!</h2>
      <div className="flex gap-x-[10px]">
        <Input placeholder="Email address"/>
        <Button value="Subscribe"/>
      </div>
     </div>
    </div>
  </div>
);
export default Login