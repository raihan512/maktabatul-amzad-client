import Home from "../Pages/HomePage/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import SignIn from "../Pages/Auth/SignIn/SignIn";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import ResetPassword from "../Pages/Auth/ResetPassword/ResetPassword";
import BooksPage from "../Pages/BooksPage/BooksPage/BooksPage";
import WritersPage from "../Pages/WritersPage/WritersPage/WritersPage";
import CategoriesPage from "../Pages/Auth/CategoriesPage/CategoriesPage/CategoriesPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "writers",
        element: <WritersPage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
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
