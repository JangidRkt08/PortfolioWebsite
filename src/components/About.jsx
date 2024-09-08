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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            pariatur maiores recusandae, ab nisi commodi deleniti repellendus
            laboriosam fugit ducimus ut, sapiente quae blanditiis omnis tempore
            harum cumque perspiciatis corrupti obcaecati consequuntur beatae
            culpa! Maiores, possimus laboriosam exercitationem cum numquam
            accusamus tempora explicabo hic sunt corporis, error debitis
            perspiciatis quisquam.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            laborum quasi recusandae consequatur. Sapiente impedit tempore
            similique. Nisi aliquam labore, voluptatibus exercitationem quos,
            doloribus impedit dolores dolore fugiat nemo ab eos! Cupiditate,
            iure, placeat, exercitationem totam vero aliquam debitis reiciendis
            alias explicabo eaque fugit hic!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

