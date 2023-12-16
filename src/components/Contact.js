import React from "react";
import "../styles/sectionFour.css";

import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="contactContainer">
      <h1 className="titleContact">DON'T FORGET TO CONTACT ME</h1>
      <h1 className="subtitleContact">THANK YOU & BYE :)</h1>

      <div className="svgContainer">
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href="https://www.linkedin.com/in/judith-bosmans-527428145/">
            <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 128 128">
              <title />
              <path
                fill="#f39b9a"
                class="cls-1"
                d="M106.09,20.5a1.41,1.41,0,0,1,1.41,1.41v84.19a1.41,1.41,0,0,1-1.41,1.41H21.91a1.41,1.41,0,0,1-1.41-1.41V21.91a1.41,1.41,0,0,1,1.41-1.41h84.19m0-6.5H21.91A7.91,7.91,0,0,0,14,21.91v84.19A7.91,7.91,0,0,0,21.91,114h84.19a7.91,7.91,0,0,0,7.91-7.91V21.91A7.91,7.91,0,0,0,106.09,14Z"
              />
              <rect
                fill="#f39b9a"
                class="cls-1"
                height="41.73"
                width="11.73"
                x="37.27"
                y="50.4"
              />
              <path
                fill="#f39b9a"
                class="cls-1"
                d="M77.23,50.4C67.18,50.4,67,56.21,67,56.61V50.4H55V92.13H67V68.31c0-1.86.55-5.86,6.23-5.86s5.63,5.73,5.63,5.73v24H90.73v-26C90.73,53.85,84,50.4,77.23,50.4Z"
              />
              <circle
                fill="#f39b9a"
                class="cls-1"
                cx="43.13"
                cy="41.73"
                r="5.86"
              />
            </svg>
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href="https://www.facebook.com/judith.bosmans.1/?locale=nl_NL">
            <svg viewBox="0 0 32 32">
              <g data-name="facebook fb face book" id="facebook_fb_face_book">
                <path
                  fill="#f39b9a"
                  d="M24,3H8A5,5,0,0,0,3,8V24a5,5,0,0,0,5,5h8a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H15V17h1a1,1,0,0,0,1-1V12.5A2.5,2.5,0,0,1,19.5,10H22v2H21a2,2,0,0,0-2,2v2a1,1,0,0,0,1,1h1.72l-.5,2H20a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V21h1a1,1,0,0,0,1-.76l1-4a1,1,0,0,0-.18-.86A1,1,0,0,0,23,15H21V14h2a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H19.5A4.51,4.51,0,0,0,15,12.5V15H14a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h1v6H8a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5H24a3,3,0,0,1,3,3V24a3,3,0,0,1-3,3H20a1,1,0,0,0,0,2h4a5,5,0,0,0,5-5V8A5,5,0,0,0,24,3Z"
                />
              </g>
            </svg>
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href="mailto:judobosmans@gmail.com">
            <svg viewBox="0 0 32 32">
              <g
                data-name="mail email e-mail letter"
                id="mail_email_e-mail_letter"
              >
                <path
                  fill="#f39b9a"
                  d="M28,13a1,1,0,0,0-1,1v8a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,0-2,0v8a3,3,0,0,0,.88,2.12A3,3,0,0,0,6,25H26a3,3,0,0,0,2.12-.88A3,3,0,0,0,29,22V14A1,1,0,0,0,28,13Z"
                />
                <path
                  fill="#f39b9a"
                  d="M15.4,18.8a1,1,0,0,0,1.2,0L28.41,9.94a1,1,0,0,0,.3-1.23,3.06,3.06,0,0,0-.59-.83A3,3,0,0,0,26,7H6a3,3,0,0,0-2.12.88,3.06,3.06,0,0,0-.59.83,1,1,0,0,0,.3,1.23ZM6,9H26a.9.9,0,0,1,.28,0L16,16.75,5.72,9A.9.9,0,0,1,6,9Z"
                />
              </g>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
