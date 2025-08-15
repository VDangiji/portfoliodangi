import React, {useState} from "react";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
// import Rotate from "react-reveal/Rotate";
import { Rotate } from 'react-awesome-reveal';
// import Slide from "react-reveal/Slide";
import { Slide } from 'react-awesome-reveal';
// import LightSpeed from "react-reveal/LightSpeed";
import { toast } from 'react-toastify';
import  axios  from 'axios';


 
const Contact = () => {
 
  const [name, setname] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setmsg] = useState("")

  //  handle submit button message
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please Provide all fields");
       
      }
       const res = await  axios.post('/api/v1/portfolio/sendEmail',{name,email,msg})
      //  validation success
      if (res.data.success) {
        toast.success(res.data.message)
        setname("")
        setEmail("")
        setmsg("")
      }else{
         toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      
      
    }
  }
  return (
    <>
      <div className="  contact" id="contact">
        <div className=" card card0 border-0">
          <div className=" row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 " id="contact">
              <div className="card1">
                <div className="row border-line">
                <Slide>
                  <img
                    src="/assets/image.png"
                    alt="contact"
                    className="image"
                  />
                  </Slide>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
            <Rotate>
              <div className=" card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      {" "}
                      Contact With
                      <a
                        href="https://www.linkedin.com/in/virendra-dangi-94122a250/"
                        className="ms-2"
                      >
                        <FaLinkedin color="blue" size={30} />
                      </a>
                      <a
                        href="https://github.com/VDangiji"
                        className="ms-2"
                      >
                        <FaGithub size={30} color="black" />
                      </a>
                      <a
                        href="https://www.instagram.com/shyam_premi_virendra_dangi/"
                        className="ms-2"
                      >
                        <FaInstagram size={30} color="#E1306C" />
                      </a>
                      <a
                        href="https://www.facebook.com/virendra.dangi.1485"
                        className="ms-2"
                      >
                        <FaFacebook size={30} color="#1877F2" />
                      </a>
                      <a href="https://wa.me/919009488818?text=Hi%20Virendra!%20👋%20Maine%20aapka%20portfolio%20check%20kiya%20aur%20really%20impressed%20hu%20aapke%20work%20se.%20🔥%20Ek%20collaboration%20ke%20liye%20baat%20karna%20chahta%20tha.%20😊" className="ms-2">
                        <FaWhatsapp size={30} color="#25D366" />
                      </a>
                    </h6>
                  </div>
                  <div className=" row px-3 mb-4">
                    <div className="line" />
                    <small className=" or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className=" row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className=" row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email Address"
                      className="mb-3"
                      value={email}
                     onChange={(e) => setEmail(e.target.value)}

                    />
                  </div>
                  <div className=" row px-3">
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Write your Message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setmsg(e.target.value)}
                    />
                  </div>
                  <div className=" row px-3">
                    <button className="button" 
                    onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
