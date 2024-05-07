import { TestimonialType } from "@/d.types";
import React from "react";

const TestimonialItem: React.FC<{ testimonial: TestimonialType }> = ({
  testimonial,
}) => {
  return (
    <div className='flex flex-col space-y-3 lg:space-y-5 w-full'>
      <p className='font-georgia text-[14px] lg:text-[20px] leading-[18.159px] lg:leading-[32px] dark:text-custom-light text-custom-dark w-full lg:w-[90%] '>
        {testimonial.review}
      </p>
      <p className='font-georgia text-[16px] lg:text-[36px] leading-normal tracking-[1.6px] lg:tracking-[3.6px] text-[#A5886D] uppercase'>
        {testimonial.author}
      </p>
    </div>
  );
};

export default TestimonialItem;
