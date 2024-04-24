"use client";
import Image from "next/image";
import React, { useState } from "react";

import Link from "next/link";
import cartIcon from "../../../public/icons/cart-icon.svg";
import darkModeToggle from "../../../public/icons/dark-mode-toggle.svg";
import lightModeToggle from "../../../public/icons/light-mode-toggle.svg";
import menuToggle from "../../../public/icons/menu-toggle.svg";
import person from "../../../public/icons/person.svg";
import logo from "../../../public/logo.svg";

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const onToggleTheme = () => {
    const toggleImage = document.querySelector(".toggle-image") as HTMLElement;
    if (toggleImage) {
      toggleImage.style.opacity = "0";
      toggleImage.style.transform = "translateY(-20px)";

      setTimeout(() => {
        setIsLightMode(!isLightMode);
        toggleImage.style.opacity = "1";
        toggleImage.style.transform = "translateY(0)";
      }, 300);
    }
  };

  return (
    <div className="min-h-auto min-w-screen w-screen flex justify-center items-center bg-[#232323] px-[74px] h-[9vh]">
      <div className="w-full h-auto flex justify-between items-center">
        {/* icon */}
        <Link className="flex items-center space-x-2" href="/">
          <Image src={logo} alt="logo" priority />
          <p className="text-white text-[40px] font-georgia">Don Álvaro</p>
        </Link>
        {/* nav buttons */}

        <div className="flex space-x-10 items-center">
          {/* theme toggle button */}
          <div className="toggle-container">
            <Image
              src={isLightMode ? lightModeToggle : darkModeToggle}
              alt={isLightMode ? "light mode toggle" : "dark mode toggle"}
              className="cursor-pointer toggle-image"
              onClick={onToggleTheme}
            />
          </div>
          <div className="flex">
            <div className="cursor-pointer px-5 py-5 border-l-[2px] border-t-[2px] border-b-[2px] border-r-0 border-white flex justify-center items-center">
              <Image src={person} alt="person" priority />
            </div>
            <div className="cursor-pointer px-5 py-5 border-[2px] border-white flex justify-center items-center">
              <Image src={cartIcon} alt="cart icon" priority />
            </div>
            <div className="cursor-pointer px-5 py-5 border-l-0 border-t-[2px] border-b-[2px] border-r-[2px] border-white flex justify-center items-center">
              <Image src={menuToggle} alt="menu toggle" priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
