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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio, eveniet corrupti corporis praesentium deserunt magni
              fugiat unde nisi alias repellendus voluptates eum veritatis.
              Consequuntur fuga, ea impedit earum architecto exercitationem.
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
        </div>
      </div>
    </div>
  );
}

export default App;
