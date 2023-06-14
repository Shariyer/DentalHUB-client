/** @format */

// import { useEffect, useState } from "react";

// const useToken = (email) => {
//   console.log("inside usetoken", email);
//   const [token, setToken] = useState("");
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

const useUserType = (email) => {
  console.log(email, "inside YTpe");
  const {
    data: userType,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userType"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/users/admin/${email}`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("dentalHubToken")}`,
          },
        });
        const data = await res.json();
        console.log(data, "from User type");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return [userType, isLoading, refetch];
};

export default useUserType;
