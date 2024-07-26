import React from "react";

interface EventProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

const EventCard: React.FC<EventProps> = ({
  title,
  date,
  description,
  image,
}) => {
  return (
    <div className="flex md:flex-row flex-col bg-wh rounded-xl md:p-10 p-7 h-fit gap-10 w-full items-center">
      <img
        src={image}
        alt={title}
        className="object-contain aspect-{3/2} md:w-44 w-64 rounded-md"
      />
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col md:gap-5 ">
          <h1 className="title md:text-3xl xl:text-4xl 3xl:text-5xl text-xl text-cgd-pink/85 text-left">
            {title}
          </h1>
          <h3 className="description md:text-xl text-md text-dark-purple/90 font-corbert font-bold">
            {description}
          </h3>
        </div>
        <p className="date md:text-lg text-sm text-dark-purple/80 font-corbert font-bold">
          {date}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
