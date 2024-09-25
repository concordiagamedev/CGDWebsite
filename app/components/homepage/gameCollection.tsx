import React from "react";
import { homeGames } from "~/siteSettings/homepageGames.json";

const GameCollection: React.FC = () => {
  return (
    <div className="md:mx-20 mx-5 my-16">
      <h2 className="font-ls sm:text-6xl text-4xl md:my-14 my-6 text-center md:text-left md:mx-10 text-dark-purple uppercase">
        Game Collection
      </h2>
      <div className="flex text-md sm:text-xl my-6 text-center md:text-left justify-center md:justify-start md:mx-10 font-bold font-corbert text-dark-purple">
        Here are some member-made games during our game jam events!
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-5 w-full min-h-[40vh]">
        {homeGames.map((game) => (
          <div
            className="flex w-full h-full rounded-lg bg-wh/100"
            key={game.id}
          >
            <div className="m-1 p-1 ">
              <img className="" src={game.img} alt={game.alt} />
              <div className="justify-start flex-col">
                <div className="text-dark-purple font-extrabold font-corbert text-md sm:text-lg md:text-xl lg:text-2xl">
                  {game.name}
                </div>
                <div className="text-dark-purple font-semibold font-corbert text-xs sm:text-sm md:text-md lg:text-lg">
                  {game.info}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCollection;
