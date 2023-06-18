/** @format */

import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../../ContextAPI/ContextAPI";

const MyAppointment = () => {
  const { user } = useContext(authContext);
  const userEmail = user?.email;
  console.log(userEmail);
  const { data: usersAppointments = [] } = useQuery({
    queryKey: ["usersAppointment", userEmail],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/usersAppointments?email=${userEmail}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("dentalHubToken")}`,
          },
        }
      );
      const data = await res.json();
      // console.log(data);

      return data;
    },
  });
  //   const { data: usersAppointments } = useQuery({
  //     queryKey: ["userAppointments"],
  //     queryFn: () => {
  //       fetch(`http://localhost:5000/usersAppointments?email=${userEmail}`).then(
  //         (res) => res.json()
  //       );
  //     },
  //   });
  // console.log(usersAppointments);
  return (
    <div className="overflow-x-auto">
      {usersAppointments?.length === 0 ? (
        <div className="text-center mt-8 p-5">
          <h3 className="text-3xl text-red-700 font-bold">
            No Appointments yet!!!
          </h3>
        </div>
      ) : (
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead></thead>
          <tbody>
            <tr className="text-secondary">
              <th>Index</th>
              <th>NAME</th>
              <th>SERVICE NAME</th>
              <th>DATE</th>
              <th>TIME SLOT</th>
            </tr>
            {usersAppointments.map((usrApp, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{usrApp.patientName}</td>
                <td>{usrApp.treatmentName}</td>
                <td>{usrApp.appointmentDate}</td>
                <td>{usrApp.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyAppointment;
