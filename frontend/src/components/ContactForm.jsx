import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); 

  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {
            const response = await fetch("http://localhost/backend/contact.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData).toString(), // Sending form data as URL encoded string
            });

            const result = await response.json();
            console.log("Server Response:", result); 

            if (response.ok && result.status === "success") {
                
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" }); 
                setErrorMessage("");
                setTimeout(() => setSubmitted(false), 3000); 
            } else {
             
                setErrorMessage(result.message || "Failed to submit the form");
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            setErrorMessage("An error occurred while submitting the form.");
        }

        setLoading(false);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Name"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Email"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Message"
                    />
                </div>

  
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 focus:outline-none"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit"} 
                </button>
            </form>

            {submitted && (
                <p className="mt-4 text-green-600 text-sm text-center font-medium">
                    Message sent successfully!
                </p>
            )}

            {errorMessage && (
                <p className="mt-4 text-red-600 text-sm text-center font-medium">
                    {errorMessage}
                </p>
            )}
        </div>
    );
};

export default ContactForm;
