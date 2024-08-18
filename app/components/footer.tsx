import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer flex lg:flex-row flex-col py-3 px-16 lg:px-48 w-full">
      <div className="info-wrapper-footer">
        <div className="info">Concordia Game Development</div>
        <a
          href="https://goo.gl/maps/22J1SBAVLrBCwsHk7"
          className="address"
          target="_blank"
        >
          2020 Mackay St, Unit P-105, Montreal, QC H3G 2M2
        </a>
      </div>
      <div className="contact-wrapper-footer">
        <div className="contact">Contact Us</div>
        <a href="mailto:game.development@concordia.ca" className="email">
          game.development@concordia.ca
        </a>
      </div>
      <div className="social-wrapper-footer">
        <div className="social">Follow</div>
        <div className="flex flex-row justify-between md:justify-evenly lg:justify-between align-middle items-center">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.target}
              className="min-h-10 min-w-10"
            >
              <img
                src={social.img}
                alt="bruh"
                className="w-12 h-12 footer-svg"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
