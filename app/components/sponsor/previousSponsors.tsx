import "app/css/sponsors.css";
import cc2mtl from "assets/icons/cc2-mtl.png";
import cc2 from "assets/icons/cc2.png";
import ubi from "assets/icons/ubisoft.png";

export default function PreviousSponsors() {
  return (
    <div className="past-sponsors-container">
      <div className="sponsortext">
        Special thanks to our previous partners & sponsors!
      </div>
      <div className="past-sponsors">
        <img
          src={cc2mtl}
          alt="concordia gamedev club's past sponsor cyberconnect2 montreal logo"
          className="past-sponsor-img"
          loading="lazy"
        />
        <img
          src={cc2}
          alt="concordia gamedev club's past sponsor cyberconnect2 logo"
          className="past-sponsor-img"
          loading="lazy"
        />
        <img
          src={ubi}
          alt="concordia game dev club's past partner ubisoft logo"
          className="past-sponsor-img"
          loading="lazy"
        />
      </div>
    </div>
  );
}
