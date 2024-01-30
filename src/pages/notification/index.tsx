import React, { useState } from 'react';
import { Page } from '@app/types/layout';
import Layout from '@app/App';
import InfoBar from '@app/components/headingBar';

const Notifications: Page = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      date: 'today',
      message:
        'Lorem ipsum dolor sit amet. Qui iusto iure est quae praesentium et omnis ipsam.',
    },
    {
      id: 2,
      date: '2 days ago',
      message:
        'Lorem ipsum dolor sit amet. Qui iusto iure est quae praesentium et omnis ipsam.',
    },
  ]);
  const handleDeleteNotification = (id) => {
    if (window.confirm('Are you sure you want to delete this notification?')) {
      const updatedNotifications = notifications.filter(
        (notification) => notification.id !== id,
      );
      setNotifications(updatedNotifications);
    }
  };
  return (
    <Layout>
      <div className="main">
        <InfoBar
          img={`/src/assets/images/notifi-logo.svg`}
          heading={'Notification'}
          subHeading={'All Notifications'}
        />
        <div className="card mt-2">
          <div>
            <div className="grid flex justify-content-between pl-2 pr-4">
              <p
                className="font-medium text-xl col-6"
                style={{ color: '#2D3748' }}
              >
                All Notifications
              </p>
              <span
                className="col-6 flex justify-content-end"
                style={{ color: '#FF6A00' }}
              >
                Mark All as read
              </span>
            </div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-3 border-round-2xl pl-5 pr-5"
                style={{ height: '5rem', backgroundColor: '#fafafa' }}
              >
                <div className="grid ">
                  <div className="col-6">
                    <p style={{ color: '#718096' }}>{notification.date}</p>
                  </div>
                  <div
                    style={{ color: '#E53E3E' }}
                    onClick={() => handleDeleteNotification(notification.id)}
                    className="col-6 flex justify-content-end"
                  >
                    <i className="pi pi-trash mt-1 mr-1"></i>
                    <p className="font-medium ">DELETE</p>
                  </div>
                </div>
                <p style={{ color: '#A0AEC0' }} className="">
                  {notification.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
Notifications.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Notifications;
