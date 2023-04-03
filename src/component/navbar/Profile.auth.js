import DisplayLottie from "component/lottieFile/LottieFiles";
import React from "react";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import userLogo from "../assets/lottieFiles/user-icon.json";
import { ProfileModal } from "component/utils/ProfileModal";

const Profile = ({ getUser, signOut, signInWithGoogle }) => {
  return (
    <div>
      <div
        className="dropdown cursor-pointer"
        style={{
          padding: "2px",
          width: "50px",
          height: "50px",
          objectFit: "cover",
          border: " 2px solid grey",
          borderRadius: "50%",
        }}
      >
        <div data-bs-toggle="dropdown" aria-expanded="false">
          {!getUser ? (
            <DisplayLottie
              animationData={userLogo}
              style={{ width: "100%", borderRadius: "50%" }}
            />
          ) : (
            <img
              src={getUser?.photoUrl}
              alt="User"
              style={{
                width: "100%",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          )}
        </div>
        <ul className="dropdown-menu customDrop" style={{ left: "-100%" }}>
          <li>
            {!getUser ? (
              <button className="dropdown-item" onClick={signInWithGoogle}>
                <AiOutlineLogin />
                Login
              </button>
            ) : (
              <div>
                <ProfileModal
                  profile={getUser?.photoUrl}
                  firstName={getUser?.firstName}
                  lastName={getUser?.lastName}
                  email={getUser?.email}
                />
                <button
                  className="btn dropdown-item"
                  onClick={signOut}
                  style={{ textAlign: "center" }}
                >
                  <AiOutlineLogout /> Logout
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
