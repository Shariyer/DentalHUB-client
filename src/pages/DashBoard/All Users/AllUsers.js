/** @format */

import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "../../Home/Shared/Loading/Loading";
import { authContext } from "../../../ContextAPI/ContextAPI";

const AllUsers = () => {
  const { user } = useContext(authContext);
  // console.log(user);
  const [approvalData, setApprovalData] = useState(false);
  const [userAdminApproval, setUserAdminApproval] = useState(false);
  const [approvalButtonAdjustment, setApprovalButtonAdjustment] =
    useState(false);
  const [adminApprovalButtonAdjustment, setAdminApprovalButtonAdjustment] =
    useState(false);

  const {
    data: allUsers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users/userPatients");
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  //***********/ Giving Approval to  User /**********
  const handleApproved = (singleUser) => {
    const agree = window.confirm("Sure ? You Want to give APPROVAL??");
    if (agree) {
      approvalButtonAdjustment
        ? setApprovalData("approved")
        : setApprovalData("notApproved");

      // setApprovalData("approved");
      setApprovalButtonAdjustment(!approvalButtonAdjustment);

      const updateUserApproval = {
        approval: approvalData,
      };
      console.log(updateUserApproval);
      // console.log(singleUser);
      // console.log(updateUserApproval);
      fetch(`http://localhost:5000/users/updateApproval/${singleUser?._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateUserApproval),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            refetch();
            toast.success("Successfully Approved !!!!");
          }
        });
    }
  };
  const handleApprovedAdmin = (singleUser) => {
    const agree = window.confirm("Sure? Want to make the ADMIN??");
    if (agree) {
      adminApprovalButtonAdjustment
        ? setUserAdminApproval("admin")
        : setUserAdminApproval("userPatient");
      // button controlling for making admin
      setAdminApprovalButtonAdjustment(!adminApprovalButtonAdjustment);

      const updateUserAdminApproval = {
        role: userAdminApproval,
      };

      // console.log(singleUser);
      // console.log(updateUserApproval);
      if (updateUserAdminApproval.role === false) {
        // console.log("false asche");
        return;
      } else {
        // console.log("admin or user");
        fetch(`http://localhost:5000/users/adminApproval/${singleUser?._id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateUserAdminApproval),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              toast.success("Successfully Approved !!!!");
            }
          });
      }
    }
  };

  //***********/ Deleting User /**********
  const handleDelete = (singleuser) => {
    const agree = window.confirm("Sure? Want to DELETE the USER??");
    if (agree) {
      fetch(
        `http://localhost:5000/users/deleteUser/${singleuser?._id}?email=${user?.email}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            refetch();
            toast.success("Successfully Deleted !!!!");
            // console.log(data.acknowledged);
          }
        });
    }
  };

  return (
    <div className="overflow-x-auto">
      {allUsers?.length === 0 ? (
        <div className="text-center mt-8 p-5">
          <h3 className="text-3xl text-red-800 font-bold">No user yet!!!</h3>
        </div>
      ) : (
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead></thead>
          <tbody>
            <tr className="text-secondary">
              <th>Index</th>
              <th>NAME</th>
              <th>USer Email</th>
              <th> Give Approval</th>
              <th>Operation</th>
            </tr>
            {allUsers.map((singleUser, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{singleUser.name}</td>
                <td>{singleUser.email}</td>
                <td>
                  {singleUser.approval === "notApproved" ? (
                    <button
                      onClick={() => {
                        handleApproved(singleUser);
                        // console.log(singleUser);
                      }}
                      className="btn btn-outline bg-red-500 text-white">
                      not Approved
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        handleApproved(singleUser);
                        // console.log(singleUser);
                      }}
                      className="btn btn-outline btn-primary text-white">
                      Approved
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(singleUser)}
                    className="btn btn-outline text-white bg-red-500">
                    Delete
                  </button>

                  <button
                    onClick={() => {
                      handleApprovedAdmin(singleUser);
                      // console.log(singleUser);
                    }}
                    className="btn btn-outline bg-yellow-500 text-white">
                    make admin
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

export default AllUsers;
