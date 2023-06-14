/** @format */

import React, { useState } from "react";
import AppBanner from "./AppBanner/AppBanner";
import AvailableAppCard from "./AvailableAppCard/AvailableAppCard";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppBanner>
      <AvailableAppCard selectedDate={selectedDate}></AvailableAppCard>
    </div>
  );
};

export default Appointment;
