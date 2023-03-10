import React from "react";
import "./About.scss";
import signature from "../assets/images/signature.jpg";
import about from '../assets/images/about.jpg';
//import box from "../assets/images/Capture.PNG";
const About = () => {
  return (
    <div className="about_container">
      <div className="about_nested about_box1">
        <h1 className="about_title">
          WE ARE <span className="the_lidear">THE LEADER</span> IN CONSTRUCTION
          INDUSTRY
        </h1>
        <h3 className="nested-title">
          TEMPOR ERAT ELITR AT REBUM AT AT CLITA. DIAM DOLOR DIAM IPSUM TEMPOR
          SIT DIAM AMET DIAM ET EOS LABORE
        </h3>
        <p className="bottom_text">
          Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor
          diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet
          diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed
          stet no labore lorem sit. Sanctus clita duo justo et tempor
        </p>
        <div className="nested_box1">
          <div>
            <p>
              <i class="fa-solid fa-check"></i> perfect planing
            </p>

            <p>
              {" "}
              <i class="fa-solid fa-check"></i> professional Workers
            </p>

            <p>
              {" "}
              <i class="fa-solid fa-check"></i>first working process
            </p>
          </div>
          <div>
            <p>
              {" "}
              <i class="fa-solid fa-check"></i> perfect planing
            </p>

            <p>
              <i class="fa-solid fa-check"></i>professional Workers
            </p>

            <p>
              {" "}
              <i class="fa-solid fa-check"></i> first working process
            </p>
          </div>
        </div>
        <p className="bottom_text2">
          Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor
          diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet
          diam et eos labore
        </p>
        <div className="about-signature">
          <img src={signature} alt="signature" />
        </div>
      </div>
      <div className="about_nested about_box2">
       <div className="bg-img">
	   <img
          className="box_2"
          src={about}
          alt="about"
          width="150"
          height="50"
        />
	   </div>
       
      </div>
    </div>
  );
};

export default About;
