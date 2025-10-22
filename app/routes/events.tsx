import { useEffect, useState } from "react";
import cgdpink from "assets/icons/cgd-transp-pink.png";
import type { MetaFunction } from "@remix-run/node";
import GameJamEvent from "~/components/events/gjcard";
import EventCard from "~/components/events/eventcard";
import {
  getPastEventsList,
  getUpcomingEventsList,
} from "~/utils/api";
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
  const [pastEvents, setPastEvents] = useState<any[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      // Fetch past events
      const pastRes = await getPastEventsList();
      if (pastRes.success && pastRes.past_events) {
        const sortedPast = pastRes.past_events.sort((a, b) => b.id - a.id);
        setPastEvents(sortedPast);
      }

      // Fetch upcoming events
      const upcomingRes = await getUpcomingEventsList();
      if (upcomingRes.success && upcomingRes.upcoming_events) {
        const sortedUpcoming = upcomingRes.upcoming_events.sort(
          (a, b) => b.id - a.id
        );
        setUpcomingEvents(sortedUpcoming);
      }

      setLoading(false);
    }
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center text-dark-purple">
        Loading events...
      </div>
    );
  }

  return (
    <div className="px-4 py-32 md:bg-none bg-gradient-to-b from-bg-tl to-bg-br flex-grow">
      <h1 className="sm:text-7xl text-5xl align-middle pb-11 text-center text-dark-purple">
        Events
      </h1>

      <div className="flex flex-col gap-3 items-center mb-10 md:mx-8 xl:mx-16 2xl:mx-28 3xl:mx-44 4xl:mx-64 xl:px-12 2xl:px-24 3xl:px-32 4xl:px-52 mx-2 riseup">
        <Accordion
          type="multiple"
          className="w-full"
          defaultValue={["upcoming-events", "past-events"]}
        >
          {/* Upcoming Events */}
          <AccordionItem value="upcoming-events">
            <AccordionTrigger className="text-3xl md:text-5xl text-dark-purple uppercase">
              Upcoming Events
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-5 w-full">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.id} // unique key
                  title={event.name}
                  date={event.date}
                  description={event.description}
                  location={event.location}
                  imageD={event.avatar}
                  imageM={event.avatar}
                />
              ))}
            </AccordionContent>
          </AccordionItem>

          {/* Past Events */}
          <AccordionItem value="past-events">
            <AccordionTrigger className="text-3xl md:text-5xl text-dark-purple uppercase">
              Past Events
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-5 w-full">
              {pastEvents.map((event) =>
                event.event_type === "Game Jam Event" ? (
                  <GameJamEvent
                    key={event.id} // unique key
                    title={event.name}
                    jampage={event.url}
                    date={event.date}
                    description={event.description}
                    theme={event.theme}
                    location={event.location}
                    winners={[
                      event.first_place_winner_name && {
                        position: "1st Place",
                        gamename: event.first_place_winner_name,
                        gamelink: event.first_place_winner_url,
                      },
                      event.second_place_winner_name && {
                        position: "2nd Place",
                        gamename: event.second_place_winner_name,
                        gamelink: event.second_place_winner_url,
                      },
                      event.third_place_winner_name && {
                        position: "3rd Place",
                        gamename: event.third_place_winner_name,
                        gamelink: event.third_place_winner_url,
                      },
                      event.community_fav_winner_name && {
                        position: "Community Fav",
                        gamename: event.community_fav_winner_name,
                        gamelink: event.community_fav_winner_url,
                      },
                    ].filter(Boolean)}
                    placeholder={event.first_place_winner_avatar}
                    imageD={event.avatar}
                    imageM={event.avatar}
                  />
                ) : (
                  <EventCard
                    key={event.id} // unique key
                    title={event.name}
                    date={event.date}
                    description={event.description}
                    location={event.location}
                    imageD={event.avatar}
                    imageM={event.avatar}
                  />
                )
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="background h-full">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            <img
              src={cgdpink}
              alt="cgd pink alternate logo"
              className="floaties"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
