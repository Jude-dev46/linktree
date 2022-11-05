import React, { useState } from "react";

import Modal from "./UI/Modal";

import "./ContactForm.css";
import Wrapper from "./Helpers/Wrapper";

const ContactForm = () => {
  const name = "Jude";
  const [modal, setModal] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  return (
    <Wrapper>
      <div>{modal && <Modal onConfirm={submitHandler} />}</div>
      <div className="contact-header">
        <div className="contact-header__container">
          <div className="contact__title">
            <div className="contact-title">
              <h1>Contact Me</h1>
              <p>
                Hi there, contact me to ask me about anything you have in mind.
              </p>
            </div>
          </div>
          <div className="form-content">
            <div className="form-items">
              <form onSubmit={submitHandler}>
                <div className="row">
                  <div className="name-row">
                    <div className="items item-1">
                      <div className="item__name">
                        <label htmlFor="first-name">First name</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          id="first_name"
                        />
                      </div>
                      <div className="item__name">
                        <label htmlFor="last-name">Last name</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter your last name"
                          id="last_name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="items item-2">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      id="email"
                    />
                  </div>
                  <div className="items item-3">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Send me a message and I'll reply as soon as possible..."
                      rows="4"
                      cols="50"
                    ></textarea>
                  </div>
                  <div className="items item-4">
                    <input type="checkbox" htmlFor="agreement" />
                    <label htmlFor="agreement">
                      You agree to providing your data to {name} who may contact
                      you
                    </label>
                  </div>
                </div>
                <div class="items item-5">
                  <button
                    type="sumbit"
                    id="btn__submit"
                    onClick={submitHandler}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
