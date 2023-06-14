/** @format */

import React from "react";

const PersonCard = ({ data }) => {
  const { img, des, location, name } = data;
  return (
    <div className="card shadow-2xl p-8 bg-transparent hover:mx-[-10px] hover:bg-indigo-200">
      <div className="card-body">
        <p>{des}</p>
        <div className="flex justify-start items-center mt-5">
          <div className="avatar mr-5">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="w-14 border-primary" src={img} alt="" />
            </div>
          </div>

          <div>
            <h2 className="card-title p-0 m-0">{name}</h2>
            <p className="p-0 m-0">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
