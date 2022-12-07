import React from "react";
import "./projectsLeft.css";
import {
  Bankers_img,
  Flag_img,
  Egyptian_img,
  ProjectsData,
} from "../../assets";

function ProjectsLeft(props) {
  const workImage = [
    { img: Bankers_img },
    { img: Flag_img },
    { img: Egyptian_img },
  ];

  return (
    <div className="project">
      <img
        src={workImage[props.project].img}
        alt="img"
        className="project__img"
      />
      <div className="project__text-container_left">
        <div className="project__title-container_left">
          <h1 className="project__title">
            {ProjectsData[props.project].title}
            <div className="project__title-underline"></div>
          </h1>
        </div>
        <p className="project__description">
          {ProjectsData[props.project].info}
        </p>
      </div>
      <div className="project__button-container">
        <button className="project__btn" onClick={props.openLink}>
          Learn more
        </button>
      </div>
    </div>
  );
}

export default ProjectsLeft;
