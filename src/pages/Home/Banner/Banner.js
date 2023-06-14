/** @format */

import React from "react";
import bannerPhoto from "../../../assets/images/bg.jpg";
import CardInfo from "./CardInfo/CardInfo";

const Banner = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url("/images/bg.png")` }}
        className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse sm:flex-col sm:w-screen sm:mx-auto ">
          <img
            src={bannerPhoto}
            className=" rounded-lg shadow-2xl lg:w-1/2"
            alt=""
          />
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn text-white bg-gradient-to-r from-purple-200 to-indigo-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <CardInfo></CardInfo>
    </div>
  );
};

export default Banner;
