import React from "react";

import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <div onClick={props.onConfirm} className="overlay"></div>
      <div className="modal-content">
        <h2>Form information</h2>
        <p>Form Sumbitted </p>
        <button className="close-modal" onClick={props.onConfirm}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Modal;
