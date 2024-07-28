import React, { useEffect } from "react";
//import the appropriate picture for the popup here
import pic from "assets/pictures/underconstruction.jpg";

interface ConstructionProps {
  show: boolean;
}

const ConstructionCard: React.FC<ConstructionProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="flex backdrop-blur-lg content-center items-center justify-center z-50 w-full h-full fixed">
      <div className="flex flex-row bg-wh rounded-xl p-10 h-fit gap-10 w-1/2">
        <img
          src={pic}
          alt={"under construction image"}
          className={`object-contain aspect-{3/2} w-1/6 rounded-md`}
        />
        <div className="flex flex-col gap-5">
          <h3 className="date text-xl text-dark-purple font-corbert font-bold">
            Under Construction
          </h3>{" "}
          <p className="description text-xl text-dark-purple font-corbert font-bold">
            This page is currently being worked on! Please check again later!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConstructionCard;
