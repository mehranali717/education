import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { ContactUs, Faculty, Home, Timetable } from "../pages";
import { Detail } from "../components";

export const Routes = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/contact-us", element: <ContactUs /> },
        { path: "/faculty", element: <Faculty /> },
        { path: "view", element: <Detail /> },
        { path:"time-table", element:<Timetable />},
        { path: "*", element: <Navigate to="/home" /> },
      ],
    },
  ]);
};
