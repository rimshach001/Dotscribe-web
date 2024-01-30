import React from 'react';
import { Timeline } from 'primereact/timeline';

const BoardingPanel = () => {
  const events = [
    {
      status: 'Download App',
    },
    {
      status: 'Signup',
    },
    {
      status: 'Open App',
    },
  ];
  return (
    <div className="boardingMenu " style={{ paddingTop: '25%' }}>
      <div className="flex justify-content-center ">
        <img
          src={`/src/assets/images/dotScribe-Logo-white.svg`}
          alt="logo"
          className=""
        />
      </div>
      <div
        className="flex justify-content-Center mt-6"
        style={{ width: '70%', marginLeft: '15%' }}
      >
        <p className="text-3xl text-white-alpha-90 font-medium firaSans">
          Quick & Easy Setup
        </p>
      </div>
      <div style={{}}>
        <div className="mt-6 ">
          <Timeline
            className="text-white-alpha-90 text-xl "
            value={events}
            content={(item) => item.status}
            style={{ textAlign: 'left' }}
            // flex align-items-start
          />
        </div>
      </div>
    </div>
  );
};
BoardingPanel.displayName = 'BoardingPanel';
export default BoardingPanel;
