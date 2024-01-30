import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import { Page } from '@app/types/layout';
import ResetBackground from '@app/pages/forgetPassword/resetBackground';
import ResetFooter from '@app/pages/forgetPassword/resetFooter';

const ResetEmail: Page = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const reset = () => {
    navigate('/resetPassword');
    console.log('okkk');
  };
  return (
    <div className="signpContainer">
      <ResetBackground />
      <div
        className="w-full flex justify-content-center"
        style={{ marginTop: '10%' }}
      >
        <div
          className="shadow-2 border-round-2xl form p-6"
          style={{ backgroundColor: 'white' }}
        >
          <p
            className="text-4xl font-bold flex justify-content-center"
            style={{ color: '#2D2C2C' }}
          >
            Reset Your Password
          </p>
          <div className="flex justify-content-center mt-4">
            <p className="text-xl w-21rem " style={{ color: '#2D3748' }}>
              Lost your password? Please enter your email address to receive a
              link to create a new password.
            </p>
          </div>
          <div className="mt-4">
            <label htmlFor="firstname" className="text-2xl">
              Email*
            </label>
            <InputText
              id="email1"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full"
            />
          </div>
          <div className="mt-4">
            <Button
              label="RESET PASSWORD"
              className="w-full pt-2 "
              onClick={reset}
              style={{ height: '2em' }}
            ></Button>
          </div>
        </div>
      </div>
      <div>
        <ResetFooter />
      </div>
    </div>
  );
};

ResetEmail.getLayout = function getLayout(page) {
  return <React.Fragment>{page}</React.Fragment>;
};
export default ResetEmail;
