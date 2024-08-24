import React from "react";
import { homeStats } from "~/siteSettings/stats.json";

const Stats: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex gap-5 justify-center bg-amber-300 w-fit rounded-2xl text-center items-center p-10">
        {homeStats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col aspect-square justify-center items-center m-2 p-5"
          >
            <h2 className="text-5xl font-bold font-ls text-cgd-pink/100">
              {stat.stat}
            </h2>
            <p className="text-3xl font-corbert font-bold text-dark-purple">
              {stat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
