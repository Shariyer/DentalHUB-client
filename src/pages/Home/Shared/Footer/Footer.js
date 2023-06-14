/** @format */

import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../../../../assets/images/footer.png";
import footerLogo from "../../../../assets/icons/DentalLogo.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="footer p-10">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
        <div>
          <img
            src={footerLogo}
            className=" rounded-lg shadow-2xl w-1/2 lg:w-full"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-center py-5">Copy Right Reserve © 2023</h1>
    </footer>
  );
};

export default Footer;
