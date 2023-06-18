/** @format */

import { Link, Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Shared/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../ContextAPI/ContextAPI";

const DashboardLayout = () => {
  const [adminCheck, setAdminCheck] = useState(false);
  const { user } = useContext(authContext);
  // console.log(user);
  const userEmail = user?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/users/adminCheck?email=${userEmail}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("dentalHubToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.isAdmin) {
          setAdminCheck(true);
        } else {
          setAdminCheck(false);
        }
      });
  }, [userEmail]);

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
          <ul className="menu p-4 w-64  text-base-content shadow-2xl bg-white  rounded-r border-r">
            {/* <!-- Sidebar content here --> */}
            {/* <div className="relative left-80">
              <HiX />
            </div> */}
            <li>
              <Link to="/dashboard/myAppointment">My Appointment</Link>
              {adminCheck && <Link to="/dashboard/allUsers">All Users</Link>}
              {adminCheck && (
                <Link to="/dashboard/contactRequest">All Contact Request</Link>
              )}
            </li>

            <li>
              <Link to="/dashboard/myReviews">My Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
