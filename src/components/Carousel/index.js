import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/src/core/styles.scss';
import AwsSliderStyles from './index.scss';

const Slider = () => {
  setInterval(function () {
    document.getElementsByClassName("aws-sld__next")[0].click();
  }, 9000);
  return (
    <div>
      <AwesomeSlider bullets={false} startup={true} className="h-124" cssModule={AwsSliderStyles}>
        <div data-src="../../assets/emailing.png">
          <div className="absolute ml-32 mt-48 w-64 top-0 left-0">
            <p className="text-3xl border-green-400 w-40 border-b-4 text-white">
              Send SMS
          </p>
            <p className="text-6xl text-white">
              Messages
          </p>
          </div>
        </div>
        <div data-src="../../assets/landing-sm.png" >
          <div className="absolute ml-32 mt-48 w-64 top-0 left-0">
            <p className="text-3xl border-green-400 w-45 border-b-4 text-white">
              Snap & Upload
          </p>
            <p className="text-6xl text-white">
              Pictures
          </p>
          </div>
        </div>
        <div data-src="../../assets/landing-desktop.png" >
          <div className="absolute ml-32 mt-48 w-64 top-0 left-0">
            <p className="text-3xl border-green-400 w-20 border-b-4 text-white">
              Stay
          </p>
            <p className="text-6xl text-white">
              Connected
          </p>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;