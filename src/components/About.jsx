import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-slate-200 flex items-center"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-8">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Hello, I'm Ravikant Jangid, a passionate full-stack developer and
            B.Tech student specializing in Artificial Intelligence. I'm
            currently working on an exciting project called SMART VISION, where
            I lead the integration of machine learning into a dynamic web
            interface. My tech stack includes React, Node.js, AWS S3, and Amazon
            Kinesis Video Streams , which I use to bridge AI with intuitive web
            experiences.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            I gained practical experience during a 3-month internship at
            Unisnacks, where I served as the full-stack development lead. This
            experience honed my skills in designing and deploying web solutions
            in a fast-paced startup environment. <br></br>With a strong focus on
            AI and constant curiosity to explore new technologies, I am driven
            to build innovative solutions that make a real-world impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
