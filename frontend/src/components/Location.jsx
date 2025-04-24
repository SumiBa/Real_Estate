import React from "react";

const Location = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-4 py-8 bg-white rounded-xl shadow-md">
      {/* Map Section */}
      <div className="w-full md:w-2/3 h-80 md:h-96 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
          title="Google Maps Location"
        ></iframe>
      </div>

      {/* Location Details Section */}
      <div className="w-full md:w-1/3 flex flex-col justify-center text-gray-700 text-[15px] space-y-2">
        <h4 className="text-xl font-semibold text-blue-700 mb-2">Location Details</h4>
        <p>📍 <span className="font-medium">Godrej Horizon, Wadala, Mumbai</span></p>
        <p>🧭 Landmark: Near Wadala Station</p>
        <p>🚉 Wadala Station – 5 mins</p>
        <p>🛍️ Shopping Mall – 10 mins</p>
        <p>🏫 School – 15 mins</p>
      </div>
    </div>
  );
};

export default Location;
