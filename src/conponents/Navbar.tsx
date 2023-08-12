function Navbar() {
  return (
    <div className="relative ">
      <div className=" lg:w-[1190px] w-auto lg:h-[23px] mt-[60px] mb-[90px]  text-[24px] font-normal font-[400] flex-shrink-[0] flex  text-[#FFF] relative">
        <p className="lg:mr-[654px]  ">
          GYM<span className="text-[#FAFF00]">24</span>
        </p>
        <div className="option-navbar ml-auto mr-[50px] flex">
          <p className="mr-[75px] text-[12px] font-normal font-[300] hidden lg:block">
            Advantages
          </p>

          <p className="mr-[75px] text-[12px] font-normal font-[300] hidden lg:block ">
            Membership
          </p>
          <p className="mr-[75px] text-[12px] font-normal font-[300] hidden lg:block">
            About
          </p>
          <p className="mr-[75px] text-[12px] font-normal font-[300] hidden lg:block">
            Trainer
          </p>
        </div>

        <div className="ml-auto mr-4 block lg:hidden">
          <svg
            className=" mt-[6px] "
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
