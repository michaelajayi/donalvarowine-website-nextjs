import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { TestimonialType } from "@/d.types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import TestimonialItem from "./TestimonialItem";

import { selectProduct } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import { Product } from "@/d.types";
import { formatCurrency } from "@/utils/formatCurrency";
import ProductItem from "./ProductItem";

import { useMediaQuery } from "react-responsive";

const Products = () => {
  const { products } = useAppSelector(selectProduct);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const dispatch = useAppDispatch();

  return (
    <Swiper
      // spaceBetween={30}
      slidesPerView={1}
      centeredSlides={isMobile}
      grabCursor={true}
      modules={[]}
      effect='fade'
      className='products-swiper w-full'
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {products.map((product: Product, index: number) => (
        <SwiperSlide key={index}>
          <ProductItem product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Products;
