function Banner() {
  return (
    <div className="relative mb-[191px] lg:mb-[424px]">
      <div className="relative ml-[220px] mb-[200px] top-[-600px] left-[200px]">
        <img
          src="../src/assets/images/person-header.jpg "
          className=" img-header absolute inset-0 w-[1052px]  h-[1578px]  z-[-2] "
          alt=""
        />
      </div>
      <div className="w-auto h-[140px] mr-[50px] ml-[50px] lg:ml-[0px] lg:w-[668px] lg:h-[143px] mb-[60px]">
        <p className="text-center lg:text-left text-[40px] font-[700] lg:text-[64px]">
          Free trial session with a trainer
        </p>
      </div>
      <div className="w-[177px] h-[52px] bg-[#FAFF00] rounded-[30px] ml-[35%] lg:ml-[0%]">
        <button className=" pl-[50px] pr-[50px] pt-[10px] text-black font-normal font-[500] text-[16px]  ">
          Detailed
        </button>
      </div>
    </div>
  );
}

export default Banner;
