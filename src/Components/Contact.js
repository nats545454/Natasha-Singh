import React from "react";
import john from "../Assets/contact-img.png";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="left-half">
        <h1 className="primary-heading">Complex Questions?</h1>
        <div className="contact-form-container">
          <p>Request for a personalized budget for your legal problem.
             We will send you a coupe options in 24 hours. You can have free consult , if a our first customer
          </p>
          <button className="secondary-button">Call Now</button>
        </div>
      </div>
      <div className="right-half">
        <img src={john} alt=""/>
      </div>
    </div>
  );
};

export default Contact;
