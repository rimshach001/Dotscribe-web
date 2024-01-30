// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unused-vars */
import { classNames } from 'primereact/utils';
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { InputText } from 'primereact/inputtext';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';
import { getUser, signOut } from '@server/functions/functions';
import { AppTopbarRef } from '@app/types/index';
import { LayoutContext } from '@app/layout/context/layoutcontext';
import { RouterContext } from '@app/layout/context/usercontext';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Divider } from 'primereact/divider';
import InfoBar from './headingBar';
import { log } from 'console';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
  const { layoutState } = useContext(LayoutContext);
  const menubuttonRef = useRef(null);
  const topbarmenuRef = useRef(null);
  const topbarmenubuttonRef = useRef(null);
  const menuLeft = useRef<unknown>(null);
  const navigate = useNavigate();
  const op = useRef(null);
  const { setIsLoggedIn, setUser, user } = useContext(RouterContext);

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current,
  }));
  const getEmail = () => {
    console.log(user.attributes.email);

    // if (
    //   user &&
    //   user.userData &&
    //   user.userData.attributes &&
    //   user.userData.attributes.email
    // ) {
    //   console.log(user.userData.attributes.email, 'userrrr');
    // } else {
    //   console.log('Email not found in user data');
    // }
  };
  const items: MenuItem[] | undefined = [
    {
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-chart-line',
          command: () => {
            signOut();
            setIsLoggedIn(false);
            setUser(null);
            navigate('/dashboard');
          },
        },
        {
          label: 'Settings',
          icon: 'pi pi-cog',
          command: () => {
            signOut();
            setIsLoggedIn(false);
            setUser(null);
            navigate('/setting');
          },
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          command: () => {
            signOut();
            setIsLoggedIn(false);
            setUser(null);
            navigate('/login');
          },
        },
      ],
    },
  ];
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: '/src/assets/images/notification-username-icon.svg',
      message:
        'Lorem ipsum dolor sit amet. Qui iusto iure est quae praesentium et omnis ipsam.',
    },
    {
      id: 2,
      icon: '/src/assets/images/notification-username-icon.svg',
      message:
        'Lorem ipsum dolor sit amet. Qui iusto iure est quae praesentium et omnis ipsam.',
    },
  ]);
  return (
    <div className="layout-topbar">
      {/* <a href="" className="layout-topbar-logo big-logo">
        <img src={`/src/assets/images/logo.png`} alt="logo" />
      </a>
      <a href="" className="layout-topbar-logo small-logo mt-3">
        <img src={`/src/assets/images/logo-small.png`} alt="logo" />
      </a> */}
      <div className="background-div my-3">
        <div className="grid m-4 md:mb-7">
          <div className="col-4 xl:col-2">
            <p className="m-0 text-white">Pages / Community</p>
            <p className="m-0 text-white font-medium">Phrases</p>
          </div>
          <div className="col-8 xl:col-5"></div>
          <div className="col-4 xl:col-2  flex xl:justify-content-end">
            <img src={`/src/assets/images/downloadOrange.svg`} alt="logo" />
          </div>
          <div className="col-8 xl:col-3 flex justify-content-end">
            <div className="flex justify-content-between">
              <Button
                icon="pi pi-user"
                onClick={getEmail}
                rounded
                text
                className="text-white"
              />
              <div
                style={{ color: 'white' }}
                className="flex align-self-center"
              >
                <p>{user.attributes.email}</p>
              </div>
              <Button
                icon="pi pi-cog"
                rounded
                text
                aria-label="Filter"
                className="text-white"
                aria-controls="popup_menu_left"
                // @ts-ignore
                onClick={(event) => menuLeft.current?.toggle(event)}
              />
              <Button
                icon="pi pi-bell"
                rounded
                text
                aria-label="Filter"
                className="text-white"
                onClick={(e) => op.current.toggle(e)}
              />
              <OverlayPanel
                ref={op}
                style={{
                  width: '20%',
                  borderRadius: '1rem',
                }}
              >
                <div>
                  <div className="grid flex justify-content-between">
                    <span className="col-6" style={{ color: '#757575' }}>
                      All Notifications
                    </span>
                    <span className="col-6 " style={{ color: '#757575' }}>
                      Mark All as read
                    </span>
                  </div>
                  <Divider />
                  {notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="grid m-0"
                      style={{ backgroundColor: '#fafafa' }}
                    >
                      <img
                        src={notification.icon}
                        className="col-3 flex align-self-start mt-1 "
                        alt="logo"
                        style={{ width: '17%' }}
                      />
                      <span style={{ color: '#757575' }} className="col-9">
                        {notification.message}
                      </span>
                    </div>
                  ))}
                  <div
                    className="flex justify-content-center mt-2"
                    onClick={() => navigate('/notifications')}
                  >
                    <p style={{ color: '#21a1a2' }}>View All</p>
                  </div>
                </div>
              </OverlayPanel>
            </div>
          </div>
        </div>
        <div
          ref={topbarmenuRef}
          className={classNames('layout-topbar-menu grid', {
            'layout-topbar-menu-mobile-active':
              layoutState.profileSidebarVisible,
          })}
        >
          <div className="align-self-center">
            <Menu
              model={items}
              popup
              // @ts-ignore
              ref={menuLeft}
              id="popup_menu_right"
              popupAlignment="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
