import line from "../assets/svgs/line.svg";
import fitnessZones from "../assets/svgs/fitness-zones.svg";
import equipment from "../assets/svgs/equipment.svg";
import time from "../assets/svgs/time.svg";

const reasons = [
  {
    icon: line,
    title: "15000 sq.m.",
    desc: "A spacious gym for sports – a safe distance between exercise machines",
  },
  {
    icon: equipment,
    title: "More than 200 equipment",
    desc: "No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.",
  },
  {
    icon: fitnessZones,
    title: "4 fitness zones",
    desc: "From cardio to functional and cycle. Separate area for boxing and mixed martial arts",
  },
  {
    icon: time,
    title: "Round-the-clock operation",
    desc: "The gym is open 24 hours a day, also works on all holidays and weekends",
  },
];

export default function ReasonsToJoin() {
  return (
    <div className="">
      <h2 className="text-5xl mb-30"> Reasons to join </h2>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-30 pt-[60px] lg:pt-[120px]">
        {reasons.map((reason) => (
          <li key={reason.title} className="flex gap-2">
            <img src={reason.icon} alt="" />
            <div>
              <h3 className="mb-3">{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    //   <div
    //     id="animation-carousel"
    //     className="relative w-full"
    //     data-carousel="static"
    //   >
    //     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    //       <div className="hidden duration-200 ease-linear" data-carousel-item>
    //         <img
    //           src="../src/assets/images/person-header.jpg"
    //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    //           alt="..."
    //         />
    //       </div>
    //       <div className="hidden duration-200 ease-linear" data-carousel-item>
    //         <img
    //           src="../src/assets/images/person-header.jpg"
    //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    //           alt="..."
    //         />
    //       </div>
    //       <div
    //         className="hidden duration-200 ease-linear"
    //         data-carousel-item="active"
    //       >
    //         <img
    //           src="../src/assets/images/person-header.jpg"
    //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    //           alt="..."
    //         />
    //       </div>
    //       <div className="hidden duration-200 ease-linear" data-carousel-item>
    //         <img
    //           src="../src/assets/images/person-header.jpg"
    //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    //           alt="..."
    //         />
    //       </div>
    //       <div className="hidden duration-200 ease-linear" data-carousel-item>
    //         <img
    //           src="../src/assets/images/person-header.jpg"
    //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    //           alt="..."
    //         />
    //       </div>
    //     </div>
    //     <button
    //       type="button"
    //       className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    //       data-carousel-prev
    //     >
    //       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //         <svg
    //           className="w-4 h-4 text-white dark:text-gray-800"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 6 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M5 1 1 5l4 4"
    //           />
    //         </svg>
    //         <span className="sr-only">Previous</span>
    //       </span>
    //     </button>
    //     <button
    //       type="button"
    //       className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    //       data-carousel-next
    //     >
    //       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //         <svg
    //           className="w-4 h-4 text-white dark:text-gray-800"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 6 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="m1 9 4-4-4-4"
    //           />
    //         </svg>
    //         <span className="sr-only">Next</span>
    //       </span>
    //     </button>
    //   </div>
  );
}
