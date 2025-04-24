import React from "react";

const Header = () => {
  return (
    <>
    <header className="bg-white shadow p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Godrej Horizon</h1>
        <nav className="space-x-4 hidden md:flex">
          <a href="#overview" className="text-gray-700 hover:text-blue-600">Overview</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
          <a href="#amenities" className="text-gray-700 hover:text-blue-600">Amenities</a>
          <a href="#location" className="text-gray-700 hover:text-blue-600">Location</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
