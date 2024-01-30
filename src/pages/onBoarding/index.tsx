import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Page } from '@app/types';

const OnBoarding: Page = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-content-center boarding-bg"
      style={{ paddingTop: '10%' }}
    >
      <div>
        <div className=" ">
          <img
            src={`/src/assets/images/boardingLogo.svg`}
            alt="logo"
            className=""
          />
        </div>
        <p
          style={{ fontSize: '2.5rem', textAlign: 'center' }}
          className="font-bold text-white-alpha-90 flex justify-content-center firaSans"
        >
          Welcome to dotScribe
        </p>
        <p
          style={{ fontSize: '1.5rem', textAlign: 'center' }}
          className="font-bold text-white-alpha-90 flex justify-content-center "
        >
          Artificial Intelligence For Your Marketing Needs
        </p>
        <div className="flex justify-content-center">
          <Button
            style={{
              backgroundColor: 'white',
              color: '#21A1A1',
              width: '12rem',
              borderWidth: '3px',
            }}
            onClick={() => navigate('/boardSignup')}
            label="Lets Get Started"
            className="font-semibold"
          ></Button>
        </div>
      </div>
    </div>
  );
};

OnBoarding.getLayout = function getLayout(page) {
  return <React.Fragment>{page}</React.Fragment>;
};
export default OnBoarding;
