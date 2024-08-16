import {createBrowserRouter,RouterProvider,} from "react-router-dom";
// import Nav from "../components/Nav.jsx"
// import Home from '../pages/Home.jsx'
// import Bootcamp from '../pages/Bootcamp.jsx'
// import Login from '../pages/Login.jsx'
// import Error from './component/Error'

import Beach from '../pages/Beach'
import Forest from '../pages/Forest'
import Snow from '../pages/Snow'
import Mauntains from '../pages/Mountains'
import Desert from '../pages/Desertt'
import Err from '../pages/Err'

function Router() {
        const router = createBrowserRouter([
            {
                path: "/",
                element: <Beach />,
                errorElement: <Err />
              },
            {
              path: "/Beach",
              element: <Beach />,
            },
            {
              path: "/Forest",
              element: <Forest />,
            },
            {
               path: "/Snow",
               element: <Snow />,
            },
            {
                path: "/Mountains",
                element: <Mauntains />,
             },
            {
                path: "/Desert",
                element: <Desert />,
            }
        ]);
        return(
        <RouterProvider router={router} />      
    )
}
export default Router