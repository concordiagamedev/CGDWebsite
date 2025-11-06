import React from "react";
import newEvents from "~/siteSettings/hotevents.json";
import { Link } from "@remix-run/react";

const NewEventsSection: React.FC = () => {
  return (
    <section className="md:mx-20 mx-6 my-24">
      <h2 className="font-ls sm:text-6xl text-4xl font-bold text-dark-purple uppercase md:mx-10 text-center md:text-left">
        New Events
      </h2>

      <p className="text-md sm:text-xl mt-4 font-corbert font-semibold text-dark-purple/80 text-center md:text-left md:mx-10">
        Don’t miss our latest happenings!
      </p>

      <div className="mt-10 flex flex-col gap-6 items-center">
        {newEvents.map((event) => (
          <Link
            to={event.link}
            target={event.target}
            key={event.id}
            className="
              relative
              w-full max-w-4xl
              flex items-center gap-4
              rounded-3xl overflow-hidden

              bg-white/35 backdrop-blur-xl
              border border-[#f2c5d3]/70
              shadow-[0_6px_16px_rgba(0,0,0,0.15)]

              hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(0,0,0,0.25)]
              hover:rotate-[0.5deg]

              transition-all duration-300
              px-4 py-4
            "
          >

            <div
              className="
                absolute inset-0
                rounded-3xl
                opacity-0
                blur-2xl
                scale-110
                group-hover:opacity-40
                transition-all duration-300
              "
              style={{
                background:
                  'radial-gradient(circle at center, rgba(242,197,211,0.4), transparent 70%)',
              }}
            />

            {event.img && (
              <img
                src={event.img}
                alt={event.title}
                className="
                  w-24 h-24
                  rounded-2xl object-cover
                  flex-shrink-0
                  ring-1 ring-white/50
                  shadow-md
                "
                loading="lazy"
              />
            )}

            <div className="flex flex-col justify-center relative z-10">
              <h3 className="text-dark-purple font-extrabold font-corbert text-3xl sm:text-4xl">
                {event.title}
              </h3>

              {event.date && (
                <span
                  className="
                    inline-block w-fit mt-2
                    px-3 py-1 rounded-full
                    text-xs sm:text-sm font-corbert font-semibold
                    bg-[#f2c5d3]/50 text-dark-purple/85
                    shadow-sm
                  "
                >
                  {event.date}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewEventsSection;
