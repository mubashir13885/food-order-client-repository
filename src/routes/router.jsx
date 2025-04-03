import {createBrowserRouter,} from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import UserLayout from "../layout/userLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout/>,
      errorElement: <h1> Error Page </h1>,
      children:[
        {
            path:"about",
            element: <h1>this is about page</h1>
        },
        {
            path:"profile",
            element: <h1>this is profile page</h1>
        }
      ]
    },
  ]);