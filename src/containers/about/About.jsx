import React from "react";
import "./about.css";
import { Titles } from "../../components";
import { About_img } from "../../assets";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <Titles title={"About Me"} />
        <div className="about__content-container">
          <div className="about__img-container">
            <img src={About_img} alt="about" className="about__img" />
          </div>
          <div className="about__text-container">
            <p className="about__text">
              Hello! My name is Javier Garcia and I love all things that have to
              do with video games. My history in video game development started
              six years ago when I decided to study a career focused on them.
              <br></br> My strengths are programming and level design. And also,
              sometimes I make VFX.<br></br> Nowadays I work as a mobile
              developer in Android in Movetia. And my main tasks are maintenance
              and developing of mobile apps.<br></br> Here are a few
              technologies I’ve been working:
            </p>
            <div className="skills__container">
              <li className="skills">Unity</li>
              <li className="skills">Unreal Engine</li>
              <li className="skills">Java</li>
              <li className="skills">C++</li>
              <li className="skills">C#</li>
              <li className="skills">React</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
