import React from "react";
import shadowers from "app/siteSettings/shadowers.json";

interface ShadowerCardProps {
  name: string;
  image: string;
}

const ShadowerCard: React.FC<ShadowerCardProps> = ({ name, image }) => {
  return (
    <li
      className="
        group flex flex-col items-center justify-center
        rounded-3xl
        p-6
        bg-white/5 backdrop-blur-lg
        border border-white/15
        shadow-[0_4px_12px_rgba(0,0,0,0.12)]
        transition-all duration-300
        
      "
    >
      <img
        src={image}
        alt={name}
        className="
          w-32 h-32 
          rounded-2xl object-cover
          border-[3px] border-white/40
          shadow-md
          transition-transform duration-300
          group-hover:rotate-1 group-hover:scale-105
        "
      />

      <h3 className="mt-3 text-lg font-semibold text-dark-purple text-center">
        {name}
      </h3>
    </li>
  );
};

const ShadowerSection = () => {
  return (
    <section className="max-w-6xl mx-auto mb-32 px-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {shadowers.map((person, index) => (
          <ShadowerCard key={index} {...person} />
        ))}
      </ul>
    </section>
  );
};

export default ShadowerSection;
