import React from "react";
import "../styles/sectionThree.css";

import { motion } from "framer-motion";

const projects = [
  {
    number: "1",
    title: "The fall of Icarus",
    subTitle: "#React #Parallax #Storytelling",
    text: "The tale of Daedalus and his son Icarus. In this project you see the tragedy unfolding as you scroll.",
    img: "/pics/icons/icarus.png",
    description:
      "The tragedy of Daedalus and his son who flew too close to the sun. You see the tragedy unfold live as you are scrolling.",
    url: "https://the-fall-of-icarus.onrender.com/topic",
  },
  {
    number: "2",
    title: "Bossies Wijnbar",
    subTitle: "#Tailwind css #Brand Design",
    img: "/pics/icons/bossies.png",
    description:
      "My dad and I started a wine bar together in 2022. This website tells our story and information.",
    url: "https://bossies-wijnbar.onrender.com/",
  },
  {
    number: "3",
    title: "A Samurai Story",
    subTitle: "#React #Framer #Spring",
    img: "/pics/icons/samurai.png",
    description:
      "Hanakotobo is the symbolism that flowers carry in Japan. Trough that symbolism you follow a samurai's life story.",
    url: "https://a-samurai-story.onrender.com/",
  },
];

function Project() {
  return (
    <div className="projectContainer">
      {projects.map((project, index) => (
        <a href={project.url} className="linkProjects" target="_blank">
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
            <div className="hoverText">Click to see project</div>
            <div className="hoverText2">{project.description}</div>
          </motion.div>
        </a>
      ))}
    </div>
  );
}

export default Project;
