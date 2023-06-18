/** @format */

import React from "react";

const Service = ({ data }) => {
  const { icon, name, description } = data;
  return (
    <div
      className={`text-black text-center p-4  flex flex-col justify-center items-center rounded-2xl hover:shadow-2xl placeholder-black hover: hover:mx-[-10px] hover:bg-gradient-to-r from-purple-200 to-indigo-500`}>
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="text-center">
        <h2 className="font-bold">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
