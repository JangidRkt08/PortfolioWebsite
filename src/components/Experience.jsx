// import React from "react";
// import Python from "../assets/Python.png";
// import cpp from "../assets/c++.png";
// import css from "../assets/css.png";
// import docker from "../assets/docker.png";
// import github from "../assets/github.png";
// import html from "../assets/html.png";
// import javascript from "../assets/javascript.png";
// import mongoDb from "../assets/mongoDb.png";
// import nextjs from "../assets/nextjs.png";
// import nodejs from "../assets/node.png";
// import linux from "../assets/linux.png";
// import Bootstrap from "../assets/Bootstrap.png";
// import reactimage from "../assets/react.png";
// import tailwind from "../assets/tailwind.png";

// const Experience = () => {
//   const technologies = [
//     {
//       id: 1,
//       src: html,
//       title: "HTML",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 2,
//       src: reactimage,
//       title: "React JS",
//       style: "shadow-blue-600",
//     },
//     {
//       id: 3,
//       src: javascript,
//       title: "JavaScript",
//       style: "shadow-yellow-500",
//     },
//     {
//       id: 4,
//       src: github,
//       title: "GitHub",
//       style: "shadow-gray-600",
//     },
//     {
//       id: 4,
//       src: tailwind,
//       title: "Tailwind",
//       style: "shadow-blue-800",
//     },
//     {
//       id: 5,
//       src: nextjs,
//       title: "Next JS",
//       style: "shadow-white",
//     },
//     {
//       id: 6,
//       src: css,
//       title: "CSS",
//       style: "shadow-dark-blue-800",
//     },
//     {
//       id: 7,
//       src: cpp,
//       title: "C++",
//       style: "shadow-yellow-800",
//     },
//     {
//       id: 8,
//       src: docker,
//       title: "Docker",
//       style: "shadow-white",
//     },
//     {
//       id: 9,
//       src: Python,
//       title: "Python",
//       style: "shadow-white",
//     },
//     {
//       id: 10,
//       src: nodejs,
//       title: "Node JS",
//       style: "shadow-dark-green-800",
//     },
//     {
//       id: 11,
//       src: mongoDb,
//       title: "MongoDB",
//       style: "shadow-green-800",
//     },
//     {
//       id: 12,
//       src: linux,
//       title: "Linux",
//       style: "shadow-red-800",
//     },
//     {
//       id: 13,
//       src: Bootstrap,
//       title: "Bootstrap",
//       style: "shadow-Pink-800",
//     },
//   ];
//   return (
//     <div
//       name="experience"
//       className="bg-gradient-to-b  from-gray-800 to-black w-full h-screen"
//     >
//       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
//         <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//             Experience
//           </p>
//           <p className="py-6"> These are the technologies i have worked on!</p>
//         </div>

//         <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
//           {technologies.map(({ id, src, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-500 ${style}`}
//             >
//               <img src={src} alt="" className="w-20 mx-auto" />
//               <p className="mt-4">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React from "react";
import Python from "../assets/Python.png";
import cpp from "../assets/c++.png";
import css from "../assets/css.png";
import docker from "../assets/docker.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongoDb from "../assets/mongoDb.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/node.png";
import linux from "../assets/linux.png";
import Bootstrap from "../assets/Bootstrap.png";
import reactimage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: reactimage,
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: github,
      title: "GitHub",
      style: "shadow-gray-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-800",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: css,
      title: "CSS",
      style: "shadow-dark-blue-800",
    },
    {
      id: 8,
      src: cpp,
      title: "C++",
      style: "shadow-yellow-800",
    },
    {
      id: 9,
      src: docker,
      title: "Docker",
      style: "shadow-white",
    },
    {
      id: 10,
      src: Python,
      title: "Python",
      style: "shadow-white",
    },
    {
      id: 11,
      src: nodejs,
      title: "Node JS",
      style: "shadow-dark-green-800",
    },
    {
      id: 12,
      src: mongoDb,
      title: "Mongo DB",
      style: "shadow-green-800",
    },
    {
      id: 13,
      src: linux,
      title: "Linux",
      style: "shadow-red-800",
    },
    {
      id: 14,
      src: Bootstrap,
      title: "Bootstrap",
      style: "shadow-Pink-800",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b  from-gray-800 to-black w-full h-full pt-32  mb-0 md:pt-56"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked on!</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md shadow-gray-600 rounded-lg hover:scale-105  duration-500 ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-xl font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
