import { selectLayout } from "@/lib/features/layout/layoutSlice";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import React from "react";
import ourHistoryMainImage from "../../../public/images/our-history-main-image.svg";
import ourHistoryRotatingImageGold from "../../../public/images/our-history-rotating-logo-gold.svg";
import ourHistoryRotatingImage from "../../../public/images/our-history-rotating-logo.svg";
import ourHistorySideImage from "../../../public/images/our-history-side-image.svg";

const OurHistory = () => {
  const { isDarkMode } = useAppSelector(selectLayout);

  return (
    <div className='w-full h-auto px-5 lg:px-[74px] grid grid-cols-1 lg:grid-cols-2 items-center relative'>
      <div className='flex flex-col space-y-5 lg:space-y-8 items-start'>
        <p className='font-kingstone text-[#AF6900] text-[14px] lg:text-[18px] tracking-[6.3px] uppercase leading-normal lg:leading-[18px]'>
          Don Alvaro
        </p>
        <h3 className='font-brand text-[#A5886D] text-[40px] lg:text-[60px] leading-normal: lg:leading-[60px]'>
          Our History
        </h3>
        <div className='flex flex-col space-y-5'>
          <p className='font-georgia dark:text-white text-custom-dark text-[14px] lg:text-[20px] leading-[20px] lg:leading-[32px] w-full lg:w-[80%]'>
            Nature blessed us with wonderful weather conditions, and we made all
            the rest to get excellent wines: a technologically advanced
            equipment and a natural production, from the harvest to the
            bottling.
          </p>
          <p className='font-georgia dark:text-white text-custom-dark text-[14px] lg:text-[20px] leading-[32px] w-full lg:w-[80%]'>
            And we’re proud of our results: awarded wines since 1999.
          </p>
        </div>
        <button className='font-kingstone text-[#FAF7F2] bg-[#AF6900] rounded-[4.427px] flex justify-center items-center px-10 py-3 text-[16.821px] text-center leading-normal uppercase'>
          See more
        </button>
      </div>

      <div className='flex flex-col items-center justify-center h-full py-[6rem]'>
        <div className='w-auto h-auto hidden lg:flex justify-center items-center z-10 relative'>
          <Image
            src={ourHistoryMainImage}
            alt='our history main image'
            className=''
          />
          <p className='font-georgia text-[#AF6900] text-[60px] italic leading-[22.5px] absolute -right-[50px] -top-[20px] tracking-[6px]'>
            1999
          </p>
          <p className='font-georgia text-[#9E845C] text-[15px] italic leading-[22.5px] absolute right-1 bottom-[-5]'>
            traditional farms and vineyards
          </p>
        </div>
        <Image
          src={ourHistorySideImage}
          alt='our history side image'
          className='lg:absolute right-0 top-0 hidden'
        />
      </div>

      <div className='h-auto absolute bottom-0 right-0 lg:left-0 flex justify-center items-center animate-rotate-infinite pointer-events-none w-fit lg:w-full'>
        {isDarkMode ? (
          <Image
            src={ourHistoryRotatingImage}
            alt='our history rotating image'
            className='pointer-events-none'
          />
        ) : (
          <Image
            src={ourHistoryRotatingImageGold}
            alt='our history rotating image'
            className='pointer-events-none'
          />
        )}
      </div>
    </div>
  );
};

export default OurHistory;
