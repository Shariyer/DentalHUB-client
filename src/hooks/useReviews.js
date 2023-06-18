/** @format */

import { useQuery } from "@tanstack/react-query";

const useReviews = (email) => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/users/myreviews?email=${email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("dentalHubToken")}`,
            },
          }
        );
        const data = await res.json();
        // console.log(data, "from use Review hooks");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return [reviews, isLoading, refetch];
};

export default useReviews;
