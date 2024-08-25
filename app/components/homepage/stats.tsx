import React from "react";
import { homeStats } from "~/siteSettings/stats.json";

const Stats: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="md:mx-10 md:p-5 mx-5 p-3 md:flex grid grid-cols-2 gap-5 justify-center bg-wh md:w-fit w-full rounded-2xl text-center items-center">
        {homeStats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col aspect-square justify-center items-center md:m-2 md:p-5"
          >
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold font-ls text-cgd-pink/100">
              {stat.stat}
            </h2>
            <p className="lg:text-2xl md:text-xl text-lg font-corbert font-bold text-dark-purple uppercase">
              {stat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
