/** @format */

import React, { useContext } from "react";
import useContactRequest from "../../../hooks/useContactRequest";
import Loading from "../../Home/Shared/Loading/Loading";
import { authContext } from "../../../ContextAPI/ContextAPI";
import { toast } from "react-hot-toast";

const ContactRequest = () => {
  const { user } = useContext(authContext);
  const [contactRequest, isLoading, refetch] = useContactRequest(user?.email);
  if (isLoading) {
    return <Loading></Loading>;
  }
  // console.log(reviews);
  const handleDeleteContactRequest = (id) => {
    fetch(`http://localhost:5000/users/contactRequest/${id}`, {
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
  return (
    <div className=" ml-5 mt-4 p-3 ">
      {contactRequest ? (
        <>
          {contactRequest.map((conReq) => (
            <div
              key={conReq._id}
              className=" 
               mb-3 
              hover:border-l-2 hover:border-blue-700 p-3 rounded-md 
              hover:shadow bg-gradient-to-r from-purple-200 to-indigo-500 h-auto ">
              <div className="mb-1">
                <h1 className="card-title">
                  Subject : {conReq.reqContactSubject}
                </h1>
                <p className=" text-green-600">{conReq.reqContactEmail}</p>
                <p className="card-body overflow-auto">
                  {conReq.reqContactMassage}
                </p>
              </div>
              <div>
                <button
                  onClick={() => handleDeleteContactRequest(conReq._id)}
                  className=" btn bg-red-600  text-white">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <p className="text-red-400 text-xl">
            Oppss!!! No contact request yet!!
          </p>
        </>
      )}
      {contactRequest.length === 0 && (
        <p className="text-red-400 text-xl text-center">
          {" "}
          No contact request yet!!
        </p>
      )}
    </div>
  );
};

export default ContactRequest;
