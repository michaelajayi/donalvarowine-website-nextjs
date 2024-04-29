import Image from "next/image";
import React from "react";
import fdRestaurant from "../../../public/images/best-of-the-best/fd-restaurant.svg";
import forLoversOfFoodAndDrinks from "../../../public/images/best-of-the-best/for-lovers-of-food-and-drinks.svg";
import highestQuality from "../../../public/images/best-of-the-best/highest-quality.svg";
import hosoreno from "../../../public/images/best-of-the-best/hosoreno.svg";
import ht from "../../../public/images/best-of-the-best/ht.svg";
import vineyard from "../../../public/images/best-of-the-best/vineyard.svg";
import wineClub from "../../../public/images/best-of-the-best/wine-club.svg";
import wineList from "../../../public/images/best-of-the-best/wine-list.svg";

const BestOfTheBest = () => {
  const bestOfTheBest = [
    {
      img: ht,
    },
    {
      img: wineList,
    },
    {
      img: hosoreno,
    },
    {
      img: forLoversOfFoodAndDrinks,
    },
    {
      img: wineClub,
    },
    {
      img: fdRestaurant,
    },
    {
      img: highestQuality,
    },
    {
      img: vineyard,
    },
  ];
  return (
    <div className='w-full h-auto flex justify-center items-center py-20 bg-[#232323]'>
      <div className='w-full h-full flex justify-center items-center flex-col space-y-20 px-[74px]'>
        <div className='flex flex-col justify-center items-center space-y-2'>
          <p className='uppercase font-kingstone text-[#AF6900] text-[24px] tracking-[8.4px] text-center'>
            Best of the best
          </p>
          <p className='font-brand text-[#A5886D] text-[80px] leading-normal text-center'>
            Our Loving Client
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center w-full border-[2px] border-[#D1B991]'>
          {bestOfTheBest.map((item, index) => (
            <div
              key={index}
              className='flex justify-center items-center h-full w-full px-5 py-[1.5rem] 
                  border-b-[2px] border-r-[2px] border-[#D1B991] 
                  md:nth-child(3n) lg:nth-child(4n):border-r-0 
                  md:last-child:border-b-0 lg:last-child:border-b-0 overflow-hidden'
            >
              <Image
                src={item.img}
                alt='best-of-the-best'
                className='transform transition-transform duration-500 ease-in-out hover:scale-150'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestOfTheBest;
