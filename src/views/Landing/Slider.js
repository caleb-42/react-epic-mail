import React from 'react';
import Carousel from "@components/Carousel";

const Slider = () => {
  const slides = [
    {
      url: '../../assets/emailing.png',
      caption_sm: 'Send SMS',
      caption_lg: 'Messages',
    },
    {
      url: '../../assets/landing-sm.png',
      caption_sm: 'Snap & Upload',
      caption_lg: 'Pictures',
    },
    {
      url: '../../assets/landing-desktop.png',
      caption_sm: 'Stay',
      caption_lg: 'Connected',
    }
  ]
  return <Carousel slides={slides} />;
};

export default Slider;