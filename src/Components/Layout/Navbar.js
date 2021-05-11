import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="flex justify-around item-center h-16 bg-white text-block shadow-sm font-sens bg-gradient-to-r from-[#a65fec]-700 to-purple px-4 sm:px-6 lg:px-16 text-white pt-3.5 ">
      <h1 className="font-bold text-center sm-text-right ">
        {title} <i className={`${icon}`} />
      </h1>

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
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
