import * as React from 'react';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MyApp from '@app/layout/_app';
import SignupPage from '@app/pages/signup/index';
import LoginPage from '@app/pages/login/index';
import { useContext } from 'react';
import { RouterContext, RouterProvider } from './layout/context/usercontext';
import Dashboard from './pages/dashboard';
import Setting from './pages/setting';
import Home from './pages/home';
import { LibraryProvider } from './layout/context/librarycontext';
import ForgetPassword from './pages/forgetPassword';
import ResetEmail from './pages/forgetPassword/resetEmail';
import NewTag from './components/addTag';
import Notifications from './pages/notification';
import UserRoles from './pages/userRoles';
import OnBoarding from './pages/onBoarding';
import AllTags from './components/allTags';
import Table from './pages/table';
import CongratScreen from './pages/onBoarding/CongratsScreen';
import SyncDataScreen from './pages/onBoarding/syncingData';
import SyncDataSuccess from './pages/onBoarding/syncingDataSuccess';
import SignupBoarding from './pages/onBoarding/signupBoarding';

function Main() {
  const { isLoggedIn } = useContext(RouterContext);

  return (
    <Routes>
      <Route
        path="/signup"
        element={<MyApp Component={SignupPage} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path="/login"
        element={
          !isLoggedIn ? (
            <MyApp Component={LoginPage} pageProps={{}}></MyApp>
          ) : (
            <Navigate to="/" replace={true} />
          )
        }
      ></Route>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <MyApp Component={Home} pageProps={{}}></MyApp>
          ) : (
            <Navigate to="/login" replace={true} />
          )
        }
      ></Route>
      <Route
        path="/forgetPassword"
        element={<MyApp Component={ResetEmail} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path="/resetPassword"
        element={<MyApp Component={ForgetPassword} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path="/setting"
        element={<MyApp Component={Setting} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path="/dashboard"
        element={<MyApp Component={Dashboard} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path="/newTag"
        element={<MyApp Component={NewTag} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path="/allTags"
        element={<MyApp Component={AllTags} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path={`/library/:libraryId`}
        element={<MyApp Component={Home} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path={`/library/:libraryId/:groupId`}
        element={<MyApp Component={Home} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path={'/notifications'}
        element={<MyApp Component={Notifications} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path={'/userRoles'}
        element={<MyApp Component={UserRoles} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path={'/onBoard'}
        element={<MyApp Component={OnBoarding} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path={'/table'}
        element={<MyApp Component={Table} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path={'/boardSignup'}
        element={<MyApp Component={SignupBoarding} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path={'/congratsScreen'}
        element={<MyApp Component={CongratScreen} pageProps={{}}></MyApp>}
      ></Route>

      <Route
        path={'/SyncDataScreen'}
        element={<MyApp Component={SyncDataScreen} pageProps={{}}></MyApp>}
      ></Route>
      <Route
        path={'/SyncDataSuccess'}
        element={<MyApp Component={SyncDataSuccess} pageProps={{}}></MyApp>}
      ></Route>
    </Routes>
  );
}

render(
  <Router>
    <RouterProvider>
      <LibraryProvider>
        <Main />
      </LibraryProvider>
    </RouterProvider>
  </Router>,
  document.getElementById('app'),
);
