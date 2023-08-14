import React, { useState } from 'react';
import photogym from '../assets/images/photogym.png';
import photogym2 from '../assets/images/photogym2.png';
import photogym3 from '../assets/images/photogym3.png';

const images = [
    photogym,
    photogym2,
    photogym3,
  ];

export default function Aboutus(){
    return (
        <div className="grid grid-cols-1  lg:grid-cols-2 lg:grid-flow-row lg:gap-30 gap-9 mb-14 lg:mb-62.5">
            <div className="h-full  aspect-ratio-square">
                <h1 className="text-5xl text-center mb-30">About us</h1>
                <p className="text-center text-4 font-[300] ">Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq. m of space dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength, Life Fitness, and TechnoGym. <br />Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored to each individual's needs and goals. </p>
            </div>
            <div className=" h-full aspect-ratio-square">
                <img src={photogym2} className='w-[570px] h-[454px] mr-auto' alt="" />
            </div>
        </div>
    );
}