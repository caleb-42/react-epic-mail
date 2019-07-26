import React from 'react';
import Carousel from "@components/Carousel";

const Slider = () => {
  const slides = [
    {
      url: `emailing.png`,
      caption_sm: 'Send SMS',
      caption_lg: 'Messages',
    },
    {
      url: `landing-sm.png`,
      caption_sm: 'Snap & Upload',
      caption_lg: 'Pictures',
    },
    {
      url: `landing-desktop.png`,
      caption_sm: 'Stay',
      caption_lg: 'Connected',
    }
  ]
  return <Carousel slides={slides} />;
};

export default Slider;