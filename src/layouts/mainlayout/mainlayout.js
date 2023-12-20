import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../sections";
import { Divider } from "../../components";

const MainLayout = () => (
  <>
    <Header />
    <Divider />
    <Outlet />
    {/* <Footer /> */}
  </>
);

export default MainLayout;
