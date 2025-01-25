import cgdpink from "assets/icons/cgd-transp-pink.png";
import type { MetaFunction } from "@remix-run/node";
import GameJamEvent from "~/components/events/gjcard";
import EventCard from "~/components/events/eventcard";
import events from "~/siteSettings/events.json";
import ggj2024winner from "assets/icons/gj2024_winner.png";
import ggj2025 from "assets/icons/ggj2025_copy.png";
import cgdjam2023winner from "assets/icons/awayback.png";
import cgdjam2022winner from "assets/icons/smokingkills.png";
import ggj from "assets/icons/ggj2024.png";
import ggjM from "assets/icons/ggj_banner.png";
import cgd2023 from "assets/icons/cgdfall2023.png";
import cgd2023M from "assets/icons/cgdfall2023_banner.png";
import cgd2022 from "assets/icons/cgdfall2022.png";
import cgd2022M from "assets/icons/cgdfall2022_banner.png";
import megamigs from "assets/icons/megamigs2022.png";
import megamigsM from "assets/icons/megamigs2022_banner.jpg";
import tbd from "assets/icons/TBD.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const meta: MetaFunction = () => {
  return [
    { title: "Events | CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
    { icon: "./favicon.ico" },
  ];
};

export default function DashboardEvents() {
  return (
    <div className="px-4 py-32 md:bg-none bg-gradient-to-b from-bg-tl to-bg-br flex-grow ">
      <h1 className="sm:text-7xl text-5xl align-middle pb-11 text-center text-dark-purple">
        Events
      </h1>

      <div className="flex flex-col gap-3 items-center mb-10 md:mx-8 xl:mx-16 2xl:mx-28 3xl:mx-44 4xl:mx-64 xl:px-12 2xl:px-24 3xl:px-32 4xl:px-52 mx-2 riseup">
        <Accordion
          type="multiple"
          className="w-full "
          defaultValue={["upcoming-events"]}
        >
          <AccordionItem value="upcoming-events">
            <AccordionTrigger className="text-3xl md:text-5xl text-dark-purple uppercase">
              Upcoming Events
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-5 w-full font-corbert font-bold text-cgd-pink text-lg text-center">
              Upcoming Events are coming soon!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="in-progress-events">
            <AccordionTrigger className="text-3xl md:text-5xl text-dark-purple uppercase">
              In-Progress
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-5 w-full">
              <GameJamEvent
                title={events[4].title}
                jampage={events[4].jampage}
                date={events[4].date}
                description={events[4].description}
                theme={events[4].theme}
                location={events[4].location}
                winners={events[4].winners}
                placeholder={tbd}
                imageD={ggj2025}
                imageM={ggjM}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="past-events">
            <AccordionTrigger className="text-3xl md:text-5xl text-dark-purple uppercase">
              Past Events
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-5 w-full">
              <GameJamEvent
                title={events[0].title}
                jampage={events[0].jampage}
                date={events[0].date}
                description={events[0].description}
                theme={events[0].theme}
                location={events[0].location}
                winners={events[0].winners}
                placeholder={ggj2024winner}
                imageD={ggj}
                imageM={ggjM}
              />
              <GameJamEvent
                title={events[1].title}
                jampage={events[1].jampage}
                date={events[1].date}
                description={events[1].description}
                theme={events[1].theme}
                location={events[1].location}
                winners={events[1].winners}
                placeholder={cgdjam2023winner}
                imageD={cgd2023}
                imageM={cgd2023M}
              />
              <EventCard
                title={events[2].title}
                date={events[2].date}
                description={events[2].description}
                location={events[2].location}
                imageD={megamigs}
                imageM={megamigsM}
              />
              <GameJamEvent
                title={events[3].title}
                jampage={events[3].jampage}
                date={events[3].date}
                description={events[3].description}
                theme={events[3].theme}
                location={events[3].location}
                winners={events[3].winners}
                placeholder={cgdjam2022winner}
                imageD={cgd2022}
                imageM={cgd2022M}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
