/** @format */

import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Appointment from "../../pages/Appointment/Appointment";
import DashBoard from "../../pages/DashBoard/DashBoard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import AllUsers from "../../pages/DashBoard/All Users/AllUsers";
import MyAppointment from "../../pages/DashBoard/MyAppointment/MyAppointment";
import ContactUs from "../../pages/Home/ContactUs/ContactUs";
import Services from "../../pages/Home/Services/Services";
import Review from "../../pages/Review/Review";
import MyReviews from "../../pages/DashBoard/MyReviews/MyReviews";
import ContactRequest from "../../pages/DashBoard/ContactRequest/ContactRequest";
import Error from "../../pages/Error/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Login></Login>,
        errorElement: <Error />,
      },
      {
        path: "/register",
        element: <Register></Register>,
        errorElement: <Error />,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
        errorElement: <Error />,
      },
      {
        path: "/contactUS",
        element: <ContactUs></ContactUs>,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <Services />,
        errorElement: <Error />,
      },
      {
        path: "/review",
        element: <Review />,

        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard/myAppointment",
        element: <MyAppointment />,
        errorElement: <Error />,
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
        errorElement: <Error />,
      },
      {
        path: "/dashboard/myReviews",
        element: <MyReviews />,
        errorElement: <Error />,
      },
      {
        path: "/dashboard/contactRequest",
        element: (
          <PrivateRoute>
            <ContactRequest />
          </PrivateRoute>
        ),
        errorElement: <Error />,
      },
    ],
  },
]);
export default router;
