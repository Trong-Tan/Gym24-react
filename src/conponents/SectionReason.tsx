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
    <div className="mb-30">
      <h2 className="text-5xl "> Reasons to join </h2>
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

  );
}
