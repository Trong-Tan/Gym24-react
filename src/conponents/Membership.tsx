import React, { useState } from 'react';
import check from '../assets/svgs/check.svg';
import Button from './ui/Button';

const memberships = [
  {
    title: 'Pass Trial',
    price: '$ 0',
    benefits: [
      'Access to the gym from 8:00 to 14:00',
      'The trainer on duty will introduce you to the gym'
    ]
  },
  {
    title: 'Pass Easy Start',
    price: '$ 119',
    benefits: [
      'Visit without restrictions 24/7',
      'Individual training program',
      'Access to the VTRAINER application',
      'Trainer support'
    ]
  },
  {
    title: 'Pass Free Time',
    price: '$ 49',
    benefits: [
      'The entrance time to the gym is from 14:00 to 16:00',
      'Without suspension of gym membership',
      'The trainer on duty will introduce you to the gym'
    ]
  },
  {
    title: 'Pass 1 Month 24/7',
    price: '$ 85',
    benefits: [
      'Visit without restrictions 24/7',
      'The trainer on duty will introduce you to the gym'
    ]
  },
  {
    title: 'Pass In Shape (AM)',
    price: '$ 165',
    benefits: [
      'Training in mini-groups until 14:00',
      'Without suspension of gym membership',
      'Classes with a trainer in a mini-group 3 times a week',
      'Trainer support'
    ]
  },
  {
    title: 'Pass In Shape (PM)',
    price: '$ 195',
    benefits: [
      'Training in mini-groups until 17:00',
      'Without suspension of gym membership',
      'Classes with a trainer in a mini-group 3 times a week',
      'Trainer support'
    ]
  }
];

export default function Membership() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? memberships.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === memberships.length - 1 ? 0 : prevIndex + 1));
  };

  const activeMembership = memberships[activeIndex];

  return (
    <div className="mb-35">
      <h2 className="text-5xl text-center mb-30">Gym membership</h2>
      <div className="flex  overflow-x-auto overflow-y-hidden custom-scrollbar scroll-smooth  lg:grid lg:grid-cols-3 gap-16 ">
        {memberships.map((membership) => (
          <div
            key={membership.title}
            className="bg-neutral-800 min-w-[270px] rounded-[10px] flex justify-center items-center flex-col">
            <div className="text-2xl text-center font-medium py-5 w-full border-b border-black">
              <p>{membership.title}</p>
              <p>{membership.price}</p>
            </div>
            <div className="px-6 mt-7 h-41 flex flex-col gap-4">
              {membership.benefits.map((benefit) => (
                <p key={benefit} className="flex gap-3">
                  <img src={check} alt="" />
                  <span>{benefit}</span>
                </p>
              ))}
            </div>
            <Button className="py-1.5 w-fit my-9 mt-[80px]">Buy</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
