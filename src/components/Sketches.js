import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Sketches.css";

const Slides = () => {
  return (
    <div className="sketchesContainer">
      <h2 className="more-title">MORE FUN (CREATIVE) STUFF!</h2>
      <Link to="/creative">
        <motion.button
          type="button"
          className="btn"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
        >
          MORE
        </motion.button>
      </Link>
    </div>
  );
};

export default Slides;
