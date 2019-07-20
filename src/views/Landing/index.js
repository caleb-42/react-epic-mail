import React from "react";
import Nav from "@components/NavBar";
import Carousel from "@components/Carousel";
import '@styles/main.css';
import './index.scss';
import Features from "./Features";
import Offers from "./Offers";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <Nav />
      <Carousel />
      <Offers className="w-full pt-12 pb-20 bg-white offers relative z-10" />
      <Features className="features bg-white relative" />
      <Footer className="bg-gray-500 text-center text-md py-4" />
    </div >
  );
};
export default Landing;
