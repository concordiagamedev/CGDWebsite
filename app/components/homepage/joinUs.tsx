import React from "react";
import { Separator } from "~/components/ui/separator";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import joinus from "assets/pics/joinus.jpg";
import { Link } from "@remix-run/react";

const JoinUs: React.FC = () => {
  return (
    <div className="md:m-7 m-5 rounded-2xl lg:h-[80vh] h-[35vh] relative">
      <img
        src={joinus}
        alt="Join us"
        className="rounded-2xl -z-10 absolute object-cover h-full w-full object-center "
      />
      <div className="flex gap-2 md:text-left h-full w-full items-center justify-center backdrop-blur-sm rounded-2xl">
        <div className="md:w-1/2 w-full md:mx-12 px-5 py-10 my-5 text-center flex flex-col items-center h-full justify-center md:gap-14 gap-4">
          <Icon
            icon="ic:baseline-discord"
            className="lg:text-9xl text-7xl w-full text-wfull drop-shadow-lg"
          />
          <Button
            asChild
            variant="link"
            className="font-ls uppercase 2xl:text-7xl lg:text-6xl md:text-4xl text-2xl text-wfull/95 drop-shadow-xl"
          >
            <Link
              to={"https://discord.gg/NfRhdRX66P"}
              target="_blank"
              className="text-wrap"
            >
              Join our Discord!
            </Link>
          </Button>
        </div>
        <Separator
          orientation="vertical"
          className="bg-wfull/85 w-1 rounded-xl h-3/4 drop-shadow-lg"
        />
        <div className="md:w-1/2 w-full md:mx-12 px-5 py-10 my-5 text-center flex flex-col items-center h-full justify-center md:gap-14 gap-4">
          <Icon
            icon="solar:hand-stars-bold"
            className="lg:text-9xl text-7xl w-full text-wfull drop-shadow-lg"
          />
          <Button
            asChild
            variant="link"
            className="font-ls uppercase 2xl:text-7xl lg:text-6xl md:text-4xl text-2xl text-wfull/95 drop-shadow-xl"
          >
            <Link to={"/sponsor"} className="text-wrap">
              Sponsor us!
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
