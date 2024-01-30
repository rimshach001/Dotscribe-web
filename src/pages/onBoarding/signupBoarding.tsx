import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';
import { Page } from '@app/types';
import BoardingPanel from './boardingPanel';

const SignupBoarding: Page = () => {
  const navigate = useNavigate();
  const [Occupation, setOccupation] = useState(null);
  const allOccupations = [
    { name: 'doctor', code: 'NY' },
    { name: 'business', code: 'RM' },
  ];
  return (
    <div className="grid">
      <div className="col-3">
        <BoardingPanel />
      </div>
      <div
        className="col-7"
        style={{ paddingLeft: '7%', paddingRight: '7%', paddingTop: '3%' }}
      >
        <div>
          <span
            className="text-black-alpha-90 text-600 firaSans"
            style={{ fontSize: '2rem' }}
          >
            Get Started
          </span>
          <p style={{ color: '#2D2C2C', fontSize: '1.1rem' }}>
            Get Started in minutes- with 3 easy steps.
          </p>
        </div>
        <div className="mt-4">
          <p
            className="font-bold text-black-alpha-90"
            style={{ fontSize: '1.5rem' }}
          >
            Download App for Free
          </p>

          <p style={{ fontSize: '16px', color: '#2D2C2C' }}>
            Enter your information to get started
          </p>
          <div>
            <div className="grid mt-3">
              <div className=" col-6 flex flex-column gap-2">
                <label htmlFor="username">First Name</label>
                <InputText
                  className="border-round-xs border-bottom-3"
                  placeholder="Start typing the name"
                  style={{
                    color: '#2D2C2C',
                    backgroundColor: '#F8F8F8',
                    borderColor: '#CECECE',
                    height: '40px',
                  }}
                  id="firstname"
                  aria-describedby="username-help"
                />
              </div>
              <div className=" col-6 flex flex-column gap-2">
                <label htmlFor="username">Second Name</label>
                <InputText
                  className="border-round-xs  border-bottom-3"
                  placeholder="Start typing the name"
                  style={{
                    color: '#2D2C2C',
                    backgroundColor: '#F8F8F8',
                    borderColor: '#CECECE',
                    height: '40px',
                  }}
                  id="secondname"
                  aria-describedby="username-help"
                />
              </div>
              <div className=" col-12 flex flex-column gap-2">
                <label htmlFor="username">Email Address</label>
                <InputText
                  className="border-round-xs  border-bottom-3"
                  placeholder="Start typing the name"
                  style={{
                    color: '#2D2C2C',
                    backgroundColor: '#F8F8F8',
                    borderColor: '#CECECE',
                    height: '40px',
                  }}
                  id="email"
                  aria-describedby="username-help"
                />
              </div>
              <div className=" col-12 flex flex-column gap-2">
                <label htmlFor="username"> Country</label>
                <InputText
                  className="border-round-xs  border-bottom-3"
                  placeholder="Start typing the name"
                  style={{
                    color: '#2D2C2C',
                    backgroundColor: '#F8F8F8',
                    borderColor: '#CECECE',
                    height: '40px',
                  }}
                  id="country"
                  aria-describedby="username-help"
                />
              </div>
              <div className=" col-12 flex flex-column gap-2">
                <label htmlFor="username">Occupation</label>
                <Dropdown
                  value={Occupation}
                  onChange={(e) => setOccupation(e.value)}
                  options={allOccupations}
                  optionLabel="name"
                  placeholder="Choose your occupation"
                  className="w-full border-round-xs  border-bottom-3 custom-dropdown "
                  style={{
                    // color: '#2D2C2C',
                    backgroundColor: '#F8F8F8',
                    borderColor: '#CECECE',
                    height: '40px',
                  }}
                />
              </div>
              <div className=" col-12 flex flex-column gap-2">
                <label htmlFor="username">Electronic Health Record</label>
                <InputText
                  className="border-round-xs  border-bottom-3"
                  placeholder="Start typing the name"
                  style={{
                    color: '#2D2C2C',
                    backgroundColor: '#F8F8F8',
                    borderColor: '#CECECE',
                    height: '40px',
                  }}
                  id="healthrecord"
                  aria-describedby="username-help"
                />
              </div>
              <div className=" col-12 flex flex-column gap-2">
                <label htmlFor="username">Referred By</label>
                <InputText
                  className="border-round-xs  border-bottom-3"
                  placeholder="Start typing the name"
                  style={{
                    color: '#2D2C2C',
                    backgroundColor: '#F8F8F8',
                    borderColor: '#CECECE',
                    height: '40px',
                  }}
                  id="referedBy"
                  aria-describedby="username-help"
                />
              </div>
              <div className=" col-12 flex flex-column gap-2">
                <Button label="Download App" style={{ height: '40px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => navigate('/congratsScreen')}
        className="col-2"
        style={{ marginTop: '20%' }}
      >
        <img src="/src/assets/images/rightArrow.svg" alt="Image" className="" />
      </div>
    </div>
  );
};

SignupBoarding.getLayout = function getLayout(page) {
  return <React.Fragment>{page}</React.Fragment>;
};
export default SignupBoarding;
