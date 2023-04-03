import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { CgProfile } from "react-icons/cg";

export const ProfileModal = ({ profile, firstName, lastName, email }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="btn w-100"
        style={{ border: "none" }}
      >
        <CgProfile /> Profile
      </button>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row col-12">
            <div className="col-4 circle">
              <img
                src={profile}
                alt=".."
                style={{
                  width: "100%",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="col-8">
              <div className="d-flex justify-content-between">
                <h4>First Name</h4>
                <h4>Last Name</h4>
              </div>
              <div className="d-flex justify-content-between">
                <p>{firstName}</p>
                <p>{lastName}</p>
              </div>
              <div>
                <h4>Email id :</h4>
              </div>
              <div>
                <p>{email}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
