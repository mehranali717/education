import { States, Testimonial } from "../../components";
import {
  Banner,
  Vision,
  Departments,
  Cocurricular,
  Login,
} from "../../sections";
const Home = () => (
  <>
    <Banner />
    <div className="bg-gradient-to-t from-purple-300 via-white to-purple-100">
      <Vision />
      <States />
    </div>
    <Testimonial />
    <Departments title="Departments" tagline={DepartmentTagline} />
    <Cocurricular />
    <Login />
  </>
);
export default Home;

const DepartmentTagline =
  "Government Associate College (Boys) Kot Mithan District Rajanpur aims at offering all our students a broad and balanced curriculum that provides rewarding and stimulating activities to prepare them for the best social and cultural life.";
