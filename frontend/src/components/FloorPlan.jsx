import React from "react";

const FloorPlan = () => {
  return (
    <section id="floorplans" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Floor Plans</h2>

        {/* Floor Plan Row: Displaying the 3 floor plans side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Floor Plan 1: 2 BHK - 1200 sq ft */}
          <div className="relative flex flex-col items-center">
            <h3 className="text-xl font-semibold text-center mb-4">Floor Plan 1</h3> {/* Moved outside the image */}
            <img
              src="https://images.unsplash.com/photo-1673098224986-993e9913891e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkcm9vbXMlMkMlMjBiYXRocm9vbXMlMkMlMjBsaXZpbmclMjByb29tJTJDJTIwa2l0Y2hlbiUyQyUyMGV0Yy58ZW58MHx8MHx8fDA%3D"
              alt="2 BHK Floor Plan"
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white z-10">
              2 BHK - 1200 sq ft {/* Reduced the font size */}
            </div>
          </div>

          {/* Floor Plan 2: 3 BHK - 1800 sq ft */}
          <div className="relative flex flex-col items-center">
            <h3 className="text-xl font-semibold text-center mb-4">Floor Plan 2</h3> {/* Moved outside the image */}
            <img
              src="https://images.unsplash.com/photo-1663408485007-fd973f9e2660?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluaW5nJTIwYXJlYSUyQyUyMG1vcmUlMjBzcGFjaW91cyUyMHJvb21zJTJDJTIwYW5kJTIwbWF5YmUlMjBhbiUyMGV4dHJhJTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D"
              alt="3 BHK Floor Plan"
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white z-10">
              3 BHK - 1800 sq ft {/* Reduced the font size */}
            </div>
          </div>

          {/* Floor Plan 3: 4 BHK - 2400 sq ft */}
          <div className="relative flex flex-col items-center">
            <h3 className="text-xl font-semibold text-center mb-4">Floor Plan 3</h3> {/* Moved outside the image */}
            <img
              src="https://images.unsplash.com/photo-1643267514395-b36b3f7e8281?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcmdlciUyMGxpdmluZyUyMHNwYWNlcyUyQ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="4 BHK Floor Plan"
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white z-10">
              4 BHK - 2400 sq ft {/* Reduced the font size */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FloorPlan;
