/** @format */

import React from "react";
import person1 from "../../../assets/images/people1.png";
import person2 from "../../../assets/images/people2.png";
import person3 from "../../../assets/images/people3.png";
import quotation from "../../../assets/icons/quote.svg";
import PersonCard from "./PersonCard/PersonCard";

const testimonialData = [
  {
    id: 1,
    name: "Wins Herry",
    des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
    img: person1,
    location: "california",
  },
  {
    id: 2,
    name: "kim Henry",
    des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
    img: person2,
    location: "texas",
  },
  {
    id: 3,
    name: "Kane mile",
    des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
    img: person3,
    location: "florida",
  },
];

const Testimonial = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-primary text-3xl">Testimonial</p>
          <h3 className="text-2xl">What Our Patients Says</h3>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quotation} alt="" />
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mx-auto ">
        {testimonialData.map((person) => (
          <PersonCard key={person.id} data={person}></PersonCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
