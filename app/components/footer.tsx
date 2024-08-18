import React from "react";
import "../css/footer.css";
import smallIcon from "assets/icons/cgd-transparent.png";
import { socials } from "../siteSettings/socials.json";

const Footer = () => {
  return (
    <footer className="footer flex lg:flex-row flex-col py-5 px-10 lg:px-14 justify-between lg:items-center w-full">
      <div className="">
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
      </div>
      <div className="hidden md:flex md:justify-center md:items-center">
        <img
          src={smallIcon}
          alt="cgd logo"
          className="hidden lg:block w-4/12 xl:w-3/12"
        />
      </div>
      <div className="social-wrapper-footer gap-y-4 lg:gap-y-2">
        <div className="social">Follow</div>
        <div className="flex flex-row justify-between md:justify-center lg:justify-between align-middle items-center">
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
                className="w-12 h-12 footer-svg md:mx-4 lg:mx-0"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
