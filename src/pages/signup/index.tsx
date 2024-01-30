import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import { Link, useNavigate } from 'react-router-dom';
import { Page } from '@app/types/layout';
import { signup } from '@server/functions/functions';

const SignupPage: Page = () => {
  const [firstname, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [organizationName, setOrganizationName] = useState('');

  const navigate = useNavigate();
  const handleSignup = async () => {
    setError('');
    setLoading(true);
    if (
      !firstname ||
      !lastName ||
      !email ||
      !organizationName ||
      !password ||
      !confirmPassword
    ) {
      setError('All fields are required');
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      setError('Password should be at least 8 characters long');
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      setLoading(false);
      return;
    }

    try {
      const name = `${firstname} ${lastName}`;
      await signup(
        name,
        email,
        password,
        firstname,
        lastName,
        organizationName,
      );

      navigate('/login');
    } catch (e) {
      setError(
        'Invalid Credentials. Try again or Click Forgot Password to reset.',
      );
    }
    setLoading(false);
  };

  return (
    <div className="signpContainer">
      <div className="w-full">
        <div className="upper grid">
          <div className="col-8 p-0 m-0">
            <img
              src="/src/assets/images/dotScribe-Logo-white.svg"
              alt="Image"
              width="30%"
            />
          </div>
          <div className="col-4 flex justify-content-end pr-7">
            <Button label="Free Download" className="download-button" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-content-center">
        <div className="form-container ">
          <h2 className="wlcm-heading-signup">Welcome!</h2>
          <p className="wlcm-text-signup">
            Get medical writing and decision-making suggestions anywhere
            youtype. Your new personal scribe and AL assistant works in all
            desktop apps and EHRs
          </p>
          <div className="signup">
            <div className="register-text">
              <h5>Register with</h5>
            </div>
            <div className="md:mx-7">
              <div className="grid">
                <div className="btn-group">
                  <Button className="bg-white hover:bg-white border-gray-300 hover:border-gray-200  cursor-pointer">
                    <img alt="google" src="/src/assets/images/google.svg"></img>
                  </Button>
                  <Button className="bg-white hover:bg-white border-gray-300 hover:border-gray-200  cursor-pointer ml-3">
                    <img alt="apple" src="/src/assets/images/apple.svg"></img>
                  </Button>
                  <Button className="bg-white hover:bg-white border-gray-300 hover:border-gray-200  cursor-pointer ml-3">
                    <img
                      alt="facebook"
                      src="/src/assets/images/facebook.svg"
                    ></img>
                  </Button>
                </div>
                <Divider layout="horizontal" align="center">
                  <span className="text-gray-700">OR</span>
                </Divider>
              </div>
              <div className="grid">
                <div className="col-6">
                  <label htmlFor="firstname" className="details">
                    Full Name
                  </label>
                  <InputText
                    id="firstname"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="First Name"
                    className="w-full"
                  />
                </div>
                <div className=" col-6">
                  <label htmlFor="lastname" className="details">
                    Last Name
                  </label>
                  <InputText
                    id="lastname"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="email1" className="details">
                    Email Address
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
                <div className="col-12">
                  <label htmlFor="email1" className="details">
                    Organization Name
                  </label>
                  <InputText
                    id="organizationName"
                    type="text"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                    placeholder="Organization Name"
                    className="w-full"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="password1" className="details">
                    Password
                  </label>
                  <Password
                    inputId="password1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    toggleMask
                    feedback={false}
                    className="w-full"
                    inputClassName="w-full"
                  ></Password>
                </div>
                <div className="col-6">
                  <label htmlFor="confirm" className="details">
                    Confirm Password
                  </label>
                  <Password
                    required
                    inputId="confirm"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    toggleMask
                    feedback={false}
                    className="w-full"
                    inputClassName="w-full"
                  ></Password>
                </div>
              </div>
              {error ? (
                <div>
                  <p className="font-medium mb-3 text-red-500">{error}</p>
                </div>
              ) : (
                <></>
              )}

              <div className="checkbox mt-2">
                <Checkbox
                  inputId="rememberme1"
                  checked={checked}
                  onChange={(e) => setChecked(e.checked ?? false)}
                  className="mr-2"
                ></Checkbox>
                <label htmlFor="rememberme1" className="text-medium text-500">
                  <p style={{ color: '#A0AEC0' }}>
                    By registering, you sign up for the email notifications and
                    agree with our
                    <Link to="/policy"> privacy policy</Link> and{' '}
                    <Link to="/terms"> terms and conditions</Link>
                  </p>
                </label>
              </div>
              <Button
                label="SIGN UP"
                className="w-full pt-2 mb-0 mt-2"
                onClick={handleSignup}
                loading={loading}
                style={{ height: '2em' }}
              ></Button>
              <div className="text-center mt-1">
                <p>
                  Already have an account? <Link to="/login">Signin</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignupPage.getLayout = function getLayout(page) {
  return <React.Fragment>{page}</React.Fragment>;
};
export default SignupPage;
