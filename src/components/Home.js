import React from "react";
import { Link, Route } from "react-router-dom";

import sectionOne from "../styles/sectionOne.css";

import Experiences from "../components/Experiences";
import Project from "../components/Project";
import Slides from "../components/Sketches";
import Contact from "../components/Contact";

import TitleImage from "../text/Title.png";

import { motion } from "framer-motion";

function Home() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="homeContainer">
      <motion.div
        className="navigation-container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="d-flex justify-content-between align-items-center">
          <motion.ul className="nav d-flex justify-content-center flex-grow-1">
            <motion.li className="nav-item">
              <a className="nav-link" href="#home-section">
                HOME
              </a>
            </motion.li>
            <motion.li className="nav-item">
              <a className="nav-link" href="#experiences">
                EXPERIENCES
              </a>
            </motion.li>
            <motion.li className="nav-item">
              <a className="nav-link" href="#projects">
                PROJECTS
              </a>
            </motion.li>
            <motion.li className="nav-item">
              <a className="nav-link" href="#slides">
                MORE
              </a>
            </motion.li>
          </motion.ul>
          <motion.button className="nav-link">
            <a href="#contact" className="contact-link">
              CONTACT
            </a>
          </motion.button>
        </div>
      </motion.div>

      <section id="home-section" className="home-section">
        <motion.div
          className="title"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* <motion.img
            src={TitleImage}
            alt="Sample"
            variants={item}
            className="title-image"
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 1 }}
          /> */}
          <motion.h1 className="title1" variants={item}>
            HELLO,
          </motion.h1>
          <motion.h1 className="title2" variants={item}>
            I'M JUDITH
          </motion.h1>
        </motion.div>
        <motion.div
          className="undertitle"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="portfolio" variants={item}>
            PORTFOLIO
          </motion.p>
          <div className="littleTitle">
            <motion.p variants={item}>GRAPHIC DESIGN</motion.p>
            <motion.p variants={item}>FRONTEND</motion.p>
            <motion.p variants={item}>UX/UI</motion.p>
          </div>
        </motion.div>
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="slides">
        <Slides />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
