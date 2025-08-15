import React from "react";
import "./Education.css";
import { MdSchool } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center uppercase">EDUCATION DETAILS</h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid black" }}
            date="2020-2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
             SSC | HSSC
            </h3>
            <h4 className="vertical-timeline-element-subtitle">R.R.M.B. Gujarti Boys Higher Sec. School Indore </h4>
            <p>
             MP Board, India
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid black" }}
            date="2023-2026"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
             B.Tech (Computer Science)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Sushila Devi Bansal College Of Technology Indore </h4>
            <p>
             Madhya Pradesh ,India
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
