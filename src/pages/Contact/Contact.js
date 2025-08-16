
import React, { useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Rotate, Slide } from "react-awesome-reveal";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", { name, email, msg });
      if (res.data.success) {
        toast.success(res.data.message);
        setName(""); 
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later."); 
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card0">
        
        <div className="card1 border-line">
          <Slide>
    
            <img src="/assets/image.png" alt="Contact" className="contact-image" />
          </Slide>
        </div>

        <div className="card2">
          <Rotate>
           
            <h6 className="social-heading">
              Contact With{" "}
              <a href="https://www.linkedin.com/in/virendra-dangi-94122a250/" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaLinkedin color="blue" size={30} />
              </a>
              <a href="https://github.com/VDangiji" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaGithub size={30} color="black" />
              </a>
              <a href="https://www.instagram.com/shyam_premi_virendra_dangi/" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaInstagram size={30} color="#E1306C" />
              </a>
              <a href="https://www.facebook.com/virendra.dangi.1485" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaFacebook size={30} color="#1877F2" />
              </a>
              <a href="https://wa.me/919009488818?text=Hi%20Virendra!%20👋%20Maine%20aapka%20portfolio%20check%20kiya%20aur%20really%20impressed%20hu%20aapke%20work%20se.%20🔥%20Ek%20collaboration%20ke%20liye%20baat%20karna%20chahta%20tha.%20😊" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaWhatsapp size={30} color="#25D366" />
              </a>
            </h6>

            
            <div className="separator">
              <div className="line" />
              <small className="or">OR</small>
              <div className="line" />
            </div>

         
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                name="message"
                placeholder="Write your Message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                required
                rows={5} 
              />
              <button type="submit" className="button">
                SEND MESSAGE
              </button>
            </form>
          </Rotate>
        </div>
      </div>
    </div>
  );
};

export default Contact;

