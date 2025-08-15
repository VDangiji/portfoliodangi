import React from "react";
import "./About.css";
import { Jump } from "react-awesome-reveal";
//  import Jump from "react-reveal/Jump"; 

const about = () => {
  return (
    <>
    <Jump>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img" >
            <img src="../assets/profile.jpeg" alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-content">
            <h1>About Me</h1>
            <p>
              I am Virendra Dangi, a Computer Science student with a strong
              interest and understanding of front-end and full-stack web
              development. I enjoy creating dynamic, responsive, and
              user-friendly web applications. Throughout my learning journey, I
              have worked with technologies such as HTML, CSS, JavaScript, and
              React, while also gaining experience in backend development with
              Node.js and databases like MySQL. I focus on writing clean,
              efficient, and optimized code to ensure applications are not only
              visually appealing but also fast and stable. I am constantly
              motivated to learn new technologies and apply them to real
              projects. I enjoy working on challenging problems as they enhance
              my problem-solving skills and critical thinking. My goal is to
              develop web solutions that are technically robust, improve user
              experience, and meet business objectives. I believe in teamwork
              and am always eager to collaborate on projects that push the
              boundaries of web development.
            </p>
          </div>
        </div>
      </div>
      </Jump>
    </>
  );
};

export default about;
