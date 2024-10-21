import cgdpink from "assets/icons/cgd-transp-pink.png";
import sponsorpacklm from "assets/pics/light mode-2.png";
import "app/css/sponsors.css";
import type { MetaFunction } from "@remix-run/node";
import ConstructionCard from "~/components/constructioncard";
import PreviousSponsors from "~/components/sponsor/previousSponsors";
import CurrentSponsors from "~/components/sponsor/currentSponsors";

export const meta: MetaFunction = () => {
  return [
    { title: "Sponsors | CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
  ];
};

export default function DashboardSponsor() {
  return (
    <div>
      <ConstructionCard show={false} />
      <div className="page">
        <h1 className="sm:text-8xl text-6xl pb-11 text-center text-dark-purple">
          Our Sponsors
        </h1>
        <div className="sponsor-container">
          {/* <div className="sponsor-text">Thank you for our sponsors!</div> */}
          <div className="sponsortext flex text-lg">
            <p>
              We've set out to establish an environment which promotes
              interactions between club members and the game development
              industry at large. To better serve the CGD community, we have
              created a sponsorship package for any organization interested in
              helping us support the game developers of tomorrow!
            </p>
          </div>
          <img
            src={sponsorpacklm}
            alt="concordia gamedev club sponsorship package overview light mode"
            className="sponsor-img"
          />
          <div className="riseup flex flex-col lg:flex-row gap-5">
            <a
              className="button-container"
              target="_blank"
              href="/uploads/CGD_sponsorship_package_2023.pdf"
            >
              <p className="py-4 align-middle w-full lg:w-80 text-center">
                Click here for the detailed sponsorship package PDF
              </p>
            </a>
            <a
              className="button-container flex items-center justify-center"
              href="mailto:game.development@concordia.ca"
            >
              <p className="py-4">Become a Sponsor!</p>
            </a>
          </div>
          <CurrentSponsors />
          <PreviousSponsors />
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
