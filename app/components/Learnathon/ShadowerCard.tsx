import React from "react";
import shadowers from "app/siteSettings/shadowers.json";
interface ShadowerCardProps {
    name: string;
    role: string;
    image: string;
}

const ShadowerCard: React.FC<ShadowerCardProps> = ({ name, role, image }) => {
    return (
        <div className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-md transition">
      <img
        src={image}
        alt={name}
        className="w-28 h-28 rounded-xl object-cover shadow transition-transform duration-300 hover:scale-105"
      />
      <div className="text-left">
        <h3 className="text-2xl font-semibold text-dark-purple">{name}</h3>
        <p className="text-gray-600 font-medium">{role}</p>
      </div>
    </div>
  );
};
const ShadowerSection = () => {
    return(
    <section className="max-w-6xl mx-auto mb-32 text-center md:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {shadowers.map((person, index) => (
          <ShadowerCard key={index} {...person} />
        ))}
      </div>
    </section>
    );
};

export default ShadowerSection;
