import React from "react";
import Typewriter from "typewriter-effect";
import blogerMen1 from "../../component/assets/lottieFiles/writing-men.json";
import "./style.css";
import DisplayLottie from "component/lottieFile/LottieFiles";
import { Link } from "react-router-dom";
import Footer from "component/footer/Footer";
import { Fade } from "react-reveal";
const Home = () => {
  return (
    <div>
      <div className="mainContainer d-flex row col-12 justify-content-center">
        <div className="textBox col-lg-7 col-md-6 col-12 mb-5">
          <Fade left>
            <div>
              <h1 className="text-center">
                Share your
                <span className="blogsTitle"> BLOGS </span> posts here !
              </h1>
            </div>
            <div className="mt-3">
              <h4 className="text-center ">
                Engage and educate our audience with your
                <span className="blogsTitle">
                  <Typewriter
                    options={{
                      strings: ["Writing Skills", "Ideas", "Pure Content"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h4>
              <div className="d-flex justify-content-center mt-4">
                <Link to="/new-blog" className="nav-link">
                  <button className="button-56">Share your Blogs !</button>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-lg-5 col-md-6 col-12">
          <Fade right>
            <DisplayLottie animationData={blogerMen1} />
          </Fade>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
