import React from "react";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <nav>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">RESUME</a>
          <a href="#">WORKS</a>
          <a href="#">CONTACT</a>
        </nav>
      </header>
      <div className="content">
        <div className="container-content">
          <div className="home">
            <h1>I'm Serhii Yanchevskyi</h1>
            <p>
              Hello everyone, for about a year I have been studying html, css,
              js with a big bias towards js and react (now I am studying react,
              redux). During this time, I took many online courses, such as:
              Ultimate Courses by Todd Motto, FreeCodeCamp, LearnJs
            </p>
            <div>
              <a href="#">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/facebook.png"}
                  alt="facebook"
                />
              </a>
              <a href="#">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/instagram.png"}
                  alt="instagram"
                />
              </a>
              <a href="#">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/linkedin.png"}
                  alt="linkedin"
                />
              </a>
              <a href="#">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/github.png"}
                  alt="github"
                />
              </a>
            </div>
          </div>
          <div className="about">
            <div className="left">
              <img
                width={250}
                src={process.env.PUBLIC_URL + "/assets/images/photo.jpg"}
                alt="avatar"
              />
            </div>
            <div className="right">
              <h2>ABOUT ME</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio, eveniet corrupti corporis praesentium deserunt magni
                fugiat unde nisi alias repellendus voluptates eum veritatis.
                Consequuntur fuga, ea impedit earum architecto exercitationem.
              </p>
            </div>
          </div>
          <div className="resume">
            <div className="work left">
              <div>
                <h2>Work experience</h2>
                <h3>Software Maintenance Specialist</h3>
                <p>Сompany «Kvant» 2011 - 2013 (Ukraine)</p>
                <ul>
                  <li>
                    Serviced the accounting program M.E. doc (not related to
                    programming or testing)
                  </li>
                </ul>
              </div>
              <div>
                <h3>Operator of electronic typing and layout</h3>
                <p>Company «Grodno Azot» 2015 - 2018</p>
                <ul>
                  <li>
                    Worked on such equipment: HEIDELBERG Suprasetter, mimaki
                    jv300-160{" "}
                  </li>
                  <li>Designed from large stands to small business cards</li>
                  <li>Printed large format images and much more. </li>
                </ul>
              </div>
              <div>
                <h3>Social Media Evaluator</h3>
                <p>Company «Appen» 2018 - 2022</p>
                <ul>
                  <li>
                    Feedback on news feeds, advertisements and search results on
                    social networks such as facebook and instagram
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="education">
                <h2>Education</h2>
                <p>Ukrainian National Forestry University in Lviv</p>

                <ul>
                  <li>Bachelor in Management</li>
                  <li>2010 - 2015</li>
                </ul>
              </div>
              <div className="skills">
                <h2>Skills</h2>
                <h3>Programming languages:</h3>
                <ul>
                  <li>HTML/CSS, JavaScript, ReactJS</li>
                </ul>
                <h3>Development environments:</h3>
                <ul>
                  <li>Visual Studio, Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
