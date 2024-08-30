import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Creative.css";

import data from "../data.json";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

const Creative = () => {
  const { creativeWork } = data;
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (section, imageSrc) => {
    const imageObj = section.images.find(
      (img) => (img.src || img) === imageSrc
    );

    const description = imageObj?.hoverDescription || section.description;

    setSelectedItem({
      title: section.title,
      image: imageSrc,
      description: description,
    });
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId) {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
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
        {creativeWork.map((section, index) => (
          <React.Fragment key={index}>
            <Row className="section-title">
              <h2 className="text-left">{section.title}</h2>
              <p className="text-left">{section.subtitle}</p>
            </Row>
            <Row>
              {section.images.map((image, imgIndex) => (
                <Col key={`${index}-${imgIndex}`} md={4} className="mb-4">
                  <div
                    className="image-container"
                    onClick={() =>
                      openModal(
                        section,
                        typeof image === "string" ? image : image.src
                      )
                    }
                  >
                    <img
                      src={typeof image === "string" ? image : image.src}
                      alt={`Creative work ${index + 1}, Image ${imgIndex + 1}`}
                      className="img-fluid"
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </React.Fragment>
        ))}
      </Container>

      {selectedItem && (
        <Modal
          className="custom-modal"
          show={true}
          onHide={closeModal}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="img-fluid"
            />
            <p>{selectedItem.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Creative;
