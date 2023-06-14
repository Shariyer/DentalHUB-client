/** @format */

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../../ContextAPI/ContextAPI";

const Navbar = () => {
  // const [closeButton, setCloseButton] = useState(false);
  const { user, LogOut } = useContext(authContext);
  const handleLogOut = () => {
    LogOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  // const handleDrawerClose = () => {
  //   setCloseButton(!closeButton);
  // };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/contactUS">Contact</Link>

        {/* <Link to="/dashboard">Dashboard</Link> */}
        <Link className="hidden  lg:block" to="/dashboard">
          Dashboard
        </Link>

        <label
          className="sm:block lg:hidden"
          htmlFor="dashboard-drawer"
          tabIndex={2}>
          Dashboard
        </label>
        {user?.uid ? (
          <>
            <Link to="/review">Review</Link>

            <button
              className="btn btn-outline text-primary rounded-2xl"
              onClick={handleLogOut}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Sign Up</Link>

            <Link to="/login">Login</Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start lg:border md:border rounded-sm border-sky-500 lg:bg-gradient-to-r from-purple-200 to-indigo-500 px-2">
        <div className="dropdown">
          <label tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <img
          src="favicon.ico"
          className="hidden lg:block md:block w-11"
          alt=""
        />
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Dental Hub
        </Link>
      </div>
      <div className="navbar-right hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
