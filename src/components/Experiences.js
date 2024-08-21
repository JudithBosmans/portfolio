import React from "react";
import "../styles/sectionTwo.css";

const Experiences = () => {
  return (
    <div className="experiencesContainer">
      <div className="Experience1">
        <div className="experienceTitle">
          <h1>EXPERIENCE</h1>
        </div>
        <div className="Experience3">
          <div className="experience3">
            <h2 className="titleExperience3">Developer</h2>
            <div className="textExperience3">
              <p>FamousGrey</p>
              <p>(BIS-Intern) Aug'24-Feb'25</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="Experience1">
        <div className="experience2">
          <h2 className="titleExperience2">Brand design</h2>
          <div className="textExperience1">
            <p>Bossies Wijnbar</p>
            <p>(Family) '22-...</p>
          </div>
        </div>
      </div> */}

      <div className="Experience2">
        <div className="experience2">
          <h2 className="titleExperience2">Asset & Visuals design</h2>
          <div className="textExperience2">
            <p>Estee Lauder Companies</p>
            <p>(Intern) Jan'24-Apr'24</p>
          </div>
        </div>
      </div>

      <div className="experience1">
        <h2 className="titleExperience1">Student UX/UI designer</h2>
        <div className="textExperience1">
          <p>In The Pocket</p>
          <p>(Duaal) Jan'22-Jun'23</p>
        </div>
      </div>

      <div className="Education">
        <div className="educationTitle">
          <h1>EDUCATION</h1>
        </div>
        <div className="education1">
          <h2 className="titleEducation">Erasmus School of Brussels</h2>
          <div className="textEducation2">
            <p>Multimedia and Creative Technologies</p>
            <p>(Bachelor) 2021-2024</p>
          </div>
        </div>
      </div>

      <div className="Education">
        <div className="education2">
          <h2 className="titleEducation">Sint-Lukas Kunsthumaniora</h2>
          <div className="textEducation2">
            <p>Artistieke Opleiding</p>
            <p>(Humaniora) 2017-2021</p>
          </div>
        </div>
      </div>

      <div className="Skills">
        <div className="skillsTitle">
          <h1>SOFT(WARE)SKILLS</h1>
        </div>
        <div className="skillsText">
          <div className="skill1">
            <p>Adobe Creative Cloud</p>
            <p>Figma</p>
            <p>HTML & CSS</p>
            <p>UX/UI</p>
            <p>Javascript</p>
            <p>React, Vite, Vue, ...</p>
          </div>
          <div className="skill2">
            <p>Three.js</p>
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
