import React, { useState } from "react";
import photogym from "../assets/images/photogym.png";
import photogym2 from "../assets/images/photogym2.png";
import photogym3 from "../assets/images/photogym3.png";

const images = [photogym, photogym2, photogym3];

export default function Aboutus() {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 lg:grid-flow-row lg:gap-30 gap-9 mb-14 lg:mb-62.5">
      <div className="h-full  aspect-ratio-square">
        <h1 className="text-5xl text-center mb-30">About us</h1>
        <p className="justify-center items-center text-4 font-[300] ">
          Gym24 is a leading fitness center located near Grushevka metro
          station, offering over 1500 sq. m of space dedicated to
          top-of-the-line workout equipment from leading brands such as Hammer
          Strength, Life Fitness, and TechnoGym.
          <br />
          <br />
          With affordable membership options, Gym24 is accessible to everyone
          who wants to reach their fitness goals, whether it's building
          strength, increasing endurance, or losing weight.
          <br />
          <br />
          Certified trainers at Gym24 provide expert guidance and support to
          develop personalized workout plans tailored to each individual's needs
          and goals.
        </p>
      </div>
      <div className=" h-full aspect-ratio-square grid grid-flow-col gap-5 ">
        <img src={photogym} className="lg:hidden" alt="" />
        <img
          src={photogym2}
          className="lg:w-[570px] lg:h-[454px] mr-auto"
          alt=""
        />
        <img src={photogym3} className="lg:hidden" alt="" />
      </div>
    </div>
  );
}
