/** @format */

import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { authContext } from "../../../../ContextAPI/ContextAPI";

const BookingModal = ({
  treatmentName,
  setTreatmentName,
  selectedDate,
  refetch,
}) => {
  const { user } = useContext(authContext);
  const { name, slots } = treatmentName;
  const date = format(selectedDate, "PP");

  const handleModalForm = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const slot = form.slot.value;
    console.log(name, phone, email, slot);
    const booking = {
      appointmentDate: date,
      treatmentName: name,
      slot,
      patientName: user?.displayName,
      email,
      phone,
    };
    // console.log(booking);
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Congratulations!!! Booking Confirmed");
          refetch();
          setTreatmentName(null);
        } else {
          toast.error(data.message);
          setTreatmentName(null);
        }
      })
      .catch((err) => console.log(err));
    //   ekhan theke data server a send korbo
    // data save kore modal close korbo
    //   display korbo success toast
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">{name}</h3>
          <form onSubmit={handleModalForm} className="py-4">
            <input
              type="text"
              value={date}
              disabled
              placeholder="Type here"
              className="input input-bordered input-accent w-full mb-2"
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              defaultValue={user?.displayName}
              type="text"
              disabled
              placeholder="Type your name here"
              className="input input-bordered input-accent w-full mb-2"
            />
            <input
              name="phone"
              type="number"
              placeholder="Type your phone number"
              className="input input-bordered input-accent w-full mb-2"
              required
            />
            <input
              name="email"
              disabled
              defaultValue={user?.email}
              type="email"
              placeholder="Type your email address"
              className="input input-bordered input-accent w-full mb-2"
            />
            <input className="btn w-full" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
