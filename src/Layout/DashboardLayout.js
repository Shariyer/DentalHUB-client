/** @format */

import { Link, Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Shared/Navbar/Navbar";
import { useContext } from "react";
import { authContext } from "../ContextAPI/ContextAPI";
import { useQuery } from "@tanstack/react-query";
// import MyAppointment from "../pages/DashBoard/MyAppointment/MyAppointment";
// import { HiX } from "react-icons/hi";

const DashboardLayout = () => {
  // const { user } = useContext(authContext);
  // const { user } = useContext(authContext);
  // console.log(user);
  // const userEmail = user?.email;
  // const { data: userType = [] } = useQuery({
  //   queryKey: ["userType", userEmail],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `http://localhost:5000/users/adminCheck/${user?.uid}?email=${userEmail}`,
  //       {
  //         headers: {
  //           authorization: `Bearer ${localStorage.getItem("dentalHubToken")}`,
  //         },
  //       }
  //     );
  //     const data = await res.json();
  //     console.log(userType, "admin type");

  //     return data;
  //   },
  // });
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile w-11/12 mx-auto">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* main content */}
          {/* <MyAppointment></MyAppointment> */}
          <Outlet></Outlet>
        </div>

        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content shadow-2xl rounded-2xl  bg-sky-100">
            {/* <!-- Sidebar content here --> */}
            {/* <div className="relative left-80">
              <HiX />
            </div> */}
            <li>
              <Link to="/dashboard/myAppointment">My Appointment</Link>
              <Link to="/dashboard/allUsers">All Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
