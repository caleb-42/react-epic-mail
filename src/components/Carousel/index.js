import React from 'react';
import PropType from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/src/core/styles.scss';
import AwsSliderStyles from './index.scss';

const Slider = ({ slides }) => {
  setInterval(function () {
    document.getElementsByClassName("aws-sld__next")[0].click();
  }, 9000);
  return (
    <div className="z-20 relative">
      <AwesomeSlider bullets={false} startup={true} className="h-124" cssModule={AwsSliderStyles}>
        {
          slides.map(({ url, caption_sm, caption_lg }, index) => (
            <div key={index} data-src={url}>
              <div className="absolute md:ml-32 sm:ml-18 ml-8 mt-48 w-64 top-0 left-0">
                <p className="md:text-3xl text-xl sm:text-2xl inline-block pr-4 border-green-400 border-b-4 text-white">
                  {caption_sm}
                </p>
                <p className="md:text-6xl text-4xl sm:text-5xl text-white">
                  {caption_lg}
                </p>
              </div>
            </div>
          ))
        }
      </AwesomeSlider>
    </div>
  );
};

Slider.propTypes = {
  slides: PropType.array
}

export default Slider;