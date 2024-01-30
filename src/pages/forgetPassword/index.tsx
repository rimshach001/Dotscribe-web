import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Page } from '@app/types/layout';
import ResetBackground from '@app/pages/forgetPassword/resetBackground';
import ResetFooter from '@app/pages/forgetPassword/resetFooter';

const ForgetPassword: Page = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="signpContainer">
      <ResetBackground />
      <div
        className="w-full flex justify-content-center"
        style={{ marginTop: '10%' }}
      >
        <div
          className="shadow-4 border-round-2xl form p-6"
          style={{ backgroundColor: 'white' }}
        >
          <p
            className="text-4xl font-bold flex justify-content-center"
            style={{ color: '#2D2C2C' }}
          >
            Reset Your Password
          </p>

          <div className="mt-4">
            <label
              htmlFor="firstname"
              className="text-2xl"
              style={{ color: '#2D3748' }}
            >
              New Password*
            </label>
            <InputText
              id="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Email address"
              className="w-full border-round-2xl"
              // style={{ height: '2em' }}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="newPassword"
              className="text-2xl"
              style={{ color: '#2D3748' }}
            >
              Confirm New Password*
            </label>
            <InputText
              id="confirmNewPassword"
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full border-round-2xl"
              // style={{ height: '2em' }}
            />
          </div>
          <div className="mt-4">
            <Button
              label="Change Your Password"
              className="w-full mt-2  border-round-xl"
              onClick={() => setLoading(true)}
              loading={loading}
              style={{ height: '2em' }}
            ></Button>
          </div>
        </div>
      </div>
      <ResetFooter />
    </div>
  );
};

ForgetPassword.getLayout = function getLayout(page) {
  return <React.Fragment>{page}</React.Fragment>;
};
export default ForgetPassword;
