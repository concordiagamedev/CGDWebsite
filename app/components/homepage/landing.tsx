import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="md:m-7 md:p-7 m-5 p-5 bg-amber-300 rounded-2xl md:h-[80vh] sm:h-[50vh] h-[35vh]">
      <div className="flex flex-col gap-2 md:text-left text-right items-end justify-center h-full w-full ">
        <div className="md:w-1/2 w-full md:mx-12 px-5">
          <h1 className="gameclub xl:text-8xl lg:text-6xl md:text-5xl text-4xl">
            Concordia Game Development
          </h1>
          <p className="xl:text-4xl md:text-2xl text-xl font-corbert font-bold text-wh">
            Building dreams, level by level
          </p>
          <div>Button</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
