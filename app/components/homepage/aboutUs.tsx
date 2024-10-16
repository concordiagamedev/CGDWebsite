import React from "react";
import aboutus from "assets/pics/aboutus.png";

const AboutUs: React.FC = () => {
  return (
    <div className="md:mx-20 mx-8 mt-16">
      <h2 className="font-ls sm:text-6xl text-4xl md:my-14 my-6 text-center md:text-left md:mx-10 text-dark-purple uppercase">
        About Us
      </h2>
      <div className="w-full flex md:flex-row flex-col items-center justify-center gap-10 h-full">
        <div className="md:w-1/2 flex justify-center xl:ml-14 xl:pl-10 md:ml-5 w-full">
          <img
            src={aboutus}
            alt="club event"
            className=" rounded-xl"
            loading="lazy"
          />
        </div>
        <div className=" md:w-1/2 flex xl:text-3xl md:text-xl text-lg md:text-left text-center font-corbert font-bold text-dark-purple xl:mr-14 xl:pr-10 md:mr-5">
          At Concordia's Game Dev Club, we bring together a diverse group of
          students who share a love for game development. Our mission is to
          foster creativity, collaboration, and innovation within the gaming
          community.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
