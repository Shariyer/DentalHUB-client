/** @format */

import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/doctorAppointment.jpg";

const HomeAppointment = () => {
  return (
    <section
      className="mt-20 mb-40"
      style={{ background: `url(${appointment})` }}>
      <div className="hero lg:py-24">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src={doctor}
            className="hidden lg:-m-96   md:block   lg:block lg:w-1/2"
            alt=""
          />
          <div className="lg:ml-80 lg:w-1/2">
            <p className="text-primary">Appointment</p>
            <h1 className="text-4xl font-semibold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn text-white bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAppointment;
