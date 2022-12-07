import React from "react";
import "./contact.css";
import { Titles } from "../../components";

function contactBtnClicked() {
  window.open("mailto:jgarciagomez98@gmail.com");
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <Titles title={"Get in touch"} />
        <p className="contact__text">
          If you are interested in working together, don’t be afraid and say hi,
          my inbox is always open. I’ll try my best to get back to you!
        </p>
        <div className="contact__btn-container">
          <button className="contact__btn" onClick={contactBtnClicked}>
            Say hello!
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
