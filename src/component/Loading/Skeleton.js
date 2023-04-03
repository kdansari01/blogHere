import React from "react";
import "./skeleton.css";
const Skeleton = () => {
  return (
    <div className="d-flex row justify-content-center mt-4">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="col-lg-4 col-md-4 col-12 d-flex justify-content-evenly mb-5 align-items-center "
        >
          <div className="card loading justify-content-center">
            <div className="image"></div>
            <div className="content">
              <div className="description1"></div>

              <div className="description"></div>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="card loading">
        <div className="image"></div>
        <div className="content">
          <h4></h4>
          <div className="description"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Skeleton;
