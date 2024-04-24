import React from "react";
import About from "./components/About";
import Header from "./components/Header";

const page = () => {
  return (
    <main className="flex flex-col">
      <Header />
      <About />
    </main>
  );
};

export default page;
