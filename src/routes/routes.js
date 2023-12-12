import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { ContactUs, Faculty, Home } from "../pages";
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
        { path: "*", element: <Navigate to="/home" /> },
      ],
    },
  ]);
};
