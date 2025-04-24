import React from "react";

const Amenities = () => {
  return (
    <section id="amenities" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Amenities</h2>

        {/* Amenities Row: Displaying the 3 amenities side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Swimming Pool */}
          <div className="relative flex flex-col items-center">
            <h3 className="text-xl font-semibold text-center mb-4">Swimming Pool</h3> {/* Moved outside the image */}
            <img
              src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3dpbW1pbmclMjBwb29sfGVufDB8fDB8fHww"
              alt="Swimming Pool"
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-white z-10">
              Relax and unwind with a beautiful swimming pool
            </div>
          </div>

          {/* Gym */}
          <div className="relative flex flex-col items-center">
            <h3 className="text-xl font-semibold text-center mb-4">Gym</h3> {/* Moved outside the image */}
            <img
              src="https://images.unsplash.com/photo-1623874514711-0f321325f318?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Gym"
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-white z-10">
              State-of-the-art fitness center
            </div>
          </div>

          {/* Park */}
          <div className="relative flex flex-col items-center">
            <h3 className="text-xl font-semibold text-center mb-4">Park</h3> {/* Moved outside the image */}
            <img
              src="https://images.unsplash.com/photo-1582654344606-2b9d8f65162b?w=600&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxheSUyMHBhcmt8ZW58MHx8MHx8fDA%3D"
              alt="Park"
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-white z-10">
              Beautiful landscaped park for relaxation
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Amenities;
