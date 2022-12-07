import React, { Fragment } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./navbar.css";

const Links = () => (
  <Fragment>
    <p>
      <a href="#home" className="home__link nav__link">
        Home
        <div className="navbar__links-underline"></div>
      </a>
    </p>
    <p>
      <a href="#about" className="about__link nav__link">
        About
        <div className="navbar__links-underline"></div>
      </a>
    </p>
    <p>
      <a href="#work" className="work__link nav__link">
        Work
        <div className="navbar__links-underline"></div>
      </a>
    </p>
    <p>
      <a href="#contact" className="contact__link nav__link">
        Contact
        <div className="navbar__links-underline"></div>
      </a>
    </p>
  </Fragment>
);

const ResponsiveLinks = () => (
  <Fragment>
    <p>
      <a href="#home" className="responsive__links">
        Home
      </a>
    </p>
    <p>
      <a href="#about" className="responsive__links">
        About
      </a>
    </p>
    <p>
      <a href="#work" className="responsive__links">
        Work
      </a>
    </p>
    <p>
      <a href="#contact" className="responsive__links">
        Contact
      </a>
    </p>
  </Fragment>
);

const BurgerMenu = () => (
  <Fragment>
    <span className="rect rect1" id="rect1"></span>
    <span className="rect rect2" id="rect2"></span>
    <span className="rect rect3" id="rect3"></span>
  </Fragment>
);

function Navbar() {
  const sections = document.querySelectorAll("section");
  const navLink = document.querySelectorAll(".nav__link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 450;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLink.forEach((link) => {
      link.classList.remove("active");
      if (link.classList.contains(current + "__link")) {
        link.classList.add("active");
      }
    });
  });

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__links-container">
          <Links />
        </div>
      </div>

      <div className="navbar__responsive-container">
        <div className="navbar__responsive-burger_container">
          <BurgerMenu />
        </div>
      </div>

      <div className="navbar__responsive-links_container">
        <div className="navbar__responsive-links">
          <ResponsiveLinks />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
