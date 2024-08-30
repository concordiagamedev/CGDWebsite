import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="mx-20">
      <h2 className="font-ls sm:text-6xl text-4xl md:my-14 my-6 text-center md:text-left md:mx-10 text-dark-purple uppercase">
        About Us
      </h2>
      <div className="w-full flex md:flex-row flex-col items-center justify-center gap-5 h-full">
        <div className="md:w-1/2">picture here</div>
        <div className="md:w-1/2">text here</div>
      </div>
    </div>
  );
};

export default AboutUs;
