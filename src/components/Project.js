import React from "react";
import "../styles/sectionThree.css";

import projectsData from "../data.json";
import { motion } from "framer-motion";

function Project() {
  const { projects } = projectsData;

  return (
    <div className="projectContainer">
      {projects.map((project, index) => (
        <a
          href={project.url}
          className="linkProjects"
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <motion.div
            className="project"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <span className="projectNumber">{project.number}</span>
            <img
              src={project.img}
              className="picProject"
              alt="projectImage"
            ></img>
            <div className="titleSubtitleContainer">
              <h1 className="projectTitle">{project.title}</h1>
              <p className="projectSubtitle">{project.subTitle}</p>
            </div>
            <div className="hoverText">Click for more info</div>
            <div className="hoverText2">{project.description}</div>
          </motion.div>
        </a>
      ))}
    </div>
  );
}

export default Project;
