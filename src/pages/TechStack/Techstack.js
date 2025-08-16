
import React from "react";
import "./Techstack.css";
import { Bounce, Fade } from "react-awesome-reveal";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <div className="container techstack" id="techstack">
      <Bounce>
      <div className="techstack-header">
 <h2 className="section-title">Technologies Stack</h2>
        <hr />
        <p className="section-subtitle">
          👉 including programming Languages, frameworks, databases, front-end
          and back-end tools, and APIs
        </p>
      </div>
       
      </Bounce>

      <div className="techstack-grid">
        {TechstackList.map((tech) => (
          <Fade key={tech._id} direction="left">
            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <tech.icon />
              </div>
              <div className="tech-name">{tech.name}</div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
