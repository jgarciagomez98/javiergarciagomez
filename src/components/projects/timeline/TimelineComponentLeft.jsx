import React from "react";
import "./timelineComponentLeft.css";
import { ProjectsRight, RolesLeft, ProjectsLeft } from "../../../components";

function TimelineComponentLeft(props) {
  return (
    <div className="timeline__component-left">
      <div className="projects__left-container">
        <ProjectsLeft project={props.project} openLink={props.openLink} />
      </div>
      <div className="roles__left-container">
        <RolesLeft project={props.project} />
      </div>
    </div>
  );
}

export default TimelineComponentLeft;
