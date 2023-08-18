import phone from '../assets/svgs/phone.svg';
import email from '../assets/svgs/email.svg';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-3  lg:gap-30 gap-9 mb-14 ">
      <div className="lg:grid lg:gap-2 lg:justify-center lg:items-center hidden lg:block">
        <img src={logo} alt="" />
        <p>
          Build strength and confidence at our gym with state-of-the-art equipment, personalized
          training, and a motivating community
        </p>
      </div>
      <div className="text-center grid gap-9">
        <h1 className="text-5">ADDRESS</h1>
        <p className="text-center text-[14px] font-[300] ">
          Republic of Belarus <br />
          Minsk city <br />
          Dzerzhinsky Avenue 15 <br />
        </p>
      </div>
      <div className="text-center grid gap-9">
        <h1 className="text-[18px] ">CONTACT</h1>
        <div className="flex justify-self-center -mb-5">
          <img src={phone} className="" alt="" />
          <p className="text-center text-[14px] font-[300] ">+375(44)-777-24-12</p>
        </div>
        <div className="flex justify-center item-center ">
          <img src={email} alt="" />
          <p className="text-center text-[14px] font-[300] ">gym24@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
