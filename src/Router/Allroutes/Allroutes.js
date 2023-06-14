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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/contactUS",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/about",
        element: <Services />,
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
    children: [
      {
        path: "/dashboard/myAppointment",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers />,
      },
    ],
  },
]);
export default router;
