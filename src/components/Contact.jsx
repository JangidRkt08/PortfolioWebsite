

import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-auto bg-gradient-to-b from-black to-gray-800 p-6 md:p-14 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8 text-center md:text-left">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-4 md:py-6 text-base md:text-lg">
            Submit the form below to get in touch!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bmdpwyqa"
            method="POST"
            className="flex flex-col w-full md:w-4/5 lg:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-3 mb-4 bg-transparent border-2 border-gray-400 rounded-md text-white focus:outline-none focus:border-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 mb-4 bg-transparent border-2 border-gray-400 rounded-md text-white focus:outline-none focus:border-cyan-500"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              className="p-3 bg-transparent border-2 border-gray-400 rounded-md text-white focus:outline-none focus:border-cyan-500"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
        <p className="text-center text-base md:text-sm text-gray-400 mt-6">
          Made with <span className="text-red-500">&hearts;</span> by Ravikant
        </p>
        {/* Optional: Uncomment if needed */}
        {/* <p className="text-center text-sm text-white">
          <span className="text-white">&copy;</span> 2024 All rights reserved
        </p> */}
      </div>
    </div>
  );
};

export default Contact;
