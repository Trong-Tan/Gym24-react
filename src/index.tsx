import { createRoot } from "react-dom/client";
import Navbar from "./conponents/Navbar";
import "./main.css";

function App() {
  return (
    <div>
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(<App />);
