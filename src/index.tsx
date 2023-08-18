import { createRoot } from 'react-dom/client';
import Reason from './conponents/SectionReason';
import Navbar from './conponents/Navbar';
import React from 'react';
import './main.css';
import Banner from './conponents/Banner';
import Membership from './conponents/Membership';
import Aboutus from './conponents/Aboutus';
import Footer from './conponents/Footer';
import Staff from './conponents/Staff';

function App() {
  return (
    <div className="font-primary">
      <Navbar />
      <Banner />
      <Reason />
      <Membership />
      <Aboutus />
      <Staff />
      <Footer />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);
