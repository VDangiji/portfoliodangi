import React, { useState } from 'react';
import "./MobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
// import { FcVoicePresentation } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { Link } from "react-scroll";
// import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";

const MobileNav = () => {
    // handle open
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
//   handle menu click
    const handleMenuClick = () =>{
        setOpen(false);
    }
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <FaTimes
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title"> Virendra Dangi</span>
        </div>

        {open && (
          <div className="mobile-nav-menu">
            <div className="navbar-items">
              <div className="nav-items">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcHome /> Home
                  </Link>
                </div>
              </div>
              <div className="nav-items">
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcAbout /> About
                  </Link>
                </div>
              </div>
              <div className="nav-items">
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcReadingEbook /> Education
                  </Link>
                </div>
              </div>
              <div className="nav-items">
                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBiotech /> Tech Stack
                  </Link>
                </div>
              </div>

              <div className="nav-items">
                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcVideoProjector /> Projects
                  </Link>
                </div>
              </div>

              {/* <div className="nav-items">
                     <div className="nav-link">
                          <FcVoicePresentation /> Testimonial
                     </div>
                   </div> */}

              <div className="nav-items">
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBusinessContact /> Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
