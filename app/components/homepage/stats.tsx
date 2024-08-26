import React from "react";
import { Icon } from "@iconify/react";
import { homeStats } from "~/siteSettings/stats.json";

const Stats: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full mb-10 md:mb-0">
      <div className="md:mx-10 md:p-5 mx-5 p-3 md:flex grid grid-cols-2 gap-5 justify-center bg-wh md:w-fit w-full rounded-2xl text-center items-center border border-wh/100">
        {homeStats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col aspect-square justify-center items-center md:m-2 md:p-5 gap-5"
          >
            <Icon
              icon={stat.icon}
              className="aspect-square xl:w-36 xl:h-36 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-32 sm:h-32 w-16 h-16 text-dark-purple "
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="lg:text-5xl sm:text-4xl text-2xl font-bold font-ls text-cgd-pink/100">
                {stat.stat}
              </h2>
              <p className="lg:text-2xl sm:text-xl text-lg font-corbert font-bold text-dark-purple uppercase">
                {stat.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
