/** @format */

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../../../ContextAPI/ContextAPI";
import Loading from "../../Home/Shared/Loading/Loading";
import { toast } from "react-hot-toast";

const MyAppointment = () => {
  const { user } = useContext(authContext);
  const userEmail = user?.email;
  // console.log(userEmail);
  const {
    data: usersAppointments = [],
    refetch,
    isLoading,
  } = useQuery({
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
  if (isLoading) {
    return <Loading></Loading>;
  }
  // for deletion of appointments
  const handleDeleteAppointments = (id) => {
    const agree = window.confirm("Sure? You Want to CANCEL The APPOINTMENT??");
    if (agree)
      fetch(`http://localhost:5000/users/deleteUserAppointment/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            refetch();
            toast.success("Successfully Deleted !!!!");
            // console.log(data.acknowledged);
          }
        });
  };
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
              <th>OPERATION</th>
            </tr>
            {usersAppointments.map((usrApp, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{usrApp.patientName}</td>
                <td>{usrApp.treatmentName}</td>
                <td>{usrApp.appointmentDate}</td>
                <td>{usrApp.slot}</td>
                <td>
                  <button
                    onClick={() => handleDeleteAppointments(usrApp._id)}
                    className="btn bg-red-600 text-white">
                    cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyAppointment;
