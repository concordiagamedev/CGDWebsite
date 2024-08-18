import cgdpink from "assets/icons/cgd-transp-pink.png";
import "app/css/aboutus.css";
import type { MetaFunction } from "@remix-run/node";
import blob from "assets/pics/blob-aboutus.svg";
import controller from "assets/icons/cgd_controller.png";
import Profile from "app/components/profile";
import tuana from "assets/pictures/execs/tuana.png";
import charles from "assets/pictures/execs/charles_resized.png";
import benedict from "assets/pictures/execs/benedict_resized.png";
import hugo from "assets/pictures/execs/hugo_resized.png";
import maxx from "assets/pictures/execs/maxx_resized.png";
import peter from "assets/pictures/execs/peter_resized.png";
import nick from "assets/pictures/execs/nick_resized.png";
import carleen from "assets/pictures/execs/carleen_resized.png";
import template from "assets/pictures/execs/template.png";

export const meta: MetaFunction = () => {
  return [
    { title: "About | CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
    { icon: "./favicon.ico" },
  ];
};

export default function DashboardAbout() {
  return (
    <div className="page">
      <div className="about-us-container ">
        <h1 className="sm:text-8xl text-6xl ">About Us</h1>
        <div className="aboutus-container flex flex-col-reverse lg:flex-row justify-center items-center md:gap-20 sm:gap-24 gap-6 md:px-20 px-10">
          <div className="aboutus-text font-bold mt-5 mb-5 md:my-0 md:text-xl 2xl:text-2xl text-lg -z-10">
            We are Concordia's gamedev community and we focus on the technical
            and development aspects of video games in all disciplines, such as,
            programming, art, game design, storytelling, sound engineering and
            more.
          </div>
          <div className="blob w-full flex items-center md:mt-0 mt-10 md:p-10">
            {/* <img
              src={blob}
              className="blob absolute"
              alt="about us blob that holds a picture of the staff team"
            /> */}
            <img
              src={controller}
              className="blob"
              alt="CGD controller icon that represents the club"
            />
          </div>
        </div>
      </div>
      <div className="ourteam-container md:my-20 my-10">
        <h2 className="ourteam sm:text-7xl text-5xl my-14 mx-10">
          Meet Our Team
        </h2>
        <div className="staff-section grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-8 md:mx-20 md:px-20 px-6">
          <Profile
            name="Charles Partous"
            position="President"
            image={charles}
          />
          <Profile
            name="Aria Tessler"
            position="VP Internal"
            image={template}
          />
          <Profile
            name="Rev Nahabedian"
            position="VP External"
            image={template}
          />
          <Profile name="Nicolas Boyer" position="Treasurer" image={nick} />
          <Profile name="Peter Tian" position="VP Tech" image={peter} />
          <Profile name="Tuana Bicakci" position="VP Creative" image={tuana} />
          <Profile name="Zaid Minhas" position="Internal" image={template} />
          <Profile name="Adam Farahat" position="External" image={template} />
          <Profile name="Maxx Freund" position="Lead Developer" image={maxx} />
          <Profile name="Jordan Bossou" position="Developer" image={template} />
          <Profile
            name="Alexander Smagorinski"
            position="Developer"
            image={template}
          />
          <Profile name="Katrina Frain" position="Artist" image={template} />
          <Profile
            name="Keven Vaillancourt"
            position="Artist"
            image={template}
          />
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
  );
}
