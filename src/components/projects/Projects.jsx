import React from "react";
import "./projects.css";
import { projectList } from "./projectList";

const Projects = () => {
  return (
    <div className="p">
      <div className="p-left">
        <h1 className="p-title">My Projects</h1>
      </div>
      <div className="p-right">
        {projectList.map((project) => (
          <div key={project.id} className="p-card">
            <div className="card-info">
              <img src={project.img} alt="" className="card-img" />
              <h2 className="card-title">{project.title}</h2>
              <p className="card-desc">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
