import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../assets/img/logo.webp";

const Navbar = () => {
  return (
    <div className="bg-slate-50  py-3 sticky top-0 z-50  backdrop-blur-lg">
      <div className="navbar  align-items">
        <div className=" navbar-start">
          <NavLink
          to="/"
          >
          <img
            src={logo}
            alt="logo"
            className="w-12"
          />
        </NavLink>
        </div>
        <ul className=" hidden navbar-end md:flex gap-5 font-semibold text-xl active:text-gray-950  ">
          <li className="text-gray-400 hover:text-gray-800 transition-all">
            <NavLink to="/">Portfolio</NavLink>
          </li>
          <li className="text-gray-400 hover:text-gray-800 transition-all">
            <NavLink to="/team">Team</NavLink>
          </li>
          <li className="text-gray-400 hover:text-gray-800 transition-all">
            <NavLink to="/info">Info</NavLink>
          </li>
        </ul>
        <span className="navbar-end md:hidden">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li className="text-gray-400 hover:text-gray-800 transition-all">
                <NavLink to="/">Portfolio</NavLink>
              </li>
              <li className="text-gray-400 hover:text-gray-800 transition-all">
                <NavLink to="/team">Team</NavLink>
              </li>
              <li className="text-gray-400 hover:text-gray-800 transition-all">
                <NavLink to="/info">Info</NavLink>
              </li>
            </ul>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
