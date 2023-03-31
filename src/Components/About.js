import React from "react";
import envlaw from "../Assets/envlaw.png";
import coop from "../Assets/coop.png";
import inftech from "../Assets/inftech.png";
import other from "../Assets/other.png";

const About = () => {
  return (
    <div className="full-about">
      <div className="about-section-container">
        <div className="about-section-text-container">
        <h1 className="primary-heading-2">
          Why do we help with legalization?
        </h1>
        <p className="primary-text-2">
          We are here for UMKM in Indonesia to carry out the legalization process, which is sometimes complicated.
        </p>
        </div>
        <div className="image-dam">
          <div className="image-container-2">
            <div className=" block2 a2">
              <img className="adjust-image" src={envlaw} alt=""/>
              <p className="area-title">
                Environmental Law
              </p>
              <p className="area-about">
                Environmental legal issues might occur since the planned business activities are designed
              </p>
            </div>
            <div className=" block2 b2">
            <img className="adjust-image" src={coop} alt=""/>
            <p className="area-title">
            Corporate and Commercial
            </p>
            <p className="area-about">
            We provide a complete range of services for the continuity of your business activities.
            </p>
            </div>
          </div>
          <div className="image-container-3">
          <div className="block2 c2">
            <img className="adjust-image" src={inftech} alt=""/>
            <p className="area-title">
            Information and Technology
            </p>
            <p className="area-about">
            IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty.
            </p>
          </div>
          <div className="block2 d2">
            <img className="adjust-image" src={other} alt=""/>
            <p className="area-title">
            Other Services
            </p>
            <p className="area-about">
            In dealing with disruptive economic and legal challenge, our firm also provide various legal services.
            </p>
          </div>
          </div>
        </div>
      </div>
      <div className="about-bott">
          <div className="some-part">
            <p className="some-count">Some count that matters</p>
            <p className="achievement">Our achievement in the journey depicted in numbers</p>
            <div className="stats-part">
              <div className="box1">
                <p class="num">30</p>
                <p className="nums-stat">Clients</p>
              </div>
              <div className="box1">
                <p class="num">300+</p>
                <p className="nums-stat">Taken business legalities</p>
              </div>
              <div className="box2">
                <p class="num">8</p>
                <p className="nums-stat">Years of Journey</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
