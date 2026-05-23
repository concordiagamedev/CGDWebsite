import type { MetaFunction } from "@remix-run/node";
import Timetable from "../components/shrekathon/timetable";
import Venue from "../components/shrekathon/venue";
import Shrekathonjam from "assets/icons/Shrekathonjam.jpg"
import { useState } from "react";
import MentorsSection from "~/routes/MentorsCards";
import SponsorsSection from "./SponsorCard";
import Judging from "../components/shrekathon/judgingprizes"
import Winners from "../components/shrekathon/winners";

const themeRevealVideo = "/assets/Shrekathon/theme-reveal-2026.mp4";
const galleryImages = [
  "/assets/Shrekathon/Shrekathon1.jpeg",
  "/assets/Shrekathon/Shrekathon2.jpeg",
  "/assets/Shrekathon/Shrekathon3.jpeg",
  "/assets/Shrekathon/Shrekathon4.jpeg",
  "/assets/Shrekathon/Shrekathon5.jpeg",
  "/assets/Shrekathon/Shrekathon6.jpeg",
  "/assets/Shrekathon/Shrekathon7.jpeg",
  "/assets/Shrekathon/Shrekathon8.jpeg",
  "/assets/Shrekathon/Shrekathon9.jpeg",
];
const themeLayersIdeas = [
  "Programming",
  "Art",
  "Sound Design",
  "Game Design"
];

export const meta: MetaFunction = () => {
  return [
    { title: "Shrekathon New | CGD" },
    {
      name: "description",
      content: "Official Shrekathon New event page by Concordia Game Dev.",
    },
    { icon: "./favicon.ico" },
  ];
};
export default function Shrekathon() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const showPreviousImage = () => {
    setActiveGalleryIndex((currentIndex) =>
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    setActiveGalleryIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative px-4 py-32 bg-gradient-to-b from-bg-tl to-bg-br flex-grow overflow-hidden font-corbert">
      <header className="flex flex-col md:flex-row items-center justify-center gap-10 mb-24 max-w-6xl mx-auto">
        <div className="flex-shrink-0">
          <img
            src={Shrekathonjam}
            alt="Shrekathon New Poster"
            className="w-64 md:w-80 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.35)] transform hover:scale-[1.03] transition-all duration-500 ease-out"
            onClick={() => setIsOpen(true)}
          />
        </div>

        <div className="text-center md:text-left font-corbert font-bold">
          <h1 className="text-5xl sm:text-6xl font-bold text-dark-purple mb-4">
            <span>Shrekathon 2026</span>
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            March 20–22, 2026 • Concordia University, Montreal
          </p>
          <p className="text-lg text-gray-600 mb-6">
            March 20 at 5:00 p.m. - March 22 at 8:00 p.m. (EST)
          </p>

          <a
            href="https://www.zeffy.com/en-CA/ticketing/shrekathon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-dark-purple hover:brightness-150 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-md transition"
          >
            🎟️ Register on Zeffy
          </a>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={Shrekathonjam}
            alt="Shrekathon New Full Poster"
            className="max-w-3xl w-11/12 rounded-2xl shadow-2xl transition-all duration-300"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-8 text-white text-3xl font-bold hover:text-gray-300"
          >
            ×
          </button>
        </div>
      )}

      <section className="max-w-6xl mx-auto mb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(246,232,239,0.92),rgba(232,245,224,0.88))] shadow-[0_24px_80px_rgba(78,47,81,0.16)]">
          <div className="absolute -left-20 top-8 h-44 w-44 rounded-full bg-[rgba(130,180,92,0.25)] blur-3xl" />
          <div className="absolute -right-16 bottom-6 h-48 w-48 rounded-full bg-[rgba(255,196,126,0.24)] blur-3xl" />

          <div className="relative grid items-start gap-10 px-6 pb-8 pt-9 sm:px-8 sm:pb-10 sm:pt-11 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
            <div className="text-center md:text-left lg:pt-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-dark-purple">
                Theme Reveal
              </h2>

              <p className="mt-4 text-lg sm:text-xl leading-relaxed text-gray-700">
                Here&apos;s the peak cinema reveal video: this
                year&apos;s theme is{" "}
                <span className="inline-block rounded-full bg-[rgba(130,180,92,0.18)] px-4 py-1 text-dark-purple">
                  LAYERS 🧅
                </span>
                .
              </p>

              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
                - Ogres are like onions they have layers.... <br/>
                - They stink??!!! <br /> 
                - Yeah.. NO NO.. They have layers! <br />
              </p>

              <div className="mt-7 grid gap-3 md:grid-cols-3">
                {themeLayersIdeas.map((idea) => (
                  <div
                    key={idea}
                    className="rounded-2xl border border-dark-purple/10 bg-white/70 px-4 py-4 text-base leading-relaxed text-gray-700 shadow-sm backdrop-blur-sm"
                  >
                    {idea}
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[320px]">
              <div className="rounded-[2rem] bg-[#2b182d] p-3 shadow-[0_25px_55px_rgba(43,24,45,0.35)] ring-1 ring-white/20">
                <div className="mb-3 flex items-center justify-between px-2 text-xs uppercase tracking-[0.24em] text-pink-100">
                  
                </div>

                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={Shrekathonjam}
                  className="aspect-[9/16] w-full rounded-[1.4rem] bg-black object-cover shadow-inner"
                >
                  <source src={themeRevealVideo} type="video/mp4" />
                  Your browser does not support the theme reveal video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <Venue />
      <Timetable />
      <Judging />
      <Winners />
      <section className="max-w-6xl mx-auto mb-24 font-corbert font-bold">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-purple mb-6 text-center md:text-left">
          Photo Gallery
        </h2>

        <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(246,232,239,0.9),rgba(232,245,224,0.88))] p-4 shadow-[0_24px_80px_rgba(78,47,81,0.16)] sm:p-6">
          <div className="relative">
            <img
              src={galleryImages[activeGalleryIndex]}
              alt={`Shrekathon photo ${activeGalleryIndex + 1}`}
              className="h-[260px] w-full rounded-[1.5rem] bg-white object-contain shadow-[0_16px_40px_rgba(78,47,81,0.2)] sm:h-[380px] lg:h-[520px]"
            />

            <button
              type="button"
              onClick={showPreviousImage}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/65"
              aria-label="Show previous Shrekathon photo"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/65"
              aria-label="Show next Shrekathon photo"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-sm uppercase tracking-[0.18em] text-dark-purple/80">
              Photo {activeGalleryIndex + 1} of {galleryImages.length}
            </p>

            <div className="flex gap-2">
              {galleryImages.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveGalleryIndex(index)}
                  className={`h-3 w-3 rounded-full transition ${
                    index === activeGalleryIndex
                      ? "bg-dark-purple scale-110"
                      : "bg-dark-purple/25 hover:bg-dark-purple/50"
                  }`}
                  aria-label={`Show Shrekathon photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SponsorsSection />
    </div>
  );
}
