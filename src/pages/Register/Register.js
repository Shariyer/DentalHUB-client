/** @format */

import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../ContextAPI/ContextAPI";
import useToken from "../../hooks/useToken";

// const notifyUserCreated = () => {
//   toast.success("user Created Successfully");
// };

const Register = () => {
  const { CreatingUserWithEP, UpdateUserProfile } = useContext(authContext);

  const [userTokenEmail, setUserTokenEmail] = useState("");
  // console.log("Got" + userTokenEmail);
  const [token] = useToken(userTokenEmail);
  // console.log("useHook token value", token);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  if (token) {
    // console.log("token:", token);
    navigate(from, { replace: true });
  }
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    // const imgURL = form.imgURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);
    // profile info
    const ProfileInfo = {
      displayName: name,
    };

    CreatingUserWithEP(email, password)
      .then((result) => {
        const user = result.user;
        // notifyUserCreated();

        toast.success("User Created Successfully");
        console.log("User Created With EP and User is:", user);
        UpdateUserProfile(ProfileInfo)
          .then(() => {
            userInfoToDb(name, email);
          })
          .catch((err) => console.log(err));
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  //sending data to database user collection
  const userInfoToDb = (name, email) => {
    const user = {
      name,
      email,
      approval: "notApproved",
      role: "userPatient",
    };
    console.log(user, "whenn REgistering");
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setUserTokenEmail(email);
        }
      });
  };
  // function for getting token
  // const getJwtToken = (email) => {
  //   fetch(`http://localhost:5000/jwt?email=${email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.accessToken) {
  //         console.log(data.accessToken);
  //         localStorage.setItem("dentalHubToken", data.accessToken);
  //         navigate("/");
  //       }
  //     });
  // };
  return (
    <div className="hero">
      <div className="hero-content ">
        <div className="card   shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Type your name"
                className="input input-bordered"
              />
            </div>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Image Link</span>
              </label>
              <input
                name="imgURL"
                type="text"
                placeholder="Give your img URL"
                className="input input-bordered"
              />
            </div> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Type your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Type your password"
                className="input input-bordered"
              />
            </div>
            <p className="mt-3">
              Already Have an Account???{" "}
              <Link className="link-hover text-secondary" to="/login">
                Login Now
              </Link>
            </p>
            <div className="form-control mt-6">
              <input className="btn" type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
