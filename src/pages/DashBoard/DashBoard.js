/** @format */

// import { useContext } from "react";
// import AllUsers from "./All Users/AllUsers";
// import MyAppointment from "./MyAppointment/MyAppointment";
// import { authContext } from "../../ContextAPI/ContextAPI";
// import { useQuery } from "@tanstack/react-query";
// import { Outlet } from "react-router-dom";

const DashBoard = () => {
  // const { user } = useContext(authContext);
  // console.log(user);
  // const userEmail = user?.email;
  // const { data: userType = [] } = useQuery({
  //   queryKey: ["userType", userEmail],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `http://localhost:5000/users/admin/${user?.uid}?email=${userEmail}`,
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
      {/* <Outlet></Outlet>
      <div>kjlkjl;kj;lkj;lkj</div> */}
    </div>
  );
};

export default DashBoard;
