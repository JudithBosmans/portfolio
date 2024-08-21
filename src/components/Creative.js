import React from "react";
import "../styles/Creative.css";

import data from "../data.json";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Creative = () => {
  const { creativeWork } = data;
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

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

  return (
    <div className="creative-container">
      <motion.div
        className="navigation-container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="d-flex justify-content-between align-items-center">
          <motion.ul className="nav d-flex justify-content-center flex-grow-1">
            <motion.li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("home-section")}
              >
                HOME
              </button>
            </motion.li>
            <motion.li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("experiences")}
              >
                EXPERIENCES
              </button>
            </motion.li>
            <motion.li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("projects")}
              >
                PROJECTS
              </button>
            </motion.li>
            <motion.li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("slides")}
              >
                MORE
              </button>
            </motion.li>
          </motion.ul>
          <motion.button
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            CONTACT
          </motion.button>
        </div>
      </motion.div>
      <Container>
        {creativeWork && creativeWork.length > 0 ? (
          creativeWork.map((section, index) => (
            <div key={index} className="mb-5">
              <div className="sketchbookContainer">
                <h2>{section.title}</h2>
                <p>{section.subtitle}</p>

                <Row>
                  {section.images.map((img, imgIndex) => (
                    <Col key={imgIndex} md={4} className="mb-4">
                      <img
                        src={img}
                        alt={`Sketch ${imgIndex + 1}`}
                        className="img-fluid"
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          ))
        ) : (
          <p>Loading creative work...</p>
        )}
      </Container>
    </div>
  );
};

export default Creative;
