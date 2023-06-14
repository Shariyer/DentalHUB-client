/** @format */

import React from "react";
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import Card from "./Card/Card";

const cardsData = [
  {
    id: 1,
    name: "Open Hours",
    description: "Open every 9.00 to 5.00",
    icon: clock,
    bgClass: "bg-primary",
  },
  {
    id: 2,
    name: "Our Location",
    description: "Brooklyn, NY 10036, United States",
    icon: marker,
    bgClass: "bg-accent",
  },
  {
    id: 3,
    name: "Contact US",
    description: "+000 123 456789",
    icon: phone,
    bgClass: "bg-secondary",
  },
];
const CardInfo = () => {
  return (
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-24">
      {cardsData.map((card) => (
        <Card key={card.id} data={card}></Card>
      ))}
    </div>
  );
};

export default CardInfo;
