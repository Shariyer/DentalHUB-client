/** @format */

import React from "react";

const AppCard = ({ data, setTreatmentName }) => {
  const { _id, name, slots } = data;
  return (
    <div className="card shadow-xl text-center">
      <div className="card-body">
        <h2 className="text-xl text-center font-bold ">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "space" : "spaces"} Available
        </p>
        <div className="card-actions justify-center">
          {/* <Link to={`/appointment/${_id}`}>
            <button className="btn text-white hover:text-black  hover:font-bold bg-gradient-to-r from-secondary to-primary"></button>
          </Link> */}
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatmentName(data)}
            htmlFor="booking-modal"
            className="btn text-white hover:text-black  hover:font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
