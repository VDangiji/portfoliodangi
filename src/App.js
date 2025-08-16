import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/TechStack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Education";
import Contact from "./pages/Contact/Contact"; 
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import { JackInTheBox } from "react-awesome-reveal";
import MobileNav from './components/MobileNav/MobileNav';
 import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
      <ToastContainer/>
       <MobileNav/>
        <Layout />
        <About />
        <Education />
        <Techstack />
        <Projects />
        <Contact />
        <div className="footer pt-3 pb-3 ms-3 mt-md-3 mt-1">
        <JackInTheBox>
          <h4 className="text-center ">
            © 2025 Code by VDangi❤️ . All rights reserved.
          </h4>
          </JackInTheBox>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
