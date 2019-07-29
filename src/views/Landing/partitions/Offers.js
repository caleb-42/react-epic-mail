import React from 'react';
import PropTypes from 'prop-types';

const Offers = ({ className }) => {
  const offers = ['Innovation', 'Speed', 'Support'];

  return (
    <div className={className}>
      <div className="w-2/5 mx-auto">
        <h1 className="text-center text-gray-800 w-100 text-2xl mb-4 font-extrabold">What we offer</h1>
        <div className="w-full mx-auto mb-8 flex flex-col md:flex-row">
          {
            offers.map((item, index) => (
              <div key={index} className="flex-1 inline-block">
                <div className="pointer anim w-full">
                  <div className={item}></div>
                </div>
                <h3 className="text-center w-full">{item}</h3>
              </div>
            ))
          }
        </div>

        <p className="w-100 text-center text-gray-600 text-base">Epic mail is a sleek, efficient mailing application capable of having all your messaging needs met.</p>
      </div>
    </div>
  );
};

Offers.propTypes = {
  className: PropTypes.string
}

export default Offers;