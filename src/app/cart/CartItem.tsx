import { CartItem as ICartItem } from "@/d.types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { formatCurrency } from "@/utils/formatCurrency";
import { on } from "events";
import Image from "next/image";
import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import {
  decrementQuantity,
  incrementQuantity,
} from "@/lib/features/cart/cartSlice";
import { selectLayout } from "@/lib/features/layout/layoutSlice";
const CartItem: React.FC<{ cart: ICartItem }> = ({ cart }) => {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector(selectLayout);

  const onIncreaseBottleQty = (isBottle: boolean) => {
    dispatch(
      incrementQuantity({
        id: cart.product.id,
        isBottle,
      })
    );
  };

  const onDecreaseBottleQty = (isBottle: boolean) => {
    dispatch(
      decrementQuantity({
        id: cart.product.id,
        isBottle,
      })
    );
  };
  return (
    <div className='w-full h-auto lg:grid grid-cols-1 lg:grid-cols-10 items-center border border-[#AF6900] rounded-[10px] py-5 lg:py-2 px-5 space-y-2'>
      <Image
        src={cart && cart.product.image}
        alt={cart.product.title}
        className='h-[158.841px] pointer-events-none lg:col-span-2 flex justify-center w-full lg:w-auto lg:justify-start'
      />
      <div className='flex flex-col space-y-3 col-span-4 items-center lg:items-start '>
        <p className='font-gill-sans text-[#AF6900] text-[18px] lg:text-[24px] tracking-[.48px]'>
          {cart && cart.product.title}
        </p>
        <p className='font-kingstone text-[#A5886D] text-[16px] lg:text-[20px] tracking-[.4px]'>
          Don Alvaro {cart && cart.product.generic}
        </p>
      </div>

      <p className='font-georgia flex text-[#AF6900] text-[22px] lg:text-[32px] font-bold col-span-1 lg:col-span-2 justify-self-center justify-center lg:justify-start'>
        {formatCurrency(cart && cart.product.pricePerBottle)}
      </p>

      <div className='flex items-center space-x-5 col-span-1 lg:col-span-2 justify-self-end justify-center lg:justify-start '>
        <div
          className='w-10 h-10 aspect-[1/1] grid place-content-center border border-[#AF6900] text-white cursor-pointer'
          onClick={() => onIncreaseBottleQty(true)}
        >
          <AiOutlinePlus color={isDarkMode ? "#fff" : "#000"} />
        </div>
        <p className={`font-georgia text-[20px] leading-normal ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {cart.bottleQty}
        </p>
        <div
          className='w-10 h-10 aspect-[1/1] grid place-content-center border border-[#AF6900] text-white cursor-pointer'
          onClick={() => onDecreaseBottleQty(true)}
        >
          <AiOutlineMinus color={isDarkMode ? "#fff" : "#000"} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
