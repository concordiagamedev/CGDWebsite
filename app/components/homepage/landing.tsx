import React from "react";
import landing from "assets/pics/landing.jpg";

const Landing: React.FC = () => {
  return (
    <div className="md:m-7 md:p-7 m-5 p-5 xl:h-[90vh] md:h-[60vh] h-[40vh] relative max-w-screen rounded-2xl">
      <img
        src={landing}
        alt="shows image of RDIA"
        className="-z-10 absolute object-cover h-full w-full inset-0 object-top rounded-2xl border border-blue-900/70 "
      />
      <div className="flex flex-col gap-2 md:text-left text-right items-end justify-center h-full w-full ">
        <div className="md:w-1/2 w-full md:mx-12 px-5">
          <p className="gameclub 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-3xl text-wfull">
            Concordia Game Development
          </p>
          <p className="xl:text-4xl md:text-2xl text-lg font-corbert font-bold text-wfull/85">
            Building dreams, level by level
          </p>
          <div>Button</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
