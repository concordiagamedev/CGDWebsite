import React from "react";
import { Separator } from "~/components/ui/separator";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

const JoinUs: React.FC = () => {
  return (
    <div className="md:m-7 md:p-7 m-5 p-5 bg-amber-300 rounded-2xl lg:h-[80vh] h-[50vh]">
      <div className="flex gap-2 md:text-left h-full w-full items-center justify-center">
        <div className="md:w-1/2 w-full md:mx-12 px-5 py-10 my-5 text-center flex flex-col items-center h-full justify-center md:gap-10 gap-4">
          <Icon
            icon="ic:baseline-discord"
            className="lg:text-9xl text-7xl w-full text-wfull"
          />
          <div className="flex gap-5 flex-col items-center">
            <h1 className="2xl:text-7xl lg:text-6xl md:text-4xl text-2xl text-wfull/90">
              Join our Discord!
            </h1>
            <Button className="uppercase font-corbert font-bold bg-cgd-pink">
              Join now
            </Button>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="bg-wfull/85 w-1 rounded-xl h-3/4"
        />
        <div className="md:w-1/2 w-full md:mx-12 px-5 py-10 my-5 text-center flex flex-col items-center h-full justify-center md:gap-10 gap-4">
          <Icon
            icon="solar:hand-stars-bold"
            className="lg:text-9xl text-7xl w-full text-wfull"
          />
          <div className="flex gap-5 flex-col items-center">
            <h1 className="2xl:text-7xl lg:text-6xl md:text-4xl text-2xl text-wfull/90">
              Sponsor Us!
            </h1>
            <Button className="uppercase font-corbert font-extrabold bg-wfull text-cgd-pink">
              Sponsor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
