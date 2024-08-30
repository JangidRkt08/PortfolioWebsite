// import React from "react";
// import HeroImage from "../assets/Hero.png";
// import { MdKeyboardArrowRight } from "react-icons/md";
// const Home = () => {
//   return (
//     <div
//       name="home "
//       className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 pt-96 md:pt-20"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className=" flex flex-col justify-center h-full w-full md:w-2/3 text-center md:text-left">
//           <h2 className="text-4xl sm:text-7xl font-bold text-white">
//             I'm a full stack developer{" "}
//           </h2>
//           <p className="text-gray-500 py-4 max-w-md">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
//             repudiandae eius reprehenderit eum facere, dolorum hic quidem
//             quisquam laboriosam. Architecto repudiandae vitae quam id asperiores
//             provident suscipit omnis repellat cumque iure, facilis quidem
//             perspiciatis tempora. Vel rerum ut totam excepturi?
//           </p>
//           <div>
//             <button className=" group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdKeyboardArrowRight size={32} />
//               </span>
//             </button>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 ">
//           <img
//             src={HeroImage}
//             alt="my Profile"
//             className="rounded-2xl mx-auto  w-2/3 md:w-full pt-48 md:pt-0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import HeroImage from "../assets/Hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-28 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and Nodejs.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full my-4 md:my-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
