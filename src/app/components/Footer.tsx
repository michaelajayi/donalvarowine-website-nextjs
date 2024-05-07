"use client";
import Image from "next/image";
import React from "react";
import footerLogo from "../../../public/footer-logo.svg";
import footerIllustrationMobileDark from "../../../public/images/footer-illustration-dark-mobile.png";
import footerIllustrationLight from "../../../public/images/footer-illustration-light.png";
import footerIllustration from "../../../public/images/footer-illustration.png";
import footerLogoDark from "../../../public/logo-dark.svg";
import smallFooterLogoDark from "../../../public/small-footer-logo-dark.svg";
import smallFooterLogo from "../../../public/small-footer-logo.svg";

import { selectLayout } from "@/lib/features/layout/layoutSlice";
import { useAppSelector } from "@/lib/hooks";
import email from "../../../public/images/footer-icons/email.svg";
import location from "../../../public/images/footer-icons/location.svg";
import phone from "../../../public/images/footer-icons/phone.svg";

import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const footerLinks = [
    {
      icon: location,
      value: "284 -294 Ley Street, Ilford. IG1 4BS",
    },
    {
      icon: email,
      value: "r.erijo@donalvarowine.com",
    },
    {
      icon: phone,
      value: "+44 741 381 7599",
    },
  ];

  const aboutUsLinks = [
    {
      title: "Story about us",
      link: "#",
    },
    {
      title: "Our latest blog posts",
      link: "#",
    },
    {
      title: "Purchase our products",
      link: "#",
    },
    {
      title: "Keep in touch",
      link: "#",
    },
  ];

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const { isDarkMode } = useAppSelector(selectLayout);
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center pt-0 lg:pt-20 dark:bg-custom-dark bg-custom-light relative space-y-0 border border-[#D1B991]  border-t-1 border-l-0 border-r-0 border-b-0'>
      <div className='w-full h-full flex-col px-5 lg:px-[74px] grid grid-cols-1 lg:grid-cols-2 items-start space-y-10 lg:space-y-0 py-10 lg:py-0'>
        <div className='flex flex-col space-y-3 lg:space-y-5'>
          <div className='flex justify-start space-x-2 items-center'>
            {isDarkMode ? (
              isMobile ? (
                <Image src={smallFooterLogo} alt='footer logo' />
              ) : (
                <Image src={footerLogo} alt='footer logo' />
              )
            ) : isMobile ? (
              <Image src={smallFooterLogoDark} alt='footer logo' />
            ) : (
              <Image src={footerLogoDark} alt='footer logo' />
            )}
            <p className='font-georgia  text-[16.471px] lg:text-[48px] leading-[48px] dark:text-custom-light text-custom-dark'>
              Don Álvaro
            </p>
          </div>
          <p className='font-georgia text-[14px] lg:text-[20px] leading-normal dark:text-custom-light text-custom-dark w-[85%] lg:w-[50%]'>
            In the sun- soaked vineyards (Vallarta farms), Don Alvaro crafted
            wines that captured the essence of the land.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='flex flex-col space-y-3 lg:space-y-5'>
            <div className='w-fit flex flex-col space-y-3'>
              <p className='font-georgia text-[16px] lg:text-[24px] tracking-[2.4px] leading-normal dark:text-custom-light text-custom-dark uppercase'>
                Contact Us
              </p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='194'
                height='2'
                viewBox='0 0 194 2'
                fill='none'
              >
                <path
                  d='M0.947693 0.709961H193.528'
                  stroke='url(#paint0_linear_2051_2453)'
                  stroke-width='0.967742'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_2051_2453'
                    x1='15.6949'
                    y1='1.40282'
                    x2='139.776'
                    y2='-80.2741'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop offset='0.120833' stop-color='#974900' />
                    <stop offset='0.917665' stop-color='#FFE476' />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              {footerLinks.map((link, index) => (
                <div className='flex space-x-2 items-center' key={index}>
                  <Image src={link.icon} alt='icon' />
                  <p className='font-georgia text-[14px] lg:text-[16.452px] leading-[33.871px] text-[#A5886D] italic'>
                    {link.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col space-y-3 lg:space-y-5'>
            <div className='w-fit flex flex-col space-y-3'>
              <p className='font-georgia text-[16px] lg:text-[24px] tracking-[2.4px] leading-normal dark:text-custom-light text-custom-dark uppercase'>
                About Us
              </p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='194'
                height='2'
                viewBox='0 0 194 2'
                fill='none'
              >
                <path
                  d='M0.947693 0.709961H193.528'
                  stroke='url(#paint0_linear_2051_2453)'
                  stroke-width='0.967742'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_2051_2453'
                    x1='15.6949'
                    y1='1.40282'
                    x2='139.776'
                    y2='-80.2741'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop offset='0.120833' stop-color='#974900' />
                    <stop offset='0.917665' stop-color='#FFE476' />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className='flex flex-col space-y-3'>
              {aboutUsLinks.map((link, index) => (
                <p
                  key={index}
                  className='font-georgia text-[14px] lg:text-[16.452px] leading-[33.871px] text-[#A5886D] italic w-[70%] lg:w-[80%]'
                >
                  {link.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[272.782px] lg:h-full flex justify-center items-center top-0 left-0 relative'>
        {isMobile ? (
          <Image
            src={footerIllustrationMobileDark}
            alt='footer illustration'
            className={`bg-transparent w-full h-full lg:h-auto pointer-events-none absolute top-0 left-0 ${
              isDarkMode ? "opacity-1" : "opacity-[.3]"
            }`}
            style={{ zIndex: "1" }}
          />
        ) : isDarkMode ? (
          <Image
            src={footerIllustration}
            alt='footer illustration'
            className='w-full h-full lg:h-auto pointer-events-none'
            style={{ zIndex: "1" }}
          />
        ) : (
          <Image
            src={footerIllustrationLight}
            alt='footer illustration'
            className='w-full h-auto pointer-events-none'
            style={{ zIndex: "1" }}
          />
        )}

        {isDarkMode ? (
          isMobile ? (
            <Image
              src={footerIllustrationMobileDark}
              alt='footer illustration'
              className='bg-transparent w-full h-full lg:h-auto pointer-events-none'
              style={{ zIndex: "1" }}
            />
          ) : (
            <Image
              src={footerIllustration}
              alt='footer illustration'
              className='bg-transparent w-full h-full lg:h-auto pointer-events-none'
              style={{ zIndex: "1" }}
            />
          )
        ) : isMobile ? (
          <Image
            src={footerIllustrationMobileDark}
            alt='footer illustration'
            className='bg-transparent opacity-[.5] w-full h-full lg:h-auto pointer-events-none'
            style={{ zIndex: "1" }}
          />
        ) : (
          <Image
            src={footerIllustrationLight}
            alt='footer illustration'
            className='w-full h-auto pointer-events-none'
            style={{ zIndex: "1" }}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
