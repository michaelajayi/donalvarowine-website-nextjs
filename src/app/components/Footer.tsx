import Image from "next/image";
import React from "react";
import footerLogo from "../../../public/footer-logo.svg";
import footerIllustration from "../../../public/images/footer-illustration.png";

import email from "../../../public/images/footer-icons/email.svg";
import location from "../../../public/images/footer-icons/location.svg";
import phone from "../../../public/images/footer-icons/phone.svg";

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
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center pt-20 bg-[#232323] border border-[#D1B991] border-t-1 relative space-y-0'>
      <div className='w-full h-full flex-col px-[74px] grid grid-cols-1 md:grid-cols-2 items-start'>
        <div className='flex flex-col space-y-5'>
          <div className='flex justify-start space-x-2 items-center'>
            <Image src={footerLogo} alt='footer logo' />
            <p className='font-georgia text-[48px] leading-[48px] text-white'>
              Don Álvaro
            </p>
          </div>
          <p className='font-georgia text-[20px] leading-normal text-white w-[50%]'>
            In the sun- soaked vineyards (Vallarta farms) , Don Alvaro crafted
            wines that captured the essence of the land.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex flex-col space-y-5'>
            <p className='font-georgia text-[24px] tracking-[2.4px] leading-normal text-white uppercase'>
              Contact Us
            </p>
            <div>
              {footerLinks.map((link, index) => (
                <div className='flex space-x-2 items-center' key={index}>
                  <Image src={link.icon} alt='icon' />
                  <p className='font-georgia text-[16.452px] leading-[33.871px] text-[#A5886D] italic'>
                    {link.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col space-y-5'>
            <p className='font-georgia text-[24px] tracking-[2.4px] leading-normal text-white uppercase'>
              About Us
            </p>
            <p className='font-georgia text-[16.452px] leading-[33.871px] text-[#A5886D] italic w-[80%]'>
              Story about us Our latest blog posts Purchase our products Keep in
              touch
            </p>
          </div>
        </div>
      </div>
      <div className='w-full h-auto flex justify-center items-center top-0 left-0 relative'>
        <Image
          src={footerIllustration}
          alt='footer illustration'
          className='w-full h-auto pointer-events-none'
          style={{ zIndex: "1" }}
        />
      </div>
    </div>
  );
};

export default Footer;
