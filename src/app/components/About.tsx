import Image from "next/image";
import Link from "next/link";
import React from "react";

import cabarnetSauvignonSide from "../../../public/images/cabernet-sauvignon-side.svg";
import cabarnetSauvignon from "../../../public/images/cabernet-sauvignon.svg";
import muscatBlancSide from "../../../public/images/muscat-blanc-side.svg";
import muscatBlanc from "../../../public/images/muscat-blanc.svg";
import vinoCalienteSide from "../../../public/images/vino-caliente-side.svg";
import vinoCaliente from "../../../public/images/vino-caliente.svg";
import OurHistory from "./OurHistory";

const About = () => {
  const products = [
    {
      title: "Cabernet Sauvignon",
      generic: "Red Wine",
      link: "/products/cabernet-sauvignon",
      image: cabarnetSauvignon,
      sideImage: cabarnetSauvignonSide,
    },
    {
      title: "Vino Caliente (Mulled Wine)",
      generic: "Sweet Red Wine",
      link: "/products/vino-caliente",
      image: vinoCaliente,
      sideImage: vinoCalienteSide,
    },
    {
      title: "Muscat Blanc",
      generic: "Sweet White Wine",
      link: "/products/muscat-blanc",
      image: muscatBlanc,
      sideImage: muscatBlancSide,
    },
  ];
  return (
    <div className="min-w-screen w-screen h-auto flex flex-col space-y-[8rem] justify-center items-center bg-[#232323] py-20 bg-background-illustration bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full flex px-[74px]">
        <div className="grid grid-cols-3 gap-5 w-full justify-items-center items-center mx-auto">
          {products.map((product, index) => (
            <div
              className="flex space-x-3 bg-[#D9CCB9] justify-center items-center rounded-xl relative w-[400px] h-[200px]"
              key={index}
            >
              <Image
                src={product.image}
                alt={product.title}
                className="absolute bottom-[-1] left-3"
              />
              <div className="flex flex-col space-y-3 z-10">
                <p className="font-georgia text-[#AF6900] text-[17px] tracking-[.34px] leading-normal">
                  {product.title}
                </p>
                <p className="font-kingstone text-[#211911] text-[20px] tracking-[2px] leading-normal uppercase">
                  {product.generic}
                </p>
                <Link
                  href={product.link}
                  className="font-georgia text-[#AF6900] text-[17px] leading-normal italic"
                >
                  View Details
                </Link>
              </div>
              <Image
                src={product.sideImage}
                alt={product.title}
                className="absolute bottom-0 right-0"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#D1B991] h-[1.5px]"></div>

      <OurHistory />
      
      <div className="w-full bg-[#D1B991] h-[1.5px]"></div>
    </div>
  );
};

export default About;
