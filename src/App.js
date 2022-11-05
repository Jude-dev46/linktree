import React from "react";
import DisplayProfile from "./Components/DisplayProfile";
import Card from "./Components/UI/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Card>
        <Routes>
          <Route path="/" element={<DisplayProfile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Card>
    </BrowserRouter>
  );
}

export default App;
