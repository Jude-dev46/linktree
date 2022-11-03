import React from "react";

import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div class="contact-content">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <ContactForm />
    </div>
  );
};

export default Contact;
