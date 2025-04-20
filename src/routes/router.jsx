import {createBrowserRouter,} from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import UserLayout from "../layout/userLayout";
import Login from "../pages/user/Login";
import Cartpage from "../pages/user/Cartpage";
import Productpage from "../pages/user/Productpage";
import Signup from "../pages/user/Signup";
import Profilepage from "../pages/user/Profilepage";
import Restaurant from "../pages/user/Restaurant";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout/>,
      errorElement: <h1> Error Page </h1>,
      children:[
        {
            path:"",
            element: <HomePage/>
        },
        {
            path:"login",
            element: <Login/>
        },
        {
            path:"signup",
            element: <Signup/>
        },
        {
            path:"cart",
            element: <Cartpage/>
        },
        {
            path:"products",
            element: <Productpage/>
        },
        {
            path:"profile",
            element: <Profilepage/>
        },
        {
            path:"restaurant",
            element: <Restaurant/>
        }
      ]
    },
  ]);