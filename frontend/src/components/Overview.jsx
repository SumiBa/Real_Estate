import React from "react";

const Overview = () => {
  return (
    <section className="py-8 bg-white" id="overview">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern Residential Building"
            className="rounded-lg shadow-lg mt-16"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Godrej Horizon offers premium 2 & 3 BHK residences in Wadala, Mumbai. Experience serene views of the Eastern Bay and city skyline, complemented by luxurious amenities and seamless connectivity.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Spacious apartments with modern design</li>
            <li>5-storeyed clubhouse with exclusive amenities</li>
            <li>Proximity to Five Gardens and Dadar-TT circle</li>
            <li>Excellent connectivity to major hubs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Overview;
