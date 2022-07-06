import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>I'm Serhii Yanchevskyi</h1>
      <p>
        Hello everyone, for about a year I have been studying html, css, js with
        a big bias towards js and react (now I am studying react, redux). During
        this time, I took many online courses, such as:
        <ul>
          <li>Ultimate Courses by Todd Motto</li>
          <li>FreeCodeCamp</li>
          <li>LearnJs</li>
        </ul>
      </p>
      <div>
        <a href="https://www.facebook.com/sergey.yanchevskii" target="_blank">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/facebook.png"}
            alt="facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/sergey_dobruyvecher/"
          target="_blank"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/images/instagram.png"}
            alt="instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/serhii-yanchevskyi-59ba93165/"
          target="_blank"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/images/linkedin.png"}
            alt="linkedin"
          />
        </a>

        <a href="https://github.com/SerhiiYan" target="_blank">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/github.png"}
            alt="github"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
