import React from "react";

const GameCollection: React.FC = () => {
  return (
    <div className="md:mx-20 mx-5 my-16">
      <h2 className="font-ls sm:text-6xl text-4xl md:my-14 my-6 text-center md:text-left md:mx-10 text-dark-purple uppercase">
        Game Collection
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-5 w-full min-h-[40vh]">
        <div className="w-full h-full rounded-lg bg-wh/100"></div>
        <div className="w-full h-full rounded-lg bg-wh/100"></div>
        <div className="w-full h-full rounded-lg bg-wh/100"></div>
        <div className="w-full h-full rounded-lg bg-wh/100"></div>
        <div className="w-full h-full rounded-lg bg-wh/100"></div>
        <div className="w-full h-full rounded-lg bg-wh/100"></div>
      </div>
    </div>
  );
};

export default GameCollection;
