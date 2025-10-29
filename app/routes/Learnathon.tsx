import type { MetaFunction } from "@remix-run/node";
import cgdpink from "assets/icons/cgd-transp-pink.png";
import learnathonBanner from "public/assets/Learnathon/learnathon.png";
import { useState } from "react";
import MentorsSection from "~/components/Learnathon/MentorCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Learnathon 2025 | CGD" },
    {
      name: "description",
      content: "Official Learnathon 2025 event page by Concordia Game Dev.",
    },
    { icon: "./favicon.ico" },
  ];
};

export default function Learnathon25() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative px-4 py-32 bg-gradient-to-b from-bg-tl to-bg-br flex-grow overflow-hidden">
      <header className="flex flex-col md:flex-row items-center justify-center gap-10 mb-24 max-w-6xl mx-auto">
        <div className="flex-shrink-0">
          <img
            src={learnathonBanner}
            alt="Learnathon 2025 Poster"
            className="w-64 md:w-80 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.35)] transform hover:scale-[1.03] transition-all duration-500 ease-out"

            onClick={() => setIsOpen(true)}
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold text-dark-purple mb-4">
            Learnathon 2025
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            November 8–9, 2025 • Concordia University, Montreal
          </p>
          <p className="text-lg text-gray-600 mb-6">
            8:00 a.m. November 8 – 8:00 p.m. November 9 (EST)
          </p>

          <a
            href="https://www.zeffy.com/en-CA/ticketing/learnathon--2025"
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
            src={learnathonBanner}
            alt="Learnathon Full Poster"
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
      <section className="max-w-5xl mx-auto mb-20 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-purple mb-6">
           Description
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          During the Learnathon, you will be working on a video game from scratch, 
          following the tutorials designed and led by our lecturers. 
          The main objective is for everyone to dive into the fantastic realm of game development, 
          and to build even more connections with your fellow participants! By nature, 
          this is a non-competitive event, therefore no pressure will be put on yourself and projects, 
          take your time, and most importantly, enjoy the process!

        </p>
      
      </section>


  <section className="max-w-5xl mx-auto mb-24 text-center md:text-left">
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

      
      {/* <section className="max-w-5xl mx-auto mb-32 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-purple mb-6">
           Shadowers
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <li className="bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-dark-purple">1</h3>
            <p className="text-gray-700">1</p>
          </li>
          <li className="bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-dark-purple">2</h3>
            <p className="text-gray-700">2</p>
          </li>
          <li className="bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-dark-purple">3</h3>
            <p className="text-gray-700">
              3
            </p>
          </li>
        </ul>
      </section> */}

<section className="max-w-5xl mx-auto mb-32 text-center md:text-left">
  <h2 className="text-4xl font-bold text-dark-purple mb-12">TIME TABLE</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-left">
    
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold text-dark-purple mb-10 text-center">Day 1</h3>
      <div className="relative w-full max-w-md">
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-dark-purple transform -translate-x-1/2 rounded-full"></div>

        <ul className="space-y-8">
          {[
            ["8:30 AM", "Opening ceremony"],
            ["9:00 AM", "Lecturers’ 1st panel"],
            ["12:00 PM", "Lunch time!"],
            ["1:00 PM", "Lecturers’ 2nd panel"],
            ["5:00 PM", "Dinner time!"],
            ["6:00 PM", "Panel EXTRA"],
            ["9:00 PM", "Venue closes"],
          ].map(([time, label], i) => (
            <li
              key={i}
              className="grid grid-cols-[1fr_24px_1fr] items-center"
            >
              
              <div className="text-right pr-4 text-gray-800 font-medium">{time}</div>

              
              <div className="flex justify-center relative">
                <span className="z-10 w-3 h-3 bg-white border-[3px] border-dark-purple rounded-full"></span>
              </div>

              
              <div className="pl-4 text-gray-700">{label}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>

    
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold text-dark-purple mb-10 text-center">Day 2</h3>
      <div className="relative w-full max-w-md">
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-dark-purple transform -translate-x-1/2 rounded-full"></div>

        <ul className="space-y-8">
          {[
            ["8:00 AM", "Venue opens"],
            ["9:00 AM", "Lecturers’ 3rd panel"],
            ["11:00 AM", "Brunch time!"],
            ["12:00 PM", "Lecturers’ 3rd panel (continue)"],
            ["1:00 PM", "Lecturers’ 4th panel"],
            ["4:00 PM", "Final submit & closing"],
            ["5:00 PM", "Show us your game!"],
          ].map(([time, label], i) => (
            <li
              key={i}
              className="grid grid-cols-[1fr_24px_1fr] items-center"
            >
              <div className="text-right pr-4 text-gray-800 font-medium">{time}</div>
              <div className="flex justify-center relative">
                <span className="z-10 w-3 h-3 bg-white border-[3px] border-dark-purple rounded-full"></span>
              </div>
              <div className="pl-4 text-gray-700">{label}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>
<section id="venue" className="max-w-5xl mx-auto mb-28 text-center md:text-left">
  <h2 className="text-4xl font-bold text-dark-purple mb-10">
    Venue & Labs
  </h2>

  <div className="text-lg text-gray-700 leading-relaxed space-y-8">

    <p className="text-center md:text-left">
      The Learnathon will take place at <strong>Concordia University</strong> — in 
      <span className="text-dark-purple font-semibold"> Room H937</span>, our 
      <em> main creative hub</em> for the weekend! 🎮  
      This space will host the <strong>opening ceremony</strong>, 
      <strong> workshops</strong>, and <strong>closing session</strong>.
    </p>

    <p className="text-center md:text-left">
      On <strong>Saturday afternoon</strong>, we’ll switch to 
      <span className="text-dark-purple font-semibold"> Room H443</span> for a portion of the event.
    </p>

    <div className="relative border-l-4 border-dark-purple pl-6 ml-2">
      <h3 className="text-2xl font-semibold text-dark-purple mb-2">
        💻 Labs & Workspaces
      </h3>
      <p className="mb-4">
        To make sure everyone has space to build and collaborate, we’ll also have several lab rooms open throughout the event:
      </p>
      <ul className="space-y-2 text-gray-800">
        <li>• Lab Room 1</li>
        <li>• Lab Room 2</li>
        <li>• Lab Room 3</li>
        <li>• Lab Room 4</li>
      </ul>
    </div>

    <p className="text-sm text-gray-500 italic text-center mt-6">
      *All rooms are located in the Henry F. Hall Building, Concordia University.
    </p>
  </div>
</section>
      
      <div className="background h-full">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <span key={i}>
              <img src={cgdpink} alt="CGD pink logo" className="floaties" />
            </span>
          ))}
      </div>
    </div>
  );
}
