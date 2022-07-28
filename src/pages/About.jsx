import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <div className="left">
        <img
          width={250}
          src={process.env.PUBLIC_URL + "/assets/images/photo.jpg"}
          alt="avatar"
        />
      </div>
      <div className="right">
        <h2>About me</h2>
        <p>
          As a person, I am very simple and humorous, I like to improvise. I
          love mentoring and helping my friend learn react and js. I have a lot
          of ideas (a walking idea generator) and one of them is a project to
          exchange things between people. I am comfortable with people who work
          as a team, I like to participate in the initial stages of the project,
          to understand scale. I want to work in an environment where the
          exchange of creative ideas and shared decision-making are paramount. I
          am interested in the rapid growth of my skills and I am ready for
          anything.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
