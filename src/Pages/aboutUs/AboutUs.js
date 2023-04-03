import React from "react";
import "./aboutUs.css";
import DisplayLottie from "component/lottieFile/LottieFiles";
import aboutus1 from "../../component/assets/lottieFiles/about-us1.json";
import aboutus2 from "../../component/assets/lottieFiles/about-us2.json";
import Footer from "component/footer/Footer";
import { Fade } from "react-reveal";

const AboutUs = () => {
  return (
    <>
      <div className="">
        <div className="mainContainer d-flex row col-12 justify-content-center ">
          <div className="d-flex col-lg-6 col-md-6 col-12 justify-content-center align-items-center">
            <Fade left>
              <h3>
                Share your Blogs and enjoy <br /> it Engage and educate <br />
                our audience with your..
              </h3>
            </Fade>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <Fade right>
              <DisplayLottie animationData={aboutus1} />
            </Fade>
          </div>
        </div>
        <div className="mainContainer d-flex col-12 justify-content-center">
          <div className="col-lg-6 col-md-6 col-12">
            <Fade left>
              <DisplayLottie animationData={aboutus2} />
            </Fade>
          </div>
          <div className="d-flex col-lg-6 col-md-6 col-12 justify-content-center align-items-center">
            <Fade right>
              <h3>
                Share your Blogs and enjoy <br /> it Engage and educate <br />{" "}
                our audience with your
              </h3>
            </Fade>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
