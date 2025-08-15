import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="container projects" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here are some of my recent projects that I have worked on. You can
          find more details about each project by clicking on the links below.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            {/* project 1 */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src="/assets/car_rental.jpeg" alt="Car Rental" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center ">
                  <div className="ad-title m-auto ">
                    <h6 className="text-uppercase">Car Rental Website</h6>
                  </div>
                  <a
                    href="https://car-rental-iota-nine.vercel.app/"
                    className="ad-btn"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* project 2 */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src="/assets/3Diphone.jpeg" alt="3D iPhone Showcase" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Three.js</span>
                  <span className="card-detail-badge">Tailwind CSS</span>
                </div>
                <div className="card-body text-center ">
                  <div className="ad-title m-auto ">
                    <h6 className="text-uppercase">Apple 3D iPhone Showcase</h6>
                  </div>
                  <a
                    href="https://3-d-iphone-showcase.vercel.app/"
                    className="ad-btn"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* project 3 */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src="/assets/ElectraShop.jpeg" alt="Electra Shop" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Tailwind CSS</span>
                  {/* <span className="card-detail-badge">JavaScript</span> */}
                </div>
                <div className="card-body text-center ">
                  <div className="ad-title m-auto ">
                    <h6 className="text-uppercase">Electra Shop</h6>
                  </div>
                  <a
                    href="https://electra-shop-six.vercel.app/"
                    className="ad-btn"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            {/* project 4 */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src="/assets/ToDesktop.jpeg" alt="To Desktop" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">Tailwind CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center ">
                  <div className="ad-title m-auto ">
                    <h6 className="text-uppercase">To Desktop Website</h6>
                  </div>
                  <a
                    href="https://to-desk-top-ashy.vercel.app/"
                    className="ad-btn"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </> 
  );
};

export default Projects;
