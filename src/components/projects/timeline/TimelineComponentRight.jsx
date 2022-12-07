import React from "react";
import "./timelineComponentRight.css";
import { ProjectsRight, RolesRight } from "../../../components";

function TimelineComponentRight(props) {
  return (
    <div className="timeline__component-right">
      <div className="roles__right-container">
        <RolesRight project={props.project} />
      </div>
      <div className="projects__right-container">
        <ProjectsRight project={props.project} openLink={props.openLink} />
      </div>
    </div>
  );
}

export default TimelineComponentRight;
