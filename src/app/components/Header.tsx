import Image from "next/image";
import React from "react";
import animatedLogo from "../../../public/animated-logo.svg";
import background from "../../../public/images/background.jpg";

const Header = () => {
  return (
    <div className='min-w-screen max-h-[91vh] h-[91vh] lg:h-[80vh] w-screen flex justify-center items-center relative bg-header-background-mobile lg:bg-header-background bg-cover bg-no-repeat bg-center'>
      <Image
        src={animatedLogo}
        alt='animated logo'
        priority
        className='hidden lg:absolute right-0 bottom-0 pointer-events-none animate-rotate-infinite'
      />
      <div className='w-full h-full flex px-5 lg:px-[74px]'>
        <div className='flex flex-col items-start justify-start lg:justify-center w-full space-y-5 lg:space-y-8 py-5 lg:py-0'>
          <h1 className='font-brand text-[40px] lg:text-[70px] leading-[50px] lg:leading-[80px] w-full lg:w-[50%] text-white animate-fade-in'>
            Brewed from Natures Best
          </h1>
          <div className='flex flex-col'>
            <p className='font-georgia text-[14px] lg:text-[20px] leading-[20px] lg:leading-[32px] w-full lg:w-[60%] text-white animate-fade-in'>
              Discover the magic of Don Alvaro, where every sip tells a story of
              tradition and quality.
            </p>
            <p className='font-georgia text-[14px] lg:text-[20px] leading-[20px] lg:leading-[32px] w-full lg:w-[60%] text-white animate-fade-in'>
              Legacy, passion and excellence to lives on, enchanting wine lovers
              worldwide.
            </p>
          </div>
          <button className='font-kingstone flex justify-center items-center px-20 py-3 text-[14.032px] lg:text-[24px] uppercase border border-white border-r-0 border-l-0 text-white leading-[24px]'>
            See how it<span className='font-brand'>{"'"}</span>s made
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
