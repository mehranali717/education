import { useRoutes } from "react-router-dom"
import { MainLayout } from "../layouts"
import { Home } from "../pages"

export const Routes =()=> {
    return useRoutes([{
        element:<MainLayout />,
        children:[
            {path:"", element:<Home />}
        ]
    }])
}