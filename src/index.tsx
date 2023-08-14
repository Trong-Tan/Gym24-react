import { createRoot } from "react-dom/client";
import Reason from "./conponents/SectionReason";
import Navbar from "./conponents/Navbar";
import React from "react";
import "./main.css";
import Banner from "./conponents/Banner";
import Membership from "./conponents/Membership";
import Aboutus from "./conponents/Aboutus";

function App() {
  return (
    <div className="font-primary">
      <Navbar />
      <Banner />
      <Reason />
      <Membership />
      <Aboutus />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(<App />);
