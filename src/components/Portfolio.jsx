

import PortfolioImage from "../assets/PortfolioImg/portfolio1.png"
import ycdirectory from "../assets/PortfolioImg/YC_Directory.png";
import HospitalManagement from "../assets/PortfolioImg/HospitalManagement.png";
import rjInterior from "../assets/PortfolioImg/rjInterior.png";
import Flight from "../assets/PortfolioImg/Flight.png";
import passwordManager from "../assets/PortfolioImg/passwordManager.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ycdirectory,
      demoLink: "https://y-com-directory.vercel.app/",
      codeLink: "https://github.com/JangidRkt08/YC_Directory",
    },
    {
      id: 2,
      src: HospitalManagement,
      demoLink: "https://madicareuser.netlify.app/",
      codeLink: "https://github.com/JangidRkt08/MEDICARE_DEPLOYED",
    },
    {
      id: 3,
      src: PortfolioImage,
      demoLink: "https://lemyportfolio.netlify.app/",
      codeLink: "https://github.com/JangidRkt08/PortfolioWebsite",
    },
    {
      id: 4,
      src: rjInterior,
      demoLink: "https://rjinterior.netlify.app/",
      codeLink: "https://github.com/JangidRkt08/interior-design-Landing_Page",
    },
      {
      id: 5,
      src: Flight,
      demoLink: "https://github.com/JangidRkt08/FlightBooking_Backend",
      codeLink: "https://github.com/JangidRkt08/FlightBooking_Backend",
    },
    {
      id: 6,
      src: passwordManager,
      demoLink: "https://github.com/JangidRkt08/PasswordManager_cpp_Project",
      codeLink: "https://github.com/JangidRkt08/PasswordManager_cpp_Project",
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
