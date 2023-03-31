import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Airbnb from "../Assets/airbnb.png";
import hubspot from "../Assets/hubspot.png";
import microsoft from "../Assets/microsoft.png";
import goog from "../Assets/google.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  // const routeChange = () =>{ 
  //   let path = `SignUp`; 
  //   navigate(path);
  // }

  function handleClick(){
    navigate("/SignUp");
  }

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <div className="new-container">
            <div className="new one">
              New
            </div>
            <div className="new two">
            Stay connected to the upcoming & Recent jobs
            </div>
          </div>
          <h1 className="primary-heading">
            Your Solution 
            Legal Consultancy
          </h1>
          <p className="primary-text">
            We are here to help you take care of your legality 
            with the best service especially for you.
          </p>
          <button className="secondary-button" onClick={handleClick}>
            Get Started 
          </button>
          <p className="bottom-text">
            Trusted by 10+ companies in indonesia
          </p>
          <div className="image-container">
            <div className=" block a">
              <img src={Airbnb} alt=""/>
            </div>
            <div className=" block b">
              <img src={hubspot} alt=""/>
            </div>
            <div className="block c">
              <img src={microsoft} alt=""/>
            </div>
            <div className="block d">
              <img src={goog} alt=""/>
            </div>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
          <div className="shifter-name">
            <p className="name-of">
              Tiara Andini<br/>
            </p><br/>
            <p className="profession">
              -Lawyer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
