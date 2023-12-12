import React from "react";
import sectionTwo from "../styles/sectionTwo.css";

const Experiences = () => {
  return (
    <div className="experiencesContainer">
      <div className="Experience1">
        <div className="experienceTitle">
          <h1>EXPERIENCE</h1>
        </div>
        <div className="experience1">
          <h2 className="titleExperience1">Student UX/UI designer</h2>
          <div className="textExperience1">
            <p>In The Pocket</p>
            <p>(Project) 2022-2023</p>
          </div>
        </div>
      </div>

      <div className="Experience1">
        <div className="experience2">
          <h2 className="titleExperience2">Brand design</h2>
          <div className="textExperience1">
            <p>Bossies Wijnbar</p>
            <p>2022-...</p>
          </div>
        </div>
      </div>

      <div className="Education">
        <div className="educationTitle">
          <h1>EDUCATION</h1>
        </div>
        <h2 className="titleEducation">Erasmus School of Brussels</h2>
        <div className="textEducation2">
          <p>Multimedia and Creative Technologies</p>
          <p>2021-2024</p>
        </div>
      </div>

      <div className="Skills">
        <div className="skillsTitle">
          <h1>SOFT(WARE)SKILLS</h1>
        </div>
        <div className="skillsText">
          <div className="skill1">
            <p>Adobe software</p>
            <p>Figma</p>
            <p>HTML & CSS</p>
            <p>UX/UI</p>
            <p>Javascript</p>
            <p>React, Vite, Vue, ...</p>
          </div>
          <div className="skill2">
            <p>Threejs</p>
            <p>Maya & Unity</p>
            <p>Graphic design</p>
            <p>Teamplayer</p>
            <p>Growth Mindset</p>
            <p>Creative thinking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
