import React from "react";
import "./rolesLeft.css";
import { Separator } from "../../../components";
import { ProjectsData } from "../../../assets";

function RolesLeft(props) {
  return (
    <div className="roles__left">
      <div className="years__container">
        <p className="years">{ProjectsData[props.project].year}</p>
      </div>
      <div className="timeline__decorator-left_container">
        <Separator />
      </div>
      <div className="roles__container">
        <ul className="roles__list">
          {ProjectsData[props.project].mainRole.map((item) => {
            return <li className="roles">{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default RolesLeft;
