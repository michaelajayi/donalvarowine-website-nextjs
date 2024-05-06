"use client";

import { selectLayout } from "@/lib/features/layout/layoutSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import OurHistory from "./OurHistory";
import Products from "./Products";

const About = () => {
  const dispatch = useAppDispatch();

  const { isDarkMode } = useAppSelector(selectLayout);

  return (
    <div className='min-w-screen w-screen h-auto flex flex-col space-y-[8rem] justify-center items-center dark:bg-[#232323] bg-custom-light py-20 bg-background-illustration bg-cover bg-center bg-no-repeat'>
      <div className='w-full h-full flex px-[74px]'>
        <Products />
      </div>

      <div className='w-full bg-[#D1B991] h-[1.5px]'></div>

      <OurHistory />

      <div className='w-full bg-[#D1B991] h-[1.5px]'></div>
    </div>
  );
};

export default About;
