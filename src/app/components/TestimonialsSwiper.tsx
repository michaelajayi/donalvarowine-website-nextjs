"use client";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { TestimonialType } from "@/d.types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import TestimonialItem from "./TestimonialItem";

const TestimonialsSwiper = () => {
  const testimonials = [
    {
      review:
        "Fellow wine lovers seeking an unparalleled tasty experience. Cheers to Don Álvaro for elevating my wine journey to new heights!",
      author: "Ronald Richards",
    },
    {
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, deleniti omnis? Iure.",
      author: "Alfred Rewane",
    },
    {
      review:
        "The wine is so nice. The classic taste and traditional blend it gives is next to none.",
      author: "Esther George",
    },
    {
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Bode Thomas",
    },
  ];
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      navigation={{
        nextEl: ".testimonial-next-button",
        prevEl: ".testimonial-prev-button",
      }}
      pagination={{
        el: ".testimonial-pagination",
        dynamicBullets: true,
      }}
      modules={[Navigation, Pagination]}
      effect='fade'
      className='testimonial-swiper w-full'
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1,
        },
        1440: {
          slidesPerView: 1,
        },
      }}
    >
      {testimonials.map((testimonial: TestimonialType, index: number) => (
        <SwiperSlide key={index}>
          <TestimonialItem testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsSwiper;
