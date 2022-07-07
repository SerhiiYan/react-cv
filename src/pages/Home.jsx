import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <h1>I'm Serhii Yanchevskyi</h1>
      <p>
        Hello everyone, for about a year I have been studying html, css, js with
        a big bias towards js and react (now I am studying react, redux). During
        this time, I took many online courses, such as:
      </p>
      <div className="list">
        <ul>
          <li>Ultimate Courses by Todd Motto</li>
          <li>FreeCodeCamp</li>
          <li>LearnJs</li>
        </ul>
      </div>
      <div>
        <a
          href="https://www.facebook.com/sergey.yanchevskii"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/images/facebook.png"}
            alt="facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/sergey_dobruyvecher/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/images/instagram.png"}
            alt="instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/serhii-yanchevskyi-59ba93165/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/images/linkedin.png"}
            alt="linkedin"
          />
        </a>

        <a href="https://github.com/SerhiiYan" target="_blank" rel="noreferrer">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/github.png"}
            alt="github"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
