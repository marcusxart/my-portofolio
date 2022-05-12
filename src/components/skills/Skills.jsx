import React from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
const Skills = () => {
  return (
    <div className="s">
      <div className="s-left">
        <h1 className="s-title">My Skills</h1>
      </div>
      <div className="s-right">
        <div className="s-card">
          <FontAwesomeIcon
            icon={faHtml5}
            size="8x"
            style={{ color: "#DD4B25" }}
          />
        </div>
        <div className="s-card">
          <FontAwesomeIcon icon={faJs} size="8x" style={{ color: "#F6D845" }} />
        </div>
        <div className="s-card">
          <FontAwesomeIcon
            icon={faReact}
            size="8x"
            style={{ color: "#5ED3F3" }}
          />
        </div>
      </div>
      <div className="s-other-wrapper">
        <h2 className="s-other css3">CSS3</h2>
        <h2 className="s-other es6">Es6</h2>
        <h2 className="s-other git">Git</h2>
        <h2 className="s-other sass">Sass</h2>
        <h2 className="s-other redux">Redux</h2>
        <h2 className="s-other figma">Figma</h2>
        <h2 className="s-other html">HTML5</h2>
      </div>
    </div>
  );
};

export default Skills;
