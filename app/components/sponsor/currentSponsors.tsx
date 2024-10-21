import "app/css/sponsors.css";
import ieee from "assets/icons/ieee.png";
import dotbigbang from "assets/icons/dotbigbang.jpg";
import scs from "assets/icons/scs.png";

export default function CurrentSponsors() {
  return (
    <div className="past-sponsors-container">
      <div className="sponsortext">Our current partners & sponsors</div>
      <div className="current-sponsors">
        <img
          src={ieee}
          alt="concordia gamedev club's past sponsor cyberconnect2 montreal logo"
          className="past-sponsor-img"
          loading="lazy"
        />
        <img
          src={dotbigbang}
          alt="concordia gamedev club's past sponsor cyberconnect2 logo"
          className="past-sponsor-img"
          loading="lazy"
        />
        <img
          src={scs}
          alt="concordia game dev club's past partner ubisoft logo"
          className="past-sponsor-img"
          loading="lazy"
        />
      </div>
    </div>
  );
}
