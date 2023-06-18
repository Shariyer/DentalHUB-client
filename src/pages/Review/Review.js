/** @format */

import React, { useContext } from "react";
import useIsApprovalCheck from "../../hooks/useApprovalCheck";
import { authContext } from "../../ContextAPI/ContextAPI";
import Loading from "../Home/Shared/Loading/Loading";
import { toast } from "react-hot-toast";
// import { useQuery } from "@tanstack/react-query";

const Review = () => {
  const { user } = useContext(authContext);
  const [isApprovalCheck, isLoading, refetch] = useIsApprovalCheck(user?.email);
  if (isLoading) {
    return <Loading />;
  }
  //   console.log(isApprovalCheck.isApproval);
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    form.reset();

    const reviewData = {
      name: user?.displayName,
      email: user?.email,
      review: review,
    };
    // console.log(reviewData, "for posting");

    fetch(`http://localhost:5000/users/reviews?email=${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Congratulations !! Successfully Saved your review");
          refetch();
        }
      });
  };

  // const imgURL = form.imgURL.value;

  return (
    <div>
      {isApprovalCheck.isApproval ? (
        <>
          <p className="text-center text-lg mt-4 0 mx-4 rounded-2xl  text-bold py-2 mb-3 ">
            Give your Review
          </p>
          <form
            onSubmit={handleReview}
            className="
          items-center mb-20">
            <div className="form-control mx-10 shadow-xl rounded-lg hover:shadow-sky-800">
              <textarea
                name="review"
                type="text"
                required
                className="textarea textarea-primary shadow-2xl border-none "
                placeholder="Write Your Review"></textarea>
            </div>
            <div className="form-control items-center mt-5 ">
              <input
                className="btn bg-sky-700  text-white border-none"
                type="submit"
                value="Send Review"></input>
            </div>
          </form>
        </>
      ) : (
        <>
          <p className="text-red-500 text-center">
            OOPPSS!! Looks Like You are not approved yet! Wait for your approval
          </p>
        </>
      )}
    </div>
  );
};

export default Review;
