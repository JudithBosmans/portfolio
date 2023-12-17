import React from "react";
import "../styles/sectionThree.css";

import { motion } from "framer-motion";

const projects = [
  {
    number: "1",
    title: "Sprint 1",
    subTitle: "#Frontend #Animation",
    img: "/pics/icons/sprint1.svg",
    url: "https://github.com/JudithBosmans/DynamicTransitions.git",
  },
  {
    number: "2",
    title: "Sprint 2",
    subTitle: "#Threejs #Porsche",
    img: "/pics/icons/sprint2.svg",
    url: "https://github.com/JudithBosmans/ForrestAnimals.git",
  },
  {
    number: "3",
    title: "Sprint 3",
    subTitle: "#React Three Fiber #Cannonjs",
    img: "/pics/icons/sprint3.svg",
    url: "https://github.com/JudithBosmans/game-test.git",
  },
  {
    number: "4",
    title: "Sprint 4",
    subTitle: "#Ready Player me #Avatar creator",
    img: "/pics/icons/sprint4.svg",
    url: "https://github.com/JudithBosmans/rpm-test-web.git",
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
            <img
              src={project.img}
              className="picProject"
              alt="projectImage"
            ></img>
            <div className="titleSubtitleContainer">
              <h1 className="projectTitle">{project.title}</h1>
              <p className="projectSubtitle">{project.subTitle}</p>
            </div>
            <div className="hoverText">Click for repository</div>
            {/* Added line */}
          </motion.div>
        </a>
      ))}
    </div>
  );
}

export default Project;
