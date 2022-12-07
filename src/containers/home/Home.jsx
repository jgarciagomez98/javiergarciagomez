import React from "react";
import "./home.css";
import { HeaderButton } from "../../components";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__text-container">
          <h1 className="subtitle">Hi, my name is</h1>
          <h1 className="home__title">Javier Garcia, and I love videogames.</h1>
          <h1 className="description">
            I'm a junior video game developer specializing in programming and
            level design. Currently, I'm continuing to improve my programming
            and designing skills by doing some small projects.
          </h1>
        </div>
        <div className="home__button-container">
          <HeaderButton />
        </div>
      </div>
    </section>
  );
}

export default Home;
