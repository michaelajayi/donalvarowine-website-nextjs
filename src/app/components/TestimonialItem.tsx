import { TestimonialType } from "@/d.types";
import React from "react";

const TestimonialItem: React.FC<{ testimonial: TestimonialType }> = ({
  testimonial,
}) => {
  return (
    <div className='flex flex-col space-y-5 w-full'>
      <p className='font-georgia text-[20px] leading-[32px] text-white w-[90%]'>
        {testimonial.review}
      </p>
      <p className='font-georgia text-[36px] leading-normal tracking-[3.6px] text-[#A5886D] uppercase'>
        {testimonial.author}
      </p>
    </div>
  );
};

export default TestimonialItem;
