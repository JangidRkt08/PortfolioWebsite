

// export default Home;
import React from "react";
import HeroImage from "../assets/Hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex flex-col items-center justify-center"
    >
      <div className="max-w-screen-lg w-full mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        {/* Content Section */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 text-base md:text-lg lg:text-xl max-w-md">
            I have 2 years of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React, Tailwind, Next.js, and Node.js.
          </p>
          <div className="mt-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-4/5 md:w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

