import React from "react";

import "./Contact.css";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Card from "./UI/Card";

const Contact = () => {
  return (
    <Card className="contact-content">
      <ContactForm />
      <Footer />
    </Card>
  );
};

export default Contact;
