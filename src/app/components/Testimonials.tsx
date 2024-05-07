"use client";
import React from "react";
import wineBarrelRotatingLogoGold from "../../../public/images/our-history-rotating-logo-gold.svg";
import quoteWineBarrel from "../../../public/images/quote-wine-barrel.svg";
import wineBarrelAfter from "../../../public/images/wine-barrel-after.svg";
import wineBarrelRotatingLogo from "../../../public/images/wine-barrel-rotating-logo.svg";
import wineBarrel from "../../../public/images/wine-barrels.svg";
import TestimonialsSwiper from "./TestimonialsSwiper";

import { selectLayout } from "@/lib/features/layout/layoutSlice";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import nextButtonWineBarrelDark from "../../../public/images/next-button-wine-barrel-dark.svg";
import nextButtonWineBarrel from "../../../public/images/next-button-wine-barrel.svg";
import prevButtonWineBarrelDark from "../../../public/images/prev-button-wine-barrel-dark.svg";
import prevButtonWineBarrel from "../../../public/images/prev-button-wine-barrel.svg";

const Testimonials = () => {
  const { isDarkMode } = useAppSelector(selectLayout);
  return (
    <div className='w-full h-auto flex justify-center items-center pt-10 lg:pt-20 lg:pb-[10rem] dark:bg-custom-dark bg-custom-light py-12'>
      <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-[74px] lg:space-x-10 gap-10 lg:gap-0'>
        <div className='w-full h-full flex justify-center items-center order-2 lg:order-1'>
          <div className='w-full lg:w-[80%] flex flex-col space-y-[3rem] justify-start relative'>
            <div className='flex flex-col space-y-5 justify-start'>
              <Image
                src={quoteWineBarrel}
                alt='quote wine barrel'
                className=' top-0 left-0 h-[49.937px] lg:w-auto'
              />
              <div className='w-full h-full pl-0 lg:pl-12'>
                <TestimonialsSwiper />
              </div>
            </div>
            <div className='flex space-x-5 lg:space-x-20 justify-center items-center w-[75%] lg:w-full self-center'>
              {isDarkMode ? (
                <Image
                  src={prevButtonWineBarrel}
                  alt='prev button'
                  className='testimonial-prev-button opacity-50 hover:opacity-100 cursor-pointer'
                />
              ) : (
                <Image
                  src={prevButtonWineBarrelDark}
                  alt='prev button'
                  className='testimonial-prev-button opacity-50 hover:opacity-100 cursor-pointer'
                />
              )}
              <div className='testimonial-pagination space-x-3 flex justify-center items-center bg-transparent w-full' />
              {isDarkMode ? (
                <Image
                  src={nextButtonWineBarrel}
                  alt='next button'
                  className='testimonial-next-button opacity-50 hover:opacity-100 cursor-pointer'
                />
              ) : (
                <Image
                  src={nextButtonWineBarrelDark}
                  alt='next button'
                  className='testimonial-next-button opacity-50 hover:opacity-100 cursor-pointer'
                />
              )}
            </div>
          </div>
        </div>
        <div className='w-full h-full relative order-1 lg:order-2'>
          <Image
            src={wineBarrelAfter}
            alt='wine barrel after'
            className='absolute left-0 lg:h-auto lg:w-auto top-[-20px] lg:top-[-35px]'
            style={{ zIndex: 5 }}
          />
          <div className='inline-block relative z-20'>
            <Image
              src={wineBarrel}
              alt='wine barrel'
              style={{ zIndex: 10 }}
              className='w-full h-[308.696px] lg:h-auto'
            />
            {isDarkMode ? (
              <Image
                src={wineBarrelRotatingLogo}
                alt='rotating logo'
                className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 pointer-events-none hidden lg:block'
              />
            ) : (
              <Image
                src={wineBarrelRotatingLogoGold}
                alt='rotating logo'
                className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 pointer-events-none hidden lg:block'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
