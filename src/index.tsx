import { createRoot } from "react-dom/client";
import Reason from "./conponents/SectionReason";
import Navbar from "./conponents/Navbar";
import React from "react";
import "./main.css";
import Banner from "./conponents/Banner";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Reason />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(<App />);
