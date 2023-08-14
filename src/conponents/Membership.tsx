import React, { useState } from 'react';
import check from '../assets/svgs/check.svg';
import Button from './ui/Button'


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
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? memberships.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === memberships.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeMembership = memberships[activeIndex];

  return (
    <div className="mb-35">
      <h2 className="text-5xl text-center mb-30">Gym membership</h2>
      <div className='hidden lg:block'>
        <div className="grid grid-cols-3 gap-16">
          {memberships.map(membership => (
            <div
              key={membership.title}
              className="bg-neutral-800 rounded-[10px] flex justify-center items-center flex-col"
            >
              <div className="text-2xl text-center font-medium py-5 w-full border-b border-black">
                <p>{membership.title}</p>
                <p>{membership.price}</p>
              </div>
              <div className="px-6 mt-7 h-41 flex flex-col gap-4">
                {membership.benefits.map(benefit => (
                  <p key={benefit} className="flex gap-3">
                    <img src={check} alt="" />
                    <span>{benefit}</span>
                  </p>
                ))}
              </div>
              <Button className="py-1.5 w-fit my-9">Buy</Button>
            </div>
          ))}
        </div>
      </div>
      <div id="carouselExampleControls" className="relative lg:hidden " data-te-carousel-init data-te-ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {memberships.map((membership, index) => (
            <div
              key={membership.title}
              className={`relative float-left ${index === activeIndex ? '' : 'hidden'} w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
              data-te-carousel-item
              data-te-carousel-active={index === activeIndex ? true : undefined}
            >
              <div
              key={membership.title}
              className="bg-neutral-800 rounded-[10px] flex justify-center items-center flex-col"
            >
              <div className="text-2xl text-center font-medium py-5 w-full border-b border-black">
                <p>{membership.title}</p>
                <p>{membership.price}</p>
              </div>
              <div className="px-6 mt-7 h-41 flex flex-col gap-4">
                {membership.benefits.map(benefit => (
                  <p key={benefit} className="flex gap-3">
                    <img src={check} alt="" />
                    <span>{benefit}</span>
                  </p>
                ))}
              </div>
              <Button className="py-1.5 w-fit my-9">Buy</Button>
            </div>
            </div>
          ))}
        </div>

        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="prev"
          onClick={prevSlide}
        >
          <span className="inline-block h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="next"
          onClick={nextSlide}
        >
          <span className="inline-block h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
    
  );
}
