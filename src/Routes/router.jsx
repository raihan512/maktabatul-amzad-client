import Home from "../Pages/HomePage/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import SignIn from "../Pages/Auth/SignIn/SignIn";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import ResetPassword from "../Pages/Auth/ResetPassword/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  //   Auth Routes Start
  {
    path: "auth/signin",
    element: <SignIn />,
  },
  {
    path: "auth/signup",
    element: <SignUp />,
  },
  {
    path: "auth/resetpassword",
    element: <ResetPassword />,
  },
  //   Auth Routes End
]);
