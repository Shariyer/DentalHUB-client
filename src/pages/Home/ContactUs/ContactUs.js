/** @format */

import React from "react";
import bg from "../../../assets/images/ContactBg.jpg";

const ContactUs = () => {
  const handleContactUs = (event) => {
    event.preventDefault();
    const form = event.target;

    const reqContactEmail = form.reqContactEmail.value;
    const reqContactSubject = form.reqContactSubject.value;
    const reqContactMassage = form.reqContactMassage.value;

    console.log(
      "Contact Us INFO",
      reqContactEmail,
      reqContactSubject,
      reqContactMassage
    );

    form.reset();

    // LoginWithEP(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     console.log("user EP user Logged IN as:", user);
    //     setLoginUserEmail(email);
    //     form.reset();
    //   })
    //   .catch((err) => console.log(err));
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
            name="reqContactEmail"
            placeholder="Email Address"
            className="input input-bordered mb-3 bg-transparent hover:shadow-2xl placeholder-black  hover:mx-[-10px] hover:bg-indigo-200 
            "
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="reqContactSubject"
            placeholder="Subject"
            className="input input-bordered mb-3 bg-transparent hover:shadow-2xl placeholder-black  hover:mx-[-10px] hover:bg-indigo-200"
          />
        </div>
        <div className="form-control text-black">
          <input
            type="text"
            name="reqContactMassage"
            placeholder="Your message"
            className="input input-bordered input-lg mb-3 h-32 bg-transparent hover:shadow-2xl placeholder-black  hover:mx-[-10px] hover:bg-indigo-200"
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
              className="btn bg-gradient-to-r from-secondary to-primary "
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
