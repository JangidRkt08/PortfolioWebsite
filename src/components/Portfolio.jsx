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
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen md:pt-96 pb-40 md:mb-0 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
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
