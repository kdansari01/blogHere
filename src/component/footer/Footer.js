import React from "react";
import logo from "../assets/logo.png";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsGoogle,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-white text-muted border">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "100px", height: "100px" }}
                />
                <span className=" fw-bold mb-4">
                  BLOGS<span className="fs-2">Here</span>
                </span>
                <p>
                  We welcome a diverse range of topics and perspectives that can
                  engage and educate our audience. Feel free to contribute and
                  showcase your writing skills.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
                <h6 className="text-uppercase fw-bold mb-4">ABOUT US</h6>
                <p>
                  <Link  className="text-reset nav-link">
                    Career
                  </Link>
                </p>
                <p>
                  <Link  className="text-reset nav-link">
                    Place
                  </Link>
                </p>
                <p>
                  <Link  className="text-reset nav-link">
                    Online Platform
                  </Link>
                </p>
                <p>
                  <Link  className="text-reset nav-link">
                    Custmore care
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">COMPANY</h6>
                <p>
                  <Link className="text-reset nav-link">
                    Career Team
                  </Link>
                </p>
                <p>
                  <Link className="text-reset nav-link">
                    Blogs
                  </Link>
                </p>
                <p>
                  <Link className="text-reset nav-link">
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link className="text-reset nav-link">
                    Our Tech
                  </Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">LEGAL</h6>
                <p>
                  <Link className="text-reset nav-link">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link className="text-reset nav-link">
                    Term & Conditions
                  </Link>
                </p>
                <p>
                  <Link className="text-reset nav-link">
                    Cookie Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span> © 2021 Copyright: KDansari</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/khusmuddin.ansari.7"
              className="me-4 link-secondary"
            >
              <BsFacebook style={{ fontSize: 30 }} />
            </a>
            <Link  className="me-4 link-secondary">
              <BsTwitter style={{ fontSize: 30 }} />
            </Link>
            <Link  className="me-4 link-secondary">
              <BsGoogle style={{ fontSize: 30 }} />
            </Link>
            <a
              href="https://www.instagram.com/kdansari02/"
              className="me-4 link-secondary"
            >
              <BsInstagram style={{ fontSize: 30 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/khusmuddin-ansari/"
              className="me-4 link-secondary"
            >
              <BsLinkedin style={{ fontSize: 30 }} />
            </a>
            <a
              href="https://github.com/kdansari01"
              className="me-4 link-secondary"
            >
              <BsGithub style={{ fontSize: 30 }} />
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
