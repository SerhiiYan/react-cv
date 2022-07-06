import React from "react";

const Resume = () => {
  return (
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
              Worked on such equipment: HEIDELBERG Suprasetter, mimaki jv300-160{" "}
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
            <li>HTML/CSS, JavaScript, ReactJS(redux toolkit)</li>
          </ul>
          <h3>Development environments:</h3>
          <ul>
            <li>Visual Studio, Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
