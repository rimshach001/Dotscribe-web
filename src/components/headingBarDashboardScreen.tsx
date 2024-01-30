import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const InfoBarDashboard = () => {
  const [speed, setSpeed] = useState('300');
  const [words, setWords] = useState('52,000');
  const [errors, setErrors] = useState('200');
  const [correctErrors, setCorrectErrors] = useState('100');

  return (
    <div className="Community-heading grid p-1">
      <div className="col-3 d-flex align-items-center pl-2 pr-2">
        <div
          style={{ backgroundColor: 'white' }}
          className="flex p-2 border-round-2xl align-items-center"
        >
          <div className="ml-2">
            <p style={{ fontSize: '12px', color: '#2D2C2C' }} className=" m-0">
              Typing Speed
            </p>
            <p style={{ fontSize: '18px', color: '#2D3748' }}>
              {speed} char/min <span style={{ color: '#48BB78' }}>+55%</span>
            </p>
          </div>
          <div className=" ml-auto mr-3">
            <img src={`/src/assets/images/FolderIcon.svg`} alt="Folder Icon" />
          </div>
        </div>
      </div>
      <div className="col-3 d-flex align-items-center pl-2 pr-2">
        <div
          style={{ backgroundColor: 'white' }}
          className="flex p-2 border-round-2xl align-items-center"
        >
          <div className="ml-2">
            <p style={{ fontSize: '12px', color: '#2D2C2C' }} className=" m-0">
              Words Typed
            </p>
            <p style={{ fontSize: '18px', color: '#2D3748' }}>
              {words}{' '}
              <span className="pl-3" style={{ color: '#48BB78' }}>
                +55%
              </span>
            </p>
          </div>
          <div className=" ml-auto mr-3">
            <img src={`/src/assets/images/FolderIcon.svg`} alt="Folder Icon" />
          </div>
        </div>
      </div>
      <div className="col-3 d-flex align-items-center pl-2 pr-2">
        <div
          style={{ backgroundColor: 'white' }}
          className="flex p-2 border-round-2xl align-items-center"
        >
          <div className="ml-2">
            <p style={{ fontSize: '12px', color: '#2D2C2C' }} className="m-0">
              Errors
            </p>
            <p style={{ fontSize: '18px', color: '#2D3748' }}>
              {errors}{' '}
              <span className="pl-3" style={{ color: '#48BB78' }}>
                +55%
              </span>
            </p>
          </div>
          <div className=" ml-auto mr-3">
            <img src={`/src/assets/images/FolderIcon.svg`} alt="Folder Icon" />
          </div>
        </div>
      </div>
      <div className="col-3 d-flex align-items-center pl-2 pr-2">
        <div
          style={{ backgroundColor: 'white' }}
          className="flex p-2 border-round-2xl align-items-center"
        >
          <div className="ml-2">
            <p style={{ fontSize: '12px', color: '#2D2C2C' }} className=" m-0">
              Corrected Errors
            </p>
            <p style={{ fontSize: '18px', color: '#2D3748' }}>
              {correctErrors}{' '}
              <span className="pl-3" style={{ color: '#48BB78' }}>
                +55%
              </span>
            </p>
          </div>
          <div className=" ml-auto mr-3">
            <img src={`/src/assets/images/FolderIcon.svg`} alt="Folder Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
InfoBarDashboard.displayName = 'BarChart';
export default InfoBarDashboard;
