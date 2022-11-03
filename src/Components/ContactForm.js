import react from "react";

import "./ContactForm.css";

const ContactForm = () => {
  const submitHandler = () => {
    console.log("Submitted");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>First name</label>
        <input type="text" placeholder="Enter your first name" />
        <label>Last name</label>
        <input type="text" placeholder="Enter your last name" />
        <label>Email</label>
        <input type="email" placeholder="yourname@gmail.com" />
        <label>Message</label>
        <input
          type="text"
          placeholder="Send me a message and I'll reply as soon as possible"
        />
        <button type="radio">
          You agree to providing your data to Jude who may contact you
        </button>
        <button type="sumbit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
