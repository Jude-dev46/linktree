import React from "react";
import DisplayLinks from "./DisplayLinks";

import "./DisplayProfile.css";
import ProfileTitle from "./ProfileTitle";
import SlackLink from "./SlackLink";
import Footer from "./Footer";

const DisplayProfile = () => {
  return (
    <div class="page">
      <ProfileTitle />
      <DisplayLinks />
      <SlackLink />
      <Footer />
    </div>
  );
};

export default DisplayProfile;
