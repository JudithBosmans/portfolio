import React from "react";
import "../styles/sectionThree.css";

import { motion } from "framer-motion";

const projects = [
  {
    number: "1",
    title: "Sprint 1",
    subTitle: "#Frontend #Animation",
    img: "/pics/helmHalf.png",
    url: "./project1.js",
  },
  {
    number: "2",
    title: "Sprint 2",
    subTitle: "#Threejs #Porsche",
    img: "/pics/proscheHalf.png",
    url: "./project2.js",
  },
  {
    number: "3",
    title: "Sprint 3",
    subTitle: "#React Three Fiber #Cannonjs",
    img: "/pics/trackHalf.png",
    url: "./project3.js",
  },
  {
    number: "4",
    title: "Sprint 4",
    subTitle: "#Ready Player me #Avatar creator",
    img: "/pics/avatarHalf.png",
    url: "./project4.js",
  },
];

function Project() {
  return (
    <div className="projectContainer">
      {projects.map((project, index) => (
        <a href={project.url} className="linkProjects">
          <motion.div
            className="project"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <span className="projectNumber">{project.number}</span>
            <div className="titleSubtitleContainer">
              <h1 className="projectTitle">{project.title}</h1>
              <p className="projectSubtitle">{project.subTitle}</p>
            </div>
          </motion.div>
        </a>
      ))}
    </div>
  );
}

export default Project;
