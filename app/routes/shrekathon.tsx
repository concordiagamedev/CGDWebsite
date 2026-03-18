import Timetable from "../components/shrekathon/timetable";
import Venue from "../components/shrekathon/venue";
import Shrekathonjam from "assets/icons/Shrekathonjam.jpg"
import { useState } from "react";
import MentorsSection from "~/routes/MentorsCards";
import SponsorsSection from "./SponsorCard";


export default function Shrekathon() {
  const [isOpen, setIsOpen] = useState(false);

  return (




    <div className="min-h-screen pt-24 ">

      <header className="flex flex-col md:flex-row items-center justify-center gap-10 mb-24 max-w-6xl mx-auto">
        <div className="flex-shrink-0">
          <img
            src={Shrekathonjam}
            alt="Shrekathon 2025 Poster"
            className="w-64 md:w-80 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.35)] transform hover:scale-[1.03] transition-all duration-500 ease-out"
            onClick={() => setIsOpen(true)}
          />
        </div>

        <div className="text-center md:text-left font-corbert font-bold">
          <h1 className="text-5xl sm:text-6xl font-bold text-dark-purple mb-4">
            Shrekathon 2025
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            March 20–22, 2026 • Concordia University, Montreal
          </p>
          <p className="text-lg text-gray-600 mb-6">
            March 20th 5:00 p.m. (EST)
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Check the Time Table for more details on the schedule of events down below!
          </p>

          <a
            href="https://www.zeffy.com/en-CA/ticketing/shrekathon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-dark-purple hover:brightness-150 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-md transition"
          >
            🎟️ Register on Zeffy (SOLD OUT)
          </a>
        </div>
      </header>

      <section className="max-w-5xl mx-auto mb-20 text-center md:text-left font-corbert font-bold">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-purple mb-6">
          Description
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to Shrekathon, Concordia Game Development Club’s Shrek-themed 48-hour game jam happening from March 20th to March 22nd!



          For two full days, participants will work in teams (or solo!) to design, develop, and bring a game to life from scratch. Whether you’re a programmer, artist, designer, writer, sound designer, or just someone who loves creative chaos, this is your chance to build something incredible in a fun, high-energy environment.

        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-24 text-center md:text-left font-corbert font-bold">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-purple mb-6">
          Mentors
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Our mentors are industry professionals and creators who will guide you
          through every stage of the development process — from concept and
          design to final implementation. Throughout the weekend, you’ll follow
          their curated workshops to learn core skills, build individual game
          components, and bring them together into your final playable project.
        </p>
      </section>
      <MentorsSection />


      <Timetable />
      <Venue />
      <SponsorsSection />
    </div>
  );
}