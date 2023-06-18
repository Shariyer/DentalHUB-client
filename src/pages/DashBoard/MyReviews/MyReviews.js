/** @format */

import React, { useContext } from "react";
import useReviews from "../../../hooks/useReviews";
import { authContext } from "../../../ContextAPI/ContextAPI";
import Loading from "../../Home/Shared/Loading/Loading";
import { toast } from "react-hot-toast";

const MyReviews = () => {
  const { user } = useContext(authContext);
  const [reviews, isLoading, refetch] = useReviews(user?.email);
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(reviews);
  const handleDeleteReview = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
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
    <div className=" ml-5 mt-4 p-3">
      {reviews ? (
        <>
          {reviews.map((r) => (
            <div
              key={r._id}
              className="flex items-center justify-between mb-3 hover:border-l-2 hover:border-blue-700 p-3 rounded-md hover:shadow hover:bg-gradient-to-r from-purple-200 to-indigo-500 ">
              <p className="  overflow-auto">{r.review}</p>
              <button
                onClick={() => handleDeleteReview(r._id)}
                className="btn bg-red-600 text-white">
                Delete
              </button>
            </div>
          ))}
        </>
      ) : (
        <>
          <p className="text-red-400 text-xl">Oppss!!! No reviews yet!!</p>
        </>
      )}
      {reviews.length === 0 && (
        <p className="text-red-400 text-xl text-center"> No reviews yet!!</p>
      )}
    </div>
  );
};

export default MyReviews;
