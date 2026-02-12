import cgdpink from "assets/icons/cgd-transp-pink.png";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import GameJamEvent from "~/components/events/gjcard";
import EventCard from "~/components/events/eventcard";
import events from "~/siteSettings/events.json";
import upcomingevents from "~/siteSettings/upcomingevents.json";
import ggj2024winner from "assets/icons/gj2024_winner.png";
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
import ggj25 from "assets/icons/ggj25.png";
import ggj2025winner from "assets/icons/ggj25winner.png";
import gamenightaugust25 from "assets/icons/gamenightaugust25.jpg";
import learnathon25 from "public/assets/Learnathon/learnathon.png";
import lizard25 from "assets/icons/lizardlounge25.png";
import meetgeek25 from "assets/icons/meetgeek25.png";
import gamenightoct2025 from "assets/icons/gamenightoct.jpg";
import ZaidWorkshop from "assets/icons/zaidworkshop.png";
import zacharyworkshop from "assets/icons/zackaryworkshop.jpg";
import darioworkshop from "assets/icons/workshopwithdario.png";
import rosieworkshop from "assets/icons/workshopwithrosie.png";
import shrekathon from "assets/icons/Shrekathon.png";
import gamenight from "assets/icons/gamenight-feb.png";
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
          defaultValue={["upcoming-events", "past-events"]}
        >
          <AccordionItem value="upcoming-events">
            <AccordionTrigger className="text-3xl md:text-5xl text-dark-purple uppercase">
              Upcoming Events
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-5 w-full">
              <EventCard
                title={upcomingevents[0].title}
                date={upcomingevents[0].date}
                description={upcomingevents[0].description}
                location={upcomingevents[0].location}
                imageD={ZaidWorkshop}
                imageM={ZaidWorkshop}
              />
              <EventCard
                title={upcomingevents[1].title}
                date={upcomingevents[1].date}
                description={upcomingevents[1].description}
                location={upcomingevents[1].location}
                imageD={zacharyworkshop}
                imageM={zacharyworkshop}
              />
              <EventCard
                title={upcomingevents[2].title}
                date={upcomingevents[2].date}
                description={upcomingevents[2].description}
                location={upcomingevents[2].location}
                imageD={darioworkshop}
                imageM={darioworkshop}
              />
              <EventCard
                title={upcomingevents[3].title}
                date={upcomingevents[3].date}
                description={upcomingevents[3].description}
                location={upcomingevents[3].location}
                imageD={rosieworkshop}
                imageM={rosieworkshop}
              />
              <EventCard
                title={upcomingevents[4].title}
                date={upcomingevents[4].date}
                description={upcomingevents[4].description}
                location={upcomingevents[4].location}
                imageD={gamenight}
                imageM={gamenight}
              />

              <EventCard
                title={upcomingevents[5].title}
                date={upcomingevents[5].date}
                description={upcomingevents[5].description}
                location={upcomingevents[5].location}
                imageD={shrekathon}
                imageM={shrekathon}
              />

            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="past-events">
            <AccordionTrigger className="text-3xl md:text-5xl text-dark-purple uppercase">
              Past Events
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-5 w-full">
              <EventCard
                title={events[0].title}
                date={events[0].date}
                description={events[0].description}
                location={events[0].location}
                imageD={learnathon25}
                imageM={learnathon25}
                link="/learnathon"
              />
              <EventCard
                title={events[1].title}
                date={events[1].date}
                description={events[1].description}
                location={events[1].location}
                imageD={gamenightoct2025}
                imageM={gamenightoct2025}
              />
              <EventCard
                title={events[2].title}
                date={events[2].date}
                description={events[2].description}
                location={events[2].location}
                imageD={lizard25}
                imageM={lizard25}
              />
              <EventCard
                title={events[3].title}
                date={events[3].date}
                description={events[3].description}
                location={events[3].location}
                imageD={meetgeek25}
                imageM={meetgeek25}
              />
              <EventCard
                title={events[4].title}
                date={events[4].date}
                description={events[4].description}
                location={events[4].location}
                imageD={gamenightaugust25}
                imageM={gamenightaugust25}
                eventpictures={[
                      "/assets/Events/gnsep25-1.jpg",
                      "/assets/Events/gnsep25-2.jpg",
                      "/assets/Events/gnsep25-3.jpg",
                      ]}

              />
              <GameJamEvent
                title={events[5].title}
                jampage={events[5].jampage}
                date={events[5].date}
                description={events[5].description}
                theme={events[5].theme}
                location={events[5].location}
                winners={events[5].winners}
                placeholder={ggj2025winner}
                imageD={ggj25}
                imageM={ggjM}
              />
              <GameJamEvent
                title={events[6].title}
                jampage={events[6].jampage}
                date={events[6].date}
                description={events[6].description}
                theme={events[6].theme}
                location={events[6].location}
                winners={events[6].winners}
                placeholder={ggj2024winner}
                imageD={ggj}
                imageM={ggjM}
              />
              <GameJamEvent
                title={events[7].title}
                jampage={events[7].jampage}
                date={events[7].date}
                description={events[7].description}
                theme={events[7].theme}
                location={events[7].location}
                winners={events[7].winners}
                placeholder={cgdjam2023winner}
                imageD={cgd2023}
                imageM={cgd2023M}
              />
              <EventCard
                title={events[8].title}
                date={events[8].date}
                description={events[8].description}
                location={events[8].location}
                imageD={megamigs}
                imageM={megamigsM}
              />
              <GameJamEvent
                title={events[9].title}
                jampage={events[9].jampage}
                date={events[9].date}
                description={events[9].description}
                theme={events[9].theme}
                location={events[9].location}
                winners={events[9].winners}
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
