import React from "react";
import { Separator } from "~/components/ui/separator";
import { Icon } from "@iconify/react";

const JoinUs: React.FC = () => {
  return (
    <div className="md:m-7 md:p-7 m-5 p-5 bg-amber-300 rounded-2xl md:h-[80vh] sm:h-[50vh] h-[35vh]">
      <div className="flex gap-2 md:text-left h-full w-full items-center justify-center">
        <div className="md:w-1/2 w-full md:mx-12 px-5 py-10 text-center flex flex-col items-center h-full justify-center gap-10">
          <Icon
            icon="ic:baseline-discord"
            className="lg:text-9xl text-7xl w-full text-wfull"
          />
          <div>
            <h1 className="xl:text-8xl lg:text-6xl md:text-4xl text-2xl text-wfull">
              Join our Discord Server!
            </h1>
            <div>Button</div>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="bg-wfull/85 w-1 rounded-xl"
        />
        <div className="md:w-1/2 w-full md:mx-12 px-5 py-10 text-center flex flex-col items-center h-full justify-center gap-10">
          <Icon
            icon="solar:hand-stars-bold-duotone"
            className="lg:text-9xl text-7xl w-full text-wfull"
          />
          <div>
            <h1 className="xl:text-8xl lg:text-6xl md:text-4xl text-2xl text-wfull">
              Sponsor Us!
            </h1>
            <h1 className="text-8xl">&nbsp;</h1>
            <div>Button</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
