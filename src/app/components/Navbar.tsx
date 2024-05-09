"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { setProducts } from "@/lib/features/product/productSlice";
import { useAppDispatch } from "@/lib/hooks";
import { products } from "@/utils/products";
import Link from "next/link";
import cartIconDark from "../../../public/icons/cart-icon-dark.svg";
import cartIcon from "../../../public/icons/cart-icon.svg";
import menuToggleDark from "../../../public/icons/menu-toggle-dark.svg";
import menuToggle from "../../../public/icons/menu-toggle.svg";
import personDark from "../../../public/icons/person-dark.svg";
import person from "../../../public/icons/person.svg";
import logoDark from "../../../public/logo-dark.svg";
import logo from "../../../public/logo.svg";

import { selectLayout } from "@/lib/features/layout/layoutSlice";
import { useAppSelector } from "@/lib/hooks";

import { selectCart } from "@/lib/features/cart/cartSlice";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { theme, isDarkMode } = useAppSelector(selectLayout);

  const { cartItems } = useAppSelector(selectCart);

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch]);

  return (
    <div className='min-h-auto min-w-screen w-screen flex justify-center items-center dark:bg-[#232323] bg-[#F9F9F9] px-5 lg:px-[74px] h-[9vh] sticky top-0 z-50 shadow-md'>
      <div className='w-full h-auto flex justify-between items-center'>
        {/* icon */}
        <Link className='flex items-center space-x-2' href='/'>
          {isDarkMode ? (
            <div className='w-[32.867px] h-[36.044px] lg:w-auto lg:h-auto'>
              <Image src={logo} alt='logo' priority className='w-full h-full' />
            </div>
          ) : (
            <div className='w-auto h-auto'>
              <Image
                src={logoDark}
                alt='logo'
                priority
                className='w-auto h-auto'
              />
            </div>
          )}
          <p className='text-[#232323] dark:text-white text-[16.471px] lg:text-[40px] font-georgia'>
            Don Álvaro
          </p>
        </Link>
        {/* nav buttons */}

        <div className='flex space-x-10 items-center'>
          {/* theme toggle button */}
          <div className='toggle-container'>
            <ThemeToggle />
          </div>
          <div className='lg:flex'>
            <div className='cursor-pointer px-5 py-5 border-l-[2px] border-t-[2px] border-b-[2px] border-r-0 dark:border-white border-[#232323] justify-center items-center hidden lg:flex'>
              {isDarkMode ? (
                <Image src={person} alt='person' priority />
              ) : (
                <Image src={personDark} alt='person' priority />
              )}
            </div>
            <Link href='/cart' className='cursor-pointer px-5 py-5 lg:border-[2px] dark:border-white border-[#232323] flex justify-center items-center'>
              <div className='w-fit h-fit flex justify-center items-center relative'>
                {isDarkMode ? (
                  <Image src={cartIcon} alt='cart icon' priority />
                ) : (
                  <Image src={cartIconDark} alt='cart icon' priority />
                )}
                <div className='bg-[#AF6900] h-[11.25px] width-[11.25px] flex justify-center items-center aspect-square rounded-[50%] absolute top-0 right-0 translate-x-1/3 translate-y-[-30%]'>
                  <p className='font-georgia text-[7.5px] text-white'>
                    {cartItems.length}
                  </p>
                </div>
              </div>
            </Link>
            <div className='cursor-pointer px-5 py-5 border-l-0 border-t-[2px] border-b-[2px] border-r-[2px] dark:border-white border-[#232323] justify-center items-center hidden lg:flex'>
              {isDarkMode ? (
                <Image src={menuToggle} alt='menu toggle' priority />
              ) : (
                <Image src={menuToggleDark} alt='menu toggle' priority />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
