/** @format */

// import { useEffect, useState } from "react";

// const useToken = (email) => {
//   console.log("inside usetoken", email);
//   const [isApproved, setIsApproved] = useState(false);
//   useEffect(() => {
//     if (email) {
//       fetch(`http://localhost:5000/jwt?email=${email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.accessToken) {
//             // console.log(data.accessToken);
//             localStorage.setItem("dentalHubToken", data.accessToken);
//             setToken(data.accessToken);
//             //  navigate("/");
//           }
//         });
//     }
//   }, [email]);
//   return [token];
// };

// export default useToken;

import { useQuery } from "@tanstack/react-query";

const useIsApprovalCheck = (email) => {
  const {
    data: isApprovalCheck,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["isApprovalCheck"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/users/approvalCheck?email=${email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("dentalHubToken")}`,
            },
          }
        );
        const data = await res.json();
        // console.log(data, "from User type");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return [isApprovalCheck, isLoading, refetch];
};

export default useIsApprovalCheck;
