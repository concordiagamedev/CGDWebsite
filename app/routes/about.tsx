import cgdpink from "assets/icons/cgd-transp-pink.png";
import "app/css/aboutus.css";
import type { MetaFunction } from "@remix-run/node";
import controller from "assets/icons/cgd_controller.png";
import Profile from "app/components/profile";
import ConstructionCard from "~/components/constructioncard";
import { staff } from "../siteSettings/staff.json";
import { comms } from "../siteSettings/comms.json";
import { tech } from "../siteSettings/tech.json";
import { eventsteam } from "../siteSettings/events-team.json";

export const meta: MetaFunction = () => {
  return [
    { title: "About | CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
    { icon: "./favicon.ico" },
  ];
};

export default function DashboardAbout() {
  return (
    <div>
      <ConstructionCard show={false} />
      <div className="page">
        <div className="about-us-container">
          <h1 className="sm:text-8xl text-6xl text-center text-dark-purple">
            About Us
          </h1>
          <div className="aboutus-container flex flex-col-reverse lg:flex-row justify-center items-center md:gap-0 gap-6 md:px-20 px-10 xl:mx-32">
            <div className="aboutus-text font-bold mt-5 mb-5 md:my-0 md:text-xl 2xl:text-2xl text-lg -z-10">
              We are Concordia's gamedev community and we focus on the technical
              and development aspects of video games in all disciplines, such
              as, programming, art, game design, storytelling, sound engineering
              and more.
            </div>
            <div className="blob flex items-center justify-center lg:justify-end md:mt-0 mt-10 md:p-10 w-full">
              {/* <img
              src={blob}
              className="blob absolute"
              alt="about us blob that holds a picture of the staff team"
            /> */}
              <img
                src={controller}
                className="blob w-5/6 md:w-3/6 lg:w-4/6"
                alt="CGD controller icon that represents the club"
              />
            </div>
          </div>
        </div>
        <div className="ourteam-container md:my-20 my-10">
          <h2 className="ourteam sm:text-6xl text-4xl md:my-14 my-6 text-center md:text-left md:mx-10">
            Meet Our Team: 2025-26
          </h2>
          <h3 className="ourteam sm:text-2xl text-2xl md:my-14 my-6 text-center md:text-left md:mx-10">
            The Final Bosses 👾
          </h3>
          <div className="staff-section grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-8 lg:mx-32 lg:px-24 md:mx-20 md:px-20 px-6">
            {staff.map((staff) => (
              <Profile
                key={staff.id}
                name={staff.name}
                position={staff.position}
                image={staff.img}
              />
            ))}
          </div>
          {/* Comms teams below */}
          <h3 className="ourteam sm:text-2xl text-2xl md:my-14 my-6 text-center md:text-left md:mx-10">
            The Comms Team 🎨
          </h3>
          <div className="staff-section grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-8 lg:mx-32 lg:px-24 md:mx-20 md:px-20 px-6">
            {comms.map((comms) => (
              <Profile
                key={comms.id}
                name={comms.name}
                position={comms.position}
                image={comms.img}
              />
            ))}
          </div>
            {/* Event teams below */}
          <h3 className="ourteam sm:text-2xl text-2xl md:my-14 my-6 text-center md:text-left md:mx-10">
            The Events Team 💼
          </h3>
          <div className="staff-section grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-8 lg:mx-32 lg:px-24 md:mx-20 md:px-20 px-6">
            {eventsteam.map((eventsteam) => (
              <Profile
                key={eventsteam.id}
                name={eventsteam.name}
                position={eventsteam.position}
                image={eventsteam.img}
              />
            ))}
          </div>
          {/* Comms teams below */}
          <h3 className="ourteam sm:text-2xl text-2xl md:my-14 my-6 text-center md:text-left md:mx-10">
            The Tech Team 💻
          </h3>
          <div className="staff-section grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-8 lg:mx-32 lg:px-24 md:mx-20 md:px-20 px-6">
            {tech.map((tech) => (
              <Profile
                key={tech.id}
                name={tech.name}
                position={tech.position}
                image={tech.img}
              />
            ))}
          </div>
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
    </div>
  );
}
