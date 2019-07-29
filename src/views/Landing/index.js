import React from "react";
import Nav from "@components/NavBar";
import '@styles/main.css';
import './index.scss';
import Features from "./partitions/Features";
import Offers from "./partitions/Offers";
import Slider from "./partitions/Slider";
import Footer from "../../components/Footer";

const Landing = () => {
  return (
    <div>
      <Nav />
      <Slider />
      <Offers className="w-full pt-12 pb-20 bg-white offers relative z-10" />
      <Features className="features bg-white relative" />
      <Footer className="" />
    </div >
  );
};
export default Landing;
