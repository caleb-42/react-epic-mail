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
    <div>
      <AwesomeSlider bullets={false} startup={true} className="h-124" cssModule={AwsSliderStyles}>
        {
          slides.map(({ url, caption_sm, caption_lg }, index) => (
            <div key={index} data-src={url}>
              <div className="absolute ml-32 mt-48 w-64 top-0 left-0">
                <p className="text-3xl border-green-400 inline-block border-b-4 text-white">
                  {caption_sm}
                </p>
                <p className="text-6xl inline-block text-white">
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