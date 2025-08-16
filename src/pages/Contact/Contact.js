// import React, {useState} from "react";
// import "./Contact.css";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// import Rotate from "react-reveal/Rotate";   ye bhi comment hi rakhna hai
// import { Rotate } from 'react-awesome-reveal';
// import Slide from "react-reveal/Slide";  ye nhi comment hi rakhan hai
// import { Slide } from 'react-awesome-reveal';

// import LightSpeed from "react-reveal/LightSpeed";  ye to ese hi rakhni hai



// import { toast } from 'react-toastify';
// import  axios  from 'axios';


 
// const Contact = () => {
 
//   const [name, setname] = useState("")
//   const [email, setEmail] = useState("")
//   const [msg, setmsg] = useState("")

  //  handle submit button message
  // const handleSubmit = async(e) =>{
  //   e.preventDefault();
  //   try {
  //     if (!name || !email || !msg) {
  //       toast.error("Please Provide all fields");
  //       return;
  //     }
  //      const res = await  axios.post('/api/v1/portfolio/sendEmail',{name,email,msg})
     //  validation success
  //     if (res.data.success) {
  //       toast.success(res.data.message)
  //       setname("")
  //       setEmail("")
  //       setmsg("")
  //     }else{
  //        toast.error(res.data.message)
  //     }
  //   } catch (error) {
  //     console.log(error);
      
      
  //   }
  // }
//   return (
//     <>
//       <div className="  contact" id="contact">
//         <div className=" card card0 border-0">
//           <div className=" row">
//             <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 " id="contact">
//               <div className="card1">
//                 <div className="row border-line">
//                 <Slide>
//                   <img
//                     src="/assets/image.png"
//                     alt="contact"
//                     className="image"
//                   />
//                   </Slide>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-6">
//             <Rotate>
//               <div className=" card2 d-flex card border-0 px-4 py-5">
//                 <div className="row">
//                   <div className="row">
//                     <h6>
//                       {" "}
//                       Contact With
//                       <a
//                         href="https://www.linkedin.com/in/virendra-dangi-94122a250/"
//                         className="ms-2"
//                       >
//                         <FaLinkedin color="blue" size={30} />
//                       </a>
//                       <a
//                         href="https://github.com/VDangiji"
//                         className="ms-2"
//                       >
//                         <FaGithub size={30} color="black" />
//                       </a>
//                       <a
//                         href="https://www.instagram.com/shyam_premi_virendra_dangi/"
//                         className="ms-2"
//                       >
//                         <FaInstagram size={30} color="#E1306C" />
//                       </a>
//                       <a
//                         href="https://www.facebook.com/virendra.dangi.1485"
//                         className="ms-2"
//                       >
//                         <FaFacebook size={30} color="#1877F2" />
//                       </a>
//                       <a href="https://wa.me/919009488818?text=Hi%20Virendra!%20👋%20Maine%20aapka%20portfolio%20check%20kiya%20aur%20really%20impressed%20hu%20aapke%20work%20se.%20🔥%20Ek%20collaboration%20ke%20liye%20baat%20karna%20chahta%20tha.%20😊" className="ms-2">
//                         <FaWhatsapp size={30} color="#25D366" />
//                       </a>
//                     </h6>
//                   </div>
//                   <div className=" row px-3 mb-4">
//                     <div className="line" />
//                     <small className=" or text-center">OR</small>
//                     <div className="line" />
//                   </div>
//                   <div className=" row px-3">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Enter your Name"
//                       className="mb-3"
//                       value={name}
//                       onChange={(e) => setname(e.target.value)}
//                     />
//                   </div>
//                   <div className=" row px-3">
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter your Email Address"
//                       className="mb-3"
//                       value={email}
//                      onChange={(e) => setEmail(e.target.value)}

//                     />
//                   </div>
//                   <div className=" row px-3">
//                     <textarea
//                       type="text"
//                       name="message"
//                       placeholder="Write your Message"
//                       className="mb-3"
//                       value={msg}
//                       onChange={(e) => setmsg(e.target.value)}
//                     />
//                   </div>
//                   <div className=" row px-3">
//                     <button className="button" 
//                     onClick={handleSubmit}>
//                       SEND MESSAGE
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               </Rotate>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;





// ======================================================

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
        return; // updated: added return to stop form submission if fields empty
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", { name, email, msg });
      if (res.data.success) {
        toast.success(res.data.message);
        setName(""); // updated: reset form fields on success
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later."); // updated: better error handling message
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card0">
        {/* updated: separated image and form containers with flexbox in CSS */}
        <div className="card1 border-line">
          <Slide>
            {/* updated: image styled to be responsive */}
            <img src="/assets/image.png" alt="Contact" className="image" />
          </Slide>
        </div>

        <div className="card2">
          <Rotate>
            {/* updated: social icons wrapped in flex container with hover scale */}
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

            {/* updated: added separator with flexbox */}
            <div className="separator">
              <div className="line" />
              <small className="or">OR</small>
              <div className="line" />
            </div>

            {/* updated: replaced divs with form and added required attributes */}
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required // updated: added required for validation
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
                rows={5} // updated: added rows for textarea height control
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

