import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
  faInstagram,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./footer.css";

function openLinkedin() {
  openlinkInNewTab(
    "https://www.linkedin.com/in/javier-garcía-gómez-b1b561198/"
  );
}
function openGithub() {
  openlinkInNewTab("https://github.com/jgarciagomez98");
}
function openTwitter() {
  openlinkInNewTab("https://twitter.com/dovi_3");
}
function openItchIo() {
  openlinkInNewTab("https://jgarciagomez98.itch.io");
}

function openlinkInNewTab(url) {
  window.open(url, "_blank", "noopener, noreferrer");
}

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__media-container">
          {/* TODO: Add media links */}
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="footer__icon"
            onClick={openLinkedin}
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="footer__icon"
            onClick={openGithub}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="footer__icon"
            onClick={openTwitter}
          />
          <FontAwesomeIcon
            icon={faItchIo}
            className="footer__icon"
            onClick={openItchIo}
          />
        </div>
        <p className="footer__text">Designed & Built by Javier Garcia</p>
      </div>
    </div>
  );
}

export default Footer;
