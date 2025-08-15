import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";
import "./Home.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
const Home = () => {
  const [theme, setTheme] = useTheme();
  // handel theme lightchange
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <div className="theme-btn" onClick={handleTheme}>
            {theme === "light" ? (
              <BsMoonStarsFill size={30} />
            ) : (
              <BsFillSunFill size={30} />
            )}
          </div>
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "Mern Stack Developer!",
                    "UI/UX Designer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>

          <Fade bottom>
            <div className="home-button">
            <a className="btn btn-hire"
             href="https://api.whatsapp.com/send?phone=9009488818"
             rel ="noreferrer"
             taget="_blank"
             >Hire Me</a>
              {/* <button className="btn btn-hire">Hire Me</button> */}
              <a
                className="btn btn-cv"
                href={Resume}
                download=" Virendra Resume.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
