import React from "react";
import { homeGames } from "~/siteSettings/homepageGames.json";

const GameCollection: React.FC = () => {
  return (
    <div className="md:mx-20 mx-5 my-16">
      <h2 className="font-ls sm:text-6xl text-4xl md:my-14 my-6 text-center md:text-left md:mx-10 text-dark-purple uppercase">
        Game Collection
      </h2>
      <div className="flex text-md md:text-xl font-bold font-corbert text-dark-purple">
        Here are some member-made games during our game jam events!
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-5 w-full min-h-[40vh]">
        {homeGames.map((game) => (
          <div className="w-full h-full rounded-lg bg-wh/100"></div>
        ))}
      </div>
    </div>
  );
};

export default GameCollection;
