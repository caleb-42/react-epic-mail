import React from 'react';
import PropTypes from 'prop-types';

const Features = ({ className }) => {
  const feats = [
    {
      art: 'devices',
      caption: 'Control from any device',
      details: 'The app is allows you view and send mails from your phones, tablets and desktop devices'
    },
    {
      art: 'upload',
      caption: 'Picture upload',
      details: 'Place an image to that wonderful reputation of yours by Uploading a display picture'
    },
    {
      art: 'reset',
      caption: 'Password reset',
      details: 'Ever forgot your password and wondered how you could reset it... Epic mail to the rescue.'
    },
    {
      art: 'sms',
      caption: 'SMS Messaging',
      details: 'Get sms messages as an add on to your mail sending services'
    }
  ]
  return (
    <div className={className}>
      <div className="title mx-auto bg-gray-600 w-1/5 py-2 rounded-full shadow-lg -mt-8 relative z-20">
        <h3 className="text-center text-white text-2xl font-medium">Features</h3>
      </div>
      <div className="mx-auto w-3/4 py-12">
        {
          feats.map((item, index) => (
            <div key={index} className="pointer w-2/4 px-16 py-8 align-middle inline-block text-center anim">
              <div className="w-4/5 mx-auto">
                <div className={item.art}></div>
                <div className="text-center">
                  <h2 className="opac-70 text-lg font-medium my-2">{item.caption}</h2>
                  <p className="opac-50 text-sm text-gray-700">{item.details}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

Features.propTypes = {
  className: PropTypes.string
}

export default Features;