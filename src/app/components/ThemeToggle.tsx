"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import darkModeToggle from "../../../public/icons/dark-mode-toggle.svg";
import lightModeToggle from "../../../public/icons/light-mode-toggle.svg";

import { selectLayout, setTheme } from "@/lib/features/layout/layoutSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const ThemeToggle = () => {
  const { theme } = useAppSelector(selectLayout);

  const dispatch = useAppDispatch();

  const onToggleTheme = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  // useEffect(() => {}, []);

  //   const onToggleTheme = () => {
  //     const toggleImage = document.querySelector(".toggle-image") as HTMLElement;
  //     if (toggleImage) {
  //       toggleImage.style.opacity = "0";
  //       toggleImage.style.transform = "translateY(-20px)";

  //       setTimeout(() => {
  //         setIsLightMode(!isLightMode);
  //         toggleImage.style.opacity = "1";
  //         toggleImage.style.transform = "translateY(0)";
  //       }, 300);
  //     }
  //   };

  return theme === "dark" ? (
    <Image
      src={lightModeToggle}
      alt='light mode toggle'
      className='cursor-pointer'
      onClick={onToggleTheme}
    />
  ) : (
    <Image
      src={darkModeToggle}
      alt='dark image toggle'
      className='cursor-pointer'
      onClick={onToggleTheme}
    />
  );
};

export default ThemeToggle;
