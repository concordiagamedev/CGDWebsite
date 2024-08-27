import React from "react";
import landing from "assets/pics/landing.png";

const Landing: React.FC = () => {
  return (
    <div className="md:m-7  m-5 p-5 xl:h-[80vh] md:h-[55vh] h-[35vh] relative max-w-screen">
      <img
        src={landing}
        alt="shows image of RDIA"
        className="-z-10 absolute object-cover rounded-2xl h-full w-full inset-0 object-top"
      />
      <div className="flex flex-col gap-2 md:text-left text-right items-end justify-center h-full w-full ">
        <div className="md:w-1/2 w-full md:mx-12 px-5">
          <p className="gameclub xl:text-8xl lg:text-6xl md:text-5xl text-4xl text-wfull">
            Concordia Game Development
          </p>
          <p className="xl:text-4xl md:text-2xl text-xl font-corbert font-bold text-wfull/85">
            Building dreams, level by level
          </p>
          <div>Button</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
