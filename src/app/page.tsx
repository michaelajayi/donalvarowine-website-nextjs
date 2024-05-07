'use client';
import React from "react";
import About from "./components/About";
import BestOfTheBest from "./components/BestOfTheBest";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import VideoComponent from "./components/VideoComponent";
import WhatsappComponent from "./components/WhatsappComponent";

const page = () => {
  return (
    <main className='flex flex-col overflow-x-hidden min-w-screen w-screen'>
      <Header />
      <About />
      <VideoComponent />
      <BestOfTheBest />
      <Testimonials />
      {/* <WhatsappComponent /> */}
    </main>
  );
};

export default page;
