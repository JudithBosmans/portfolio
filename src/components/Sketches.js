import React from "react";
import { Link } from "react-router-dom";

import "../styles/Sketches.css";

const Slides = () => {
  return (
    <div className="sketchesContainer">
      {/* <h2 class="text-center">TAKE A LOOK AT MORE OF MY (CREATIVE) WORK!</h2> */}
      <Link to="/creative">
        <button type="button" className="btn">
          More
        </button>
      </Link>
    </div>
  );
};

export default Slides;
