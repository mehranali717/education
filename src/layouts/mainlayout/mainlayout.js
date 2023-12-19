import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../sections";

const MainLayout = () => (
  <>
    {/* <Header /> */}
    <Outlet />
    {/* <Footer /> */}
  </>
);

export default MainLayout;
