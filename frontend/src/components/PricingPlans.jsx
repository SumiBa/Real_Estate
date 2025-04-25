import React, { useEffect, useState } from "react";

const PricingPlans = () => {
  const [properties, setProperties] = useState([]);
  const [showFormIndex, setShowFormIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://65.2.130.99/get_properties.php")
      .then((response) => response.json()) 
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  const handleSubmit = async (e, propertyId) => {
    e.preventDefault();
    setLoading(true); 

    const payload = {
      ...formData,
      property_id: propertyId,
    };

    try {
      const response = await fetch("http://65.2.130.99/submit_enquiry.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      alert(result.message || "Enquiry submitted!");

      // Resetting form and hide loading
      setFormData({ name: "", email: "", message: "" });
      setShowFormIndex(null);
      setLoading(false);  // Hiding loading state
    } catch (error) {
      console.error("Submission failed:", error);
      setLoading(false);  // Hiding loading state if error occurs
    }
  };

  return (
    <section id="pricing" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {property.title}
              </h3>
              <img
                src={property.image_url || "https://via.placeholder.com/600"}
                alt={property.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-4">
                Starting from ₹{(property.price / 10000000).toFixed(2)} Cr*
              </p>
              <ul className="text-left text-gray-600 mb-4">
                {property.features.split(",").map((feature, i) => (
                  <li key={i}>{feature.trim()}</li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800 mt-2"
                  onClick={() =>
                    setShowFormIndex(showFormIndex === index ? null : index)
                  }
                >
                  Enquire Now
                </button>

                {showFormIndex === index && (
                  <form
                    className="mt-4 text-left"
                    onSubmit={(e) => handleSubmit(e, property.id)}
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full border p-2 mb-2 rounded"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="w-full border p-2 mb-2 rounded"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    <textarea
                      placeholder="Message"
                      required
                      className="w-full border p-2 mb-2 rounded"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 active:scale-95 transition-transform duration-100"
                    >
                      {loading ? "Submitting..." : "Submit Enquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
