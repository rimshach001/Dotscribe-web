import React from 'react';

// eslint-disable-next-line react/prop-types
const InfoBar = ({ img, heading, subHeading }) => (
  <div className="Community-heading grid p-1">
    <div className="col-2 md:col-1">
      <img src={img} alt="logo" className="Community-img" />
    </div>
    <div className="col-10 md:col-11">
      <p className="mb-0 text-xl font-medium">{heading}</p>
      <span className="text-gray-500">{subHeading}</span>
    </div>
  </div>
);
InfoBar.displayName = 'BarChart';
export default InfoBar;
