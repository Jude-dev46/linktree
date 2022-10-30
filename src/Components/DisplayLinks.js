import React from "react";

import "./DisplayLinks.css";

const DisplayLinks = () => {
  return (
    <div className="links">
      <a href="" id="twitter">
        <button type="button">Twitter Link</button>
      </a>
      <a href="https://training.zuri.team/">
        <button type="button" id="btn__zuri">
          Zuri Team
        </button>
      </a>
      <a href="http://books.zuri.team">
        <button type="button" id="books">
          Zuri Books
        </button>
      </a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=<Jude_Oscar12>">
        <button type="button" id="book__python">
          Python Books
        </button>
      </a>
      <a href="https://background.zuri.team">
        <button type="button" id="pitch">
          Background Check for Coders
        </button>
      </a>
      <a href="https://books.zuri.team/design-rules">
        <button type="button" id="book__design">
          Design Books
        </button>
      </a>
    </div>
  );
};

export default DisplayLinks;
