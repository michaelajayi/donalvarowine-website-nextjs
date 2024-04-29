import React from "react";
import About from "./components/About";
import BestOfTheBest from "./components/BestOfTheBest";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const page = () => {
  return (
    <main className='flex flex-col'>
      <Header />
      <About />
      <BestOfTheBest />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default page;
