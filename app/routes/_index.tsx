import type { MetaFunction } from "@remix-run/node";
import "app/css/homepage.css";
import "assets/fonts/fonts.css";
import "app/css/background-animation.css";
import "app/css/animations.css";
import cgdpink from "assets/icons/cgd-transp-pink.png";
import ConstructionCard from "~/components/constructioncard";
import Landing from "~/components/homepage/landing";
import Stats from "~/components/homepage/stats";
import GameCollection from "~/components/homepage/gameCollection";
import JoinUs from "~/components/homepage/joinUs";
import AboutUs from "~/components/homepage/aboutUs";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
    { icon: "./favicon.ico" },
  ];
};

export default function Index() {
  return (
    <div className="flex-grow">
      <ConstructionCard show={false} />
      <div className="md:my-18 md:py-2 my-16">
        <Landing />
        <Stats />
        <AboutUs />
        <GameCollection />
        <JoinUs />
      </div>
      <div className="background h-full">
        <span>
          <img
            src={cgdpink}
            alt="cgd pink alternate logo"
            className="floaties"
          />
        </span>
        <span>
          <img
            src={cgdpink}
            alt="cgd pink alternate logo"
            className="floaties"
          />
        </span>
        <span>
          <img
            src={cgdpink}
            alt="cgd pink alternate logo"
            className="floaties"
          />
        </span>
        <span>
          <img
            src={cgdpink}
            alt="cgd pink alternate logo"
            className="floaties"
          />
        </span>
        <span>
          <img
            src={cgdpink}
            alt="cgd pink alternate logo"
            className="floaties"
          />
        </span>
      </div>
    </div>
  );
}
