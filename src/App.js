import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <ContentContainer>
          <Routes>
            <Route path="react-cv/" element={<Home />} />
            <Route path="react-cv/about" element={<About />} />
            <Route path="react-cv/resume" element={<Resume />} />
          </Routes>
        </ContentContainer>
      </div>
    </div>
  );
}

export default App;
