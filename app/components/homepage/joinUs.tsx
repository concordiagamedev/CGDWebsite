import React from "react";
import { Separator } from "~/components/ui/separator";

const JoinUs: React.FC = () => {
  return (
    <div className="md:m-7 md:p-7 m-5 p-5 bg-amber-300 rounded-2xl md:h-[80vh] sm:h-[50vh] h-[35vh]">
      <div className="flex gap-2 md:text-left h-full w-full items-center justify-center">
        <div className="md:w-1/2 w-full md:mx-12 px-5 text-center">
          <h1 className="gameclub xl:text-8xl lg:text-6xl md:text-4xl text-2xl">
            Join our Discord Server!
          </h1>
          <div>Button</div>
        </div>
        <Separator orientation="vertical" className="bg-wh w-0.5 rounded-xl" />
        <div className="md:w-1/2 w-full md:mx-12 px-5 text-center">
          <h1 className="gameclub xl:text-8xl lg:text-6xl md:text-4xl text-2xl">
            Sponsor Us!
          </h1>
          <div>Button</div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
