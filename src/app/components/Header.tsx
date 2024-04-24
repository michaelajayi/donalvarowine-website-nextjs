import Image from "next/image";
import React from "react";
import animatedLogo from "../../../public/animated-logo.svg";
import background from "../../../public/images/background.svg";

const Header = () => {
  return (
    <div className="min-w-screen h-[80vh] w-screen flex justify-center items-center relative">
      <Image
        src={background}
        alt="background"
        priority
        className="absolute top-0 left-0 bg-center bg-cover object-cover w-full h-full z-[-10]"
      />
      <Image
        src={animatedLogo}
        alt="animated logo"
        priority
        className="absolute right-0 bottom-0 pointer-events-none animate-rotate-infinite"
      />
      <div className="w-full h-full flex px-[74px]">
        <div className="flex flex-col items-start justify-center w-full space-y-8">
          <h1 className="font-brand text-[70px] leading-[80px] w-[50%] text-white animate-fade-in">
            Brewed from Natures Best
          </h1>
          <div className="flex flex-col">
            <p className="font-georgia text-[20px] leading-[32px] w-[60%] text-white animate-fade-in">
              Discover the magic of Don Alvaro, where every sip tells a story of
              tradition and quality.
            </p>
            <p className="font-georgia text-[20px] leading-[32px] w-[60%] text-white animate-fade-in">
              Legacy, passion and excellence to lives on, enchanting wine lovers
              worldwide.
            </p>
          </div>
          <button className="font-kingstone flex justify-center items-center px-20 py-3 text-[24px] uppercase border border-white border-r-0 border-l-0 text-white leading-[24px]">
            See how it<span className="font-brand">{"'"}</span>s made
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
