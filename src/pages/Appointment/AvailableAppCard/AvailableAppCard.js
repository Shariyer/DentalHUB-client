/** @format */

import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Home/Shared/Loading/Loading";
import AppCard from "./AppCard/AppCard";
import BookingModal from "./BookingModal/BookingModal";

const AvailableAppCard = ({ selectedDate }) => {
  //
  const date = format(selectedDate, "PP");

  // const [appointment, setAppointment] = useState([]);
  const [treatmentName, setTreatmentName] = useState(null);
  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointment(data))
  //     .catch((err) => console.log(err));
  // }, []);
  // amra useQuery diye data fetch korbo tai useState ba useEffect lgbe na and amra data catch korte parbo bar bar fetch na kore cash data theke data dekhaite parbo

  // way to do it with only fetch and promise

  // const { data: appointmentOptions = [] } = useQuery({
  //   queryKey: ["appointmentOptions"],
  //   queryFn: () =>
  //     fetch("http://localhost:5000/appointmentOptions").then((res) =>
  //       res.json()
  //     ),
  // });
  // another way to do it with async function
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointment", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-primary text-center my-10">
        Available Appointment on this: {format(selectedDate, "PP")} Date are:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {appointmentOptions.map((a) => (
          <AppCard
            key={a._id}
            data={a}
            setTreatmentName={setTreatmentName}></AppCard>
        ))}
      </div>
      {/* <BookingModal treatmentName={treatmentName}></BookingModal> */}
      {treatmentName && (
        <BookingModal
          selectedDate={selectedDate}
          treatmentName={treatmentName}
          setTreatmentName={setTreatmentName}
          refetch={refetch}></BookingModal>
      )}
      {/* evabeo kora jy jodi treatmenName useState er value null diye kortam {} empty object er jygy */}
    </div>
  );
};

export default AvailableAppCard;
