/** @format */

import React from "react";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import fluoride from "../../../assets/images/fluoride.png";
import Service from "./Service/Service";
import treatment from "../../../assets/images/careService.jpg";

const servicesData = [
  {
    id: 1,
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, eaque.",
    icon: fluoride,
  },
  {
    id: 2,
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, eaque.",
    icon: cavity,
  },
  {
    id: 3,
    name: "Teeth whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, eaque.",
    icon: whitening,
  },
];
const Services = () => {
  return (
    <div className="mt-20 lg:mx-5">
      <p className="text-primary text-center">OUR SERVICES</p>
      <h2 className="text-black text-center">Services We Provide</h2>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} data={service}></Service>
        ))}
      </div>
      {/* <div className="hero mt-20">
        <div className="hero-content ">
          <img
            src={treatment}
            className=" rounded-lg shadow-2xl lg:w-1/3"
            alt=""
          />
          <div className="ml-16 lg:w-1/2 ">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
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
      </div> */}
      <div className="mt-10  flex flex-col lg:flex-row justify-between items-center">
        <figure>
          <img
            className="w-full rounded-2xl shadow-2xl"
            src={treatment}
            alt=""
          />
        </figure>
        <div className="lg:ml-10 lg:py-40 sm:p-9">
          <h2 className="font-bold">Exceptional Dental Care, on Your Terms</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className="card-action flex justify-start">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
