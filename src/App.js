import React from "react";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
