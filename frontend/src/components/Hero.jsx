import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/887494452/photo/abstract-night-cityscape-blue-light-filter-can-use-to-display-or-montage-on-product.jpg?s=2048x2048&w=is&k=20&c=JV-eAeDrZmmZIF4hmNMdBLcC1vtnPcYyZqx2A4uOn58=')",
      }}
    >
      <div className="absolute inset-0 bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Godrej Horizon
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Luxurious 2, 3 & 4 BHK Residences in Dadar
        </p>
        <a
          href="#pricing"
          className="bg-black hover:bg-gray-600 text-white py-3 px-6 rounded-lg transition duration-300"
        >
          View Pricing Plans
        </a>
      </div>
    </section>
  );
};

export default Hero;
