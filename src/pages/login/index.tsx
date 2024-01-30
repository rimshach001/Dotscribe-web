import React, { useContext, useState } from 'react';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from 'primereact/inputswitch';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '@server/functions/functions';
import { Page } from '@app/types/layout';
import { RouterContext } from '@app/layout/context/usercontext';
import ResetFooter from '@app/pages/forgetPassword/resetFooter';

const LoginPage: Page = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useContext(RouterContext);

  const handleLogin = async () => {
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Email and password are required');
      setLoading(false);
      return;
    }

    try {
      const user = await signin(email, password);
      console.log(user, 'user');

      setUser(user);
      setIsLoggedIn(true);
      navigate('/');
    } catch (e) {
      setError('Invalid credentials');
    }

    setLoading(false);
  };

  return (
    <div className="">
      <div className="top grid">
        <div className="col-9 p-0 m-0">
          <img src="/src/assets/images/logo.png" alt="Image" width="20%" />
        </div>
        <div className="col-3 flex justify-content-center">
          <Button label="Free Download" className="download-button" />
        </div>
      </div>

      <div className="grid">
        <div className="xl:col-7 col-12 mt-8">
          <div className="login-form">
            <div>
              <span className="text-4xl font-medium greenColor">
                Welcome to DotScribe
              </span>
              <p className="text-gray-400">
                Enter your email and password to signin
              </p>
            </div>
            <div className="mt-5">
              <label htmlFor="email1" className="text-lg labels">
                Email
              </label>
              <InputText
                id="email1"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="text-box"
                style={{ padding: '1rem', borderRadius: '1rem' }}
              />

              <label htmlFor="password1" className="text-lg labels mt-2">
                Password
              </label>
              <Password
                inputId="password1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                toggleMask
                feedback={false}
                className="text-box"
                inputClassName="w-full p-3"
              ></Password>

              {error ? (
                <div>
                  <p className="font-medium mb-3 text-red-500">{error}</p>
                </div>
              ) : (
                <></>
              )}

              <Link to="/forgetPassword">
                <p
                  className="font-medium no-underline cursor-pointer mb-3 "
                  style={{ color: 'var(--primary-color)' }}
                >
                  Forgot password?
                </p>
              </Link>
              <div className="flex align-items-center mb-4">
                <InputSwitch
                  id="rememberme1"
                  checked={checked}
                  onChange={(e) => setChecked(e.value)}
                  className="mr-2"
                />
                <label htmlFor="rememberme1">Remember me</label>
              </div>
              <Button
                loading={loading}
                label="SIGN IN"
                className="w-full border-round-2xl"
                onClick={handleLogin}
              ></Button>
              <div className="text-signup">
                <div>
                  <p className="text-gray-500">
                    Don&apos;t have an account? <Link to="/signup">Signup</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm-login-screen xl:col-5 flex justify-content-end ">
          <img
            src="/src/assets/images/login-image.png"
            alt=""
            style={{
              maxHeight: '92vh',
            }}
          />
        </div>
      </div>
      <div>
        <ResetFooter />
      </div>
    </div>
  );
};

LoginPage.getLayout = function getLayout(page) {
  return <React.Fragment>{page}</React.Fragment>;
};
export default LoginPage;
