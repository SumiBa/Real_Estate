import React from "react";

const highlights = [
  {
    title: "Sky Lounge",
    description: "Experience panoramic views of the city skyline.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Infinity Pool",
    description: "Relax in our luxurious infinity pool.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Modern Gym",
    description: "Stay fit with state-of-the-art equipment.",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80",
  },
];

const ProjectHighlights = () => {
  return (
    <section className="py-12 bg-gray-100" id="highlights">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Project Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
