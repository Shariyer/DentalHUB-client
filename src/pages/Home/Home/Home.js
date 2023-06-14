/** @format */

import React from "react";
// import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
// import Contact from "../Contact/Contact";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
// import Review from "../Review/Review";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <Services />
      <HomeAppointment />
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>

      {/* <About />
      <Contact />
      <Review /> */}
    </div>
  );
};

export default Home;
