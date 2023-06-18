/** @format */

import { useEffect, useState } from "react";

const useToken = (email) => {
  // console.log("inside usetoken", email);
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            // console.log(data.accessToken);
            localStorage.setItem("dentalHubToken", data.accessToken);
            setToken(data.accessToken);
            //  navigate("/");
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
