import React from "react";
import Logo from "../Assets/Logo2.svg";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FiDribbble } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer-whole">
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container">
            <img src={Logo} alt="" />
            <p>Lawliet</p>
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <p>Product</p>
            <span>Overview</span>
            <span>Features</span>
            <span>Tutorials</span>
            <span>Pricing</span>
            <span>Releases</span>
          </div>
          <div className="footer-section-columns">
            <p>Company</p>
            <span>About</span>
            <span>Press</span>
            <span>Careers</span>
            <span>Contact</span>
            <span>Partners</span>
          </div>
          <div className="footer-section-columns">
            <p>Support</p>
            <span>Help Center</span>
            <span>Terms and services</span>
            <span>Legal</span>
            <span>Privacy Policy</span>
            <span>Status</span>
          </div>
        </div>
      </div>
      <div className="footer-wrap-2">
        <p className="copyright"> 
        © 2021 Lawliet. All rights reserved
        </p>
        <div className="social-icons">
          <div className="circle"><BsTwitter /></div>
          <div className="circle"><FiDribbble /></div>
          <div className="circle"><BsYoutube /></div>
          <div className="circle"><BsInstagram /></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
