/** @format */

import React, { useContext } from "react";
import { authContext } from "../../../ContextAPI/ContextAPI";
import { toast } from "react-hot-toast";
// import bg from "../../../assets/images/ContactBg.jpg";

const ContactUs = () => {
  const { user } = useContext(authContext);
  const handleContactUs = (event) => {
    event.preventDefault();
    const form = event.target;

    const reqContactEmail = form.reqContactEmail.value;
    const reqContactSubject = form.reqContactSubject.value;
    const reqContactMassage = form.reqContactMassage.value;

    const contactRequestData = {
      email: user?.email,
      reqContactEmail,
      reqContactSubject,
      reqContactMassage,
    };

    form.reset();
    fetch(`http://localhost:5000/users/contactRequest?email=${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contactRequestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Congratulations !! Successfully Saved your Request");
        }
      });
  };
  return (
    <div
      // style={{ background: `url(${bg})` }}
      className="py-20 rounded-2xl mt-10 bg-white">
      <div className="mb-5">
        <p className="text-primary font-bold text-center">Contact Us</p>
        <h3 className="text-xl text-white text-center">
          Stay Connected with us
        </h3>
      </div>
      <form
        onSubmit={handleContactUs}
        className="lg:w-1/2 lg:mx-auto sm:w-11/12 mx-5">
        <div className="form-control">
          <input
            type="email"
            required
            name="reqContactEmail"
            placeholder="Email Address"
            className="input input-bordered mb-3 bg-transparent hover:shadow-2xl placeholder-black  hover:mx-[-10px] hover:bg-gradient-to-r from-purple-200 to-indigo-500 
            "
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            required
            name="reqContactSubject"
            placeholder="Subject"
            className="input input-bordered mb-3 bg-transparent hover:shadow-2xl placeholder-black  hover:mx-[-10px] hover:bg-gradient-to-r from-purple-200 to-indigo-500"
          />
        </div>
        <div className="form-control text-black">
          <input
            type="text"
            required
            name="reqContactMassage"
            placeholder="Your message"
            className="input input-bordered input-lg mb-3 h-32 bg-transparent hover:shadow-2xl placeholder-black  hover:mx-[-10px] hover:bg-gradient-to-r from-purple-200 to-indigo-500"
          />
        </div>
        <div className="flex justify-center items-center mt-6 font-bold text-white">
          {/* <button
            type="submit"
            value="Login"
            className="btn bg-gradient-to-r from-secondary to-primary ">
            Submit
          </button> */}
          <div className="form-control mt-6">
            <input
              className="btn bg-gradient-to-r text-black from-purple-200 to-indigo-500"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
