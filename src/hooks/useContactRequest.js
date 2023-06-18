/** @format */

import { useQuery } from "@tanstack/react-query";

const useContactRequest = (email) => {
  const {
    data: contactRequest,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/users/contactRequest?email=${email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("dentalHubToken")}`,
            },
          }
        );
        const data = await res.json();
        // console.log(data, "from use contactRequest hooks");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return [contactRequest, isLoading, refetch];
};

export default useContactRequest;
