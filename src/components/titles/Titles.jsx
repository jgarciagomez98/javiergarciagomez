import React from "react";
import "./titles.css";

function Titles(props) {
  return (
    <div className="titles">
      <div className="tiles__container">
        <h1 className="title">
          {props.title}
          <div className="title__underline"></div>
        </h1>
      </div>
    </div>
  );
}

export default Titles;
