import React from "react";
import { getNavbarSections } from "./NavbarData";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./navbar.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../Firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "redux/action/Authe.action";
import { Tosted } from "component/utils/Tosted";
import Profile from "./Profile.auth";
const Navbar = () => {
  const dispatch = useDispatch();
  const getUser = useSelector((state) => state.user.user);
  const auth = getAuth();
  // console.log("userData=>>", getUser);
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      dispatch(login(result._tokenResponse));
      Tosted("Loging successfully");
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout(null));
        Tosted("Logout successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
    <div className="sticky-top">
      <nav className="NavMain navbar navbar-expand-lg ">
        <div className="container-fluid align-items-center d-flex">
          <div className="logoVisible">
            <Link to="/" className="logoSec">
              <img src={logo} alt="logo" className="w-100" />
            </Link>
          </div>
          <div className="profileVisible">
            <Profile
              getUser={getUser}
              signOut={signOut}
              signInWithGoogle={signInWithGoogle}
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="justify-content-evenly align-items-center collapse navbar-collapse "
            id="navbarSupportedContent"
            style={{ gap: "3rem" }}
          >
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="NavList nav-item justify-content-evenly ">
                  {getNavbarSections(!!getUser).map((item, ind) => (
                    <NavLink
                      key={ind}
                      to={item.path}
                      className="NavItems nav-link align-items-center d-flex "
                      activeclassname="active"
                    >
                      <div className="d-flex align-items-center">
                        <div>{item.icon}</div>
                        <div className="fonstWeight">{item.name}</div>
                      </div>
                    </NavLink>
                  ))}
                </li>
              </ul>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Blogs Here...."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className="pcProfile">
              <Profile
                getUser={getUser}
                signOut={signOut}
                signInWithGoogle={signInWithGoogle}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
