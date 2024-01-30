import React from 'react';
import { Link } from 'react-router-dom';

const ResetBackground = () => (
  <div className="w-full">
    <div className="upper grid pt-4">
      <div className="col-2 p-0 m-0">
        <img src="/src/assets/images/dotScribe-Logo-white.svg" alt="Image" />
      </div>
      <div className="col-8 flex justify-content-center">
        <button className="bg-transparent border-none text-white-alpha-90 text-xl">
          <img
            style={{ height: '1rem' }}
            src="/src/assets/images/dashboardIcon.svg"
            alt="Dashboard Icon"
            className="ml-1"
          />
          <Link to="/dashboard" className="text-white-alpha-90">
            Dashboard
          </Link>
        </button>
        <button className="bg-transparent border-none text-white-alpha-90 text-xl pl-3">
          <img
            style={{ height: '1rem' }}
            src="/src/assets/images/profileIcon.svg"
            alt="Profile Icon"
            className="pl-1"
          />
          <Link to="/" className="text-white-alpha-90">
            Profile
          </Link>
        </button>
        <button className="bg-transparent border-none text-white-alpha-90 text-xl pl-3">
          <img
            style={{ height: '1rem' }}
            src="/src/assets/images/signInIcon.svg"
            alt="Sign In Icon"
            className="pl-1"
          />
          <Link to="/login" className="text-white-alpha-90">
            Sign In
          </Link>
        </button>
        <button className="bg-transparent border-none text-white-alpha-90 text-xl pl-3">
          <img
            style={{ height: '1rem' }}
            src="/src/assets/images/signupIcon.svg"
            alt="Sign Up Icon"
            className="pl-1"
          />
          <Link to="/signup" className="text-white-alpha-90">
            Sign Up
          </Link>
        </button>
      </div>
      <div className="col-2 flex justify-content-betweenpr-7">
        <img src="/src/assets/images/freeDownloadWhite.svg" alt="Image" />

        {/* <Button label="Free Download" className="download-button" /> */}
      </div>
    </div>
  </div>
);
ResetBackground.displayName = 'ResetBackground';
export default ResetBackground;
