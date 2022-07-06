import React from "react";

const About = () => {
  return (
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
          eveniet corrupti corporis praesentium deserunt magni fugiat unde nisi
          alias repellendus voluptates eum veritatis. Consequuntur fuga, ea
          impedit earum architecto exercitationem.
        </p>
      </div>
    </div>
  );
};

export default About;
