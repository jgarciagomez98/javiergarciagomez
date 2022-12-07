import { React } from "react";
import "./headerButton.css";

function HeaderButton() {
  const handleClick = () => {
    const element = document.getElementById("about");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className="button" onClick={handleClick}>
      <p className="text">Know about me</p>
    </button>
  );
}

export default HeaderButton;
