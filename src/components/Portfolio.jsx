

import React from "react";
import Portfolio1 from "../assets/PortfolioImg/portfolio1.png";
import HospitalManagement from "../assets/PortfolioImg/HospitalManagement.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Portfolio1,
      demoLink: "https://github.com/",
      codeLink: "https://github.com/jangidRkt08",
    },
    {
      id: 2,
      src: HospitalManagement,
      demoLink: "https://madicareuser.netlify.app/",
      codeLink: "https://github.com/JangidRkt08/MEDICARE_DEPLOYED",
    },
    {
      id: 3,
      src: HospitalManagement,
      demoLink: "https://madicareuser.netlify.app/",
      codeLink: "https://github.com/JangidRkt08/MEDICARE_DEPLOYED",
    },
    {
      id: 4,
      src: HospitalManagement,
      demoLink: "https://github.com/",
      codeLink: "https://github.com/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-24 pb-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-lg md:text-xl">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt={`Portfolio item ${id}`}
                className="w-full h-48 object-cover rounded-t-lg duration-200 hover:scale-105"
              />
              <div className="flex flex-col md:flex-row items-center justify-center p-4">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-2"
                >
                  <button className="w-full px-6 py-3 bg-cyan-500 text-white rounded-lg duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-1/2"
                >
                  <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
