import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="flex justify-around item-center h-16 bg-white text-block shadow-sm font-sens bg-gradient-to-r from-[#a65fec]-700 to-purple px-4 sm:px-6 lg:px-16 text-white pt-3.5  ">
      <h1 className="font-bold ">
        {title} <i className={`${icon}`} />
      </h1>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block mt-1 text-xl font-bold text-gray-100   ">
        <Link
          className="p-4 hover:bg-purple-100 hover:bg-opacity-25 hover:round"
          to="/"
        >
          Home
        </Link>
        <Link
          className="p-4 hover:bg-purple-100 hover:bg-opacity-25 "
          to="/about"
        >
          About
        </Link>
        <Link
          className="p-4 hover:bg-purple-100 hover:bg-opacity-25"
          to="/contact"
        >
          CountactUs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
