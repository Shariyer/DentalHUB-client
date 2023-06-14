/** @format */

import React from "react";

const Card = ({ data }) => {
  const { icon, name, description, bgClass } = data;
  return (
    <div className={`text-white card card-side p-4 ${bgClass} shadow-xl`}>
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
