import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserProfile from "../pages/UserProfile";
import EstateDetails from "../components/Estate/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";
import Error from "../components/Error";
import Faq from "../pages/Faq";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/estateDetails/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/estates.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/userProfile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);
