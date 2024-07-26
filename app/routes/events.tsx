import cgdpink from "assets/icons/cgd-transp-pink.png";
import type { MetaFunction } from "@remix-run/node";
import EventCard from "app/components/eventcard";
import ggj from "assets/icons/ggj2024.png";
import cgd2023 from "assets/icons/cgdfall2023.png";
import cgd2022 from "assets/icons/cgdfall2022.png";
import megamigs from "assets/icons/megamigs2022.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Events | CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
  ];
};

export default function DashboardEvents() {
  return (
    <div className="page">
      <h1 className="sm:text-7xl text-5xl align-middle pb-11">Events</h1>
      {/* <h2 className="ourteam sm:text-7xl text-5xl my-10 ml-80">Past Events</h2> */}

      <div className="flex flex-col gap-3 items-center mb-10 md:mx-8 xl:mx-16 2xl:mx-28 3xl:mx-36 4xl:mx-44 xl:px-12 2xl:px-24 3xl:px-28 4xl:px-36 mx-2">
        <EventCard
          title="Global Game Jam 2024"
          date="Jan 26-28, 2024"
          description="Hosted by Concordia Game Dev Club, Global Game Jam is a 48-hour event where the theme is 'Make me Laugh'."
          image={ggj}
        />
        <EventCard
          title="CGD Jam Fall 2023"
          date="Nov 3-5, 2023"
          description="Organized by Concordia Game Dev, this 48 hour Game Jam event's theme was 'Space Between'."
          image={cgd2023}
        />
        <EventCard
          title="Megamigs 2022"
          date="Oct 19-22, 2022"
          description="Following the Fall Jam in 2022, we embark and explored Canada's video game gathering for the industry!"
          image={megamigs}
        />
        <EventCard
          title="CGD Jam Fall 2022"
          date="Oct 14-16, 2022"
          description="The community's never been so alive! Our club was able to organize and host our first in-person event in over 2 years. With over 50 participants and 11 game submissions, the 2022 CGD Game Jam was major success!"
          image={cgd2022}
        />
      </div>
      {/* <div className="background h-full">
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
      </div> */}
    </div>
  );
}
