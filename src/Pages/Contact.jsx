import React from "react";
import "../css/Contact.css"
const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          Have questions or want to start a project with us? Reach out and let’s
          create something amazing together.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
