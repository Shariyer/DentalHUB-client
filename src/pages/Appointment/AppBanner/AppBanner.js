/** @format */

import bgChairImg from "../../../assets/images/bg.png";
import ChairImg from "../../../assets/images/bg.jpg";
import { DayPicker } from "react-day-picker";

const AppBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgChairImg})`,
        backgroundPosition: "top",
      }}
      className="py-20 bg-contain ">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse sm:flex-col sm:w-screen sm:mx-auto ">
          <img
            src={ChairImg}
            className=" rounded-lg shadow-2xl lg:w-1/2"
            alt=""
          />
          <div className="lg:w-1/2">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
      {/* <CardInfo></CardInfo> */}
    </div>
  );
};

export default AppBanner;
