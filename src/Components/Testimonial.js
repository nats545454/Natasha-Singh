import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Clients Testimonial</h1>
      </div>
      <div className="testi">
        <div className="testimonial-section-bottom dam1">
          <div className="upper-part">
            <p className="exper-title">
              Incredible Experience
            </p>
            <p className="exper1">
              We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.
            </p>
          </div>
          <div className="lower-part">
            <img className="photosss" src={ProfilePic} alt="" />
            <div className="photo-desc">
              <h4>Anya Tailor Joy</h4>
              <p className="my-wrk" >CEO, SF Industires</p>
            </div>
          </div>
        </div>
        <div className="testimonial-section-bottom dam2" >
          <div className="upper-part">
            <p className="exper-title">
            Dependable, Responsive, Professional Partner
            </p>
            <p className="exper1">
            Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations.
            </p>
          </div>
          <div className="lower-part">
            <img className="photosss" src={ProfilePic} alt="" />
            <div className="photo-desc">
              <h4>Anya Tailor Joy</h4>
              <p className="my-wrk" >CEO, SF Industires</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
