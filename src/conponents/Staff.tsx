import React from 'react'; // Don't forget to import React
import photo from '../assets/images/photo.png';
import photo2 from '../assets/images/photo2.png';
import photo3 from '../assets/images/photo3.png';
import photo4 from '../assets/images/photo4.png';
import photo5 from '../assets/images/photo5.png';
import photo6 from '../assets/images/photo6.png';
import photo7 from '../assets/images/photo7.png';
import photo8 from '../assets/images/photo8.png';
import yb from '../assets/svgs/tw.svg';
import ig from '../assets/svgs/ig.svg';
import tw from '../assets/svgs/yt.svg';

const staffs = [
  {
    Image: photo,
    name: 'Victoria Shurpik'
  },
  {
    Image: photo2,
    name: 'Elizabeth Lavrinenko'
  },
  {
    Image: photo3,
    name: 'Ivan Gladkikh'
  },
  {
    Image: photo4,
    name: 'Lyudmila Sabilo'
  },
  {
    Image: photo5,
    name: 'Evgeny Gurkov'
  },
  {
    Image: photo6,
    name: 'Anatoly Prytytsky'
  },
  {
    Image: photo7,
    name: 'Maria Masyak'
  },
  {
    Image: photo8,
    name: 'Victor Ludkovich'
  }
];

export default function Staff() {
  return (
    <div className="mb-35">
      <h2 className="text-5xl text-center mb-30">Trainers staff</h2>
      <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {staffs.map((staff, index) => (
          <div key={index} className=" flex justify-center grid grid-flow-row gap-3 text-center ">
            <div className="bg-[#222] rounded-lg  p-3">
              <img src={staff.Image} alt={`Staff ${index + 1}`} />
              <p className="text-[18px] font-[700] leading-normal">{staff.name}</p>
              <div className="grid grid-flow-col gap-9 justify-center items-center">
                <img src={ig} alt="" />
                <img src={yb} alt="" />
                <img src={tw} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
