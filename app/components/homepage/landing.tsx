import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="md:m-7 md:p-7 m-5 p-5 bg-amber-300 rounded-2xl md:h-[80vh] h-[35vh]">
      <div className="flex flex-col gap-2 text-left items-end justify-center h-full w-full ">
        <div className="w-1/2 md:mx-10 px-7">
          <h1 className="gameclub sm:text-8xl text-5xl">
            Concordia Game Development
          </h1>
          <p className="sm:text-4xl font-corbert font-bold text-wh">
            Building dreams, level by level
          </p>
          <div>Button</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
