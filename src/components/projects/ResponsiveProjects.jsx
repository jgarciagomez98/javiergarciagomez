import React from "react";
import "./responsiveProjects.css";
import {
  Bankers_img,
  Flag_img,
  Egyptian_img,
  ProjectsData,
} from "../../assets";

function responsiveProjects(props) {
  const workImage = [
    { img: Bankers_img },
    { img: Flag_img },
    { img: Egyptian_img },
  ];

  return (
    <div className="responsive__projects">
      <div className="responsive__projects-container">
        <img
          src={workImage[props.project].img}
          alt="img"
          className="project__img"
        />
        <div className="responsive__projects-text_container">
          <div className="responsive__projects-header_container">
            <h1 className="responsive__projects-title">
              {ProjectsData[props.project].title}
            </h1>
            <p className="responsive__projects-years">
              {ProjectsData[props.project].year}
            </p>
            <div className="responsive__project-title_underline"></div>
          </div>
          <p className="responsive__projects-description">
            {ProjectsData[props.project].info}
          </p>
          <div className="responsive__roles-container">
            <ul className="responsive__roles-list">
              {ProjectsData[props.project].mainRole.map((item) => {
                return <li className="responsive__roles">{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="responsive__project-button_container">
          <button className="responsive__project-btn" onClick={props.openLink}>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default responsiveProjects;
