import React from "react";
import landing from "assets/pics/landing.png";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Icon } from "@iconify/react";

const Landing: React.FC = () => {
  return (
    <div className="md:m-7 md:p-7 m-5 p-5 xl:h-[90vh] md:h-[60vh] h-[40vh] relative max-w-screen rounded-2xl">
      <img
        src={landing}
        alt="RDIA"
        className="-z-10 absolute object-cover h-full w-full inset-0 object-top rounded-2xl border border-blue-900/70 "
      />
      <div className="flex flex-col gap-2 md:text-left text-right items-end justify-center h-full w-full ">
        <div className="md:w-1/2 w-full md:mx-12 px-5 flex flex-col md:gap-5 gap-3">
          <div>
            <p className="gameclub 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-3xl text-wfull">
              Concordia Game Development
            </p>
            <p className="xl:text-4xl md:text-2xl text-lg font-corbert font-bold text-wfull/90 r1">
              Building dreams, level by level
            </p>
          </div>
          <div className="flex md:gap-5 gap-3 md:justify-normal justify-end r2">
            <Button
              asChild
              variant={"default"}
              className="text-wfull/85 bg-cgd-pink/85 hover:bg-cgd-pink/100 font-bold font-corbert xl:text-2xl md:text-xl text-base xl:py-8 md:pt-5 md:pb-6 pt-4 pb-5 rounded-full active:scale-95 transition-transform ease-in-out "
            >
              <Link
                to={"https://discord.gg/NfRhdRX66P"}
                target="_blank"
                className="flex gap-2 items-center"
              >
                <Icon
                  icon="ic:baseline-discord"
                  className="text-wfull/85 xl:text-5xl md:text-3xl text-2xl"
                />
                Join Us
              </Link>
            </Button>
            <Button
              asChild
              variant={"secondary"}
              className="text-cgd-pink/85 hover:text-cgd-pink bg-wfull/85 hover:bg-wfull font-bold font-corbert xl:text-2xl md:text-xl text-base xl:py-8 md:pt-5 md:pb-6 pt-4 pb-5 rounded-full active:scale-95 transition-transform ease-in-out"
            >
              <Link to={"/sponsor"} className="flex gap-2 items-center">
                <Icon
                  icon="solar:hand-stars-bold"
                  className="text-cgd-pink/85 xl:text-5xl md:text-3xl text-2xl"
                />
                Sponsor Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
