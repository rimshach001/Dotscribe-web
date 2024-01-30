import React, { useState } from 'react';

import { Divider } from 'primereact/divider';

// eslint-disable-next-line react/prop-types
const InfoDetail = ({ backgroundColor }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedFullName, setEditedFullName] = useState('ABCDEF');
  const [editedMobile, setEditedMobile] = useState('(123) 456-7890');
  const [editedEmail, setEditedEmail] = useState('ABCDEF@gmail.com');
  const [editedLocation, setEditedLocation] = useState('xyz');
  const [editedText, setEditedText] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec mi non justo faucibus accumsan. Fusce dictum, tortor a luctus tristique, ipsum odio sollicitudin dui.',
  );
  const handleFullNameChange = (e) => {
    setEditedFullName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setEditedMobile(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEditedEmail(e.target.value);
  };

  const handleLocationChange = (e) => {
    setEditedLocation(e.target.value);
  };

  const toggleEditMode = () => {
    // eslint-disable-next-line no-console
    console.log(
      'info detail',
      editedFullName,
      editedLocation,
      editedEmail,
      editedMobile,
      editedText,
    );

    setIsEditMode(!isEditMode);
  };
  const handleInfoText = (e) => {
    setEditedText(e.target.value);
  };
  const ShowData = ({
    heading,
    details,
  }: {
    heading: string;
    details: string;
  }) => (
    <div className="profie-detail-rows">
      <p className="text-gray-600">{heading}</p>
      <p className="profie-detail-rows-p text-gray-500">{details}</p>
    </div>
  );
  return (
    <div className="card h-full" style={{ backgroundColor }}>
      <div>
        <div className="flex justify-content-between align-items-center mb-2">
          <p className="text-2xl text-black-alpha-90 mb-0">
            Profile Infomation
          </p>
          <div>
            {isEditMode ? (
              <img
                src="/src/assets/images/check.png"
                alt="Save"
                className="edit-icon"
                onClick={toggleEditMode}
              />
            ) : (
              <img
                src="/src/assets/images/editing.png"
                alt="Edit"
                className="edit-icon"
                onClick={toggleEditMode}
              />
            )}
          </div>
        </div>
        <div className="">
          {isEditMode ? (
            <>
              <textarea
                value={editedText}
                onChange={handleInfoText}
                className="textarea-p text-xl"
              />
              <Divider layout="horizontal" align="center"></Divider>

              <div className="profie-detail-rows">
                <h6>Full name:</h6>
                <input
                  type="text"
                  value={editedFullName}
                  onChange={handleFullNameChange}
                  className="profie-detail-rows-p"
                />
              </div>
              <div className="profie-detail-rows">
                <h6>Mobile:</h6>
                <input
                  type="text"
                  value={editedMobile}
                  onChange={handleMobileChange}
                  className="profie-detail-rows-p"
                />
              </div>
              <div className="profie-detail-rows">
                <h6>Email:</h6>
                <input
                  type="text"
                  value={editedEmail}
                  onChange={handleEmailChange}
                  className="profie-detail-rows-p"
                />
              </div>
              <div className="profie-detail-rows">
                <h6>Location:</h6>
                <input
                  type="text"
                  value={editedLocation}
                  onChange={handleLocationChange}
                  className="profie-detail-rows-p"
                />
              </div>
              <div className="profie-detail-rows">
                <h6>Social Media:</h6>
                <div className="social-icons">
                  <img
                    src="/src/assets/images/facebookGreen.png"
                    alt="Image"
                    className="social-icon"
                  />
                  <img
                    src="/src/assets/images/twitter.png"
                    alt="Image"
                    className="social-icon"
                  />
                  <img
                    src="/src/assets/images/instagram.png"
                    alt="Image"
                    className="social-icon"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="profil-detail-rows text-gray-500">{editedText}</p>
              <Divider layout="horizontal" align="center"></Divider>
              <ShowData heading="Full name:" details={editedFullName} />
              <ShowData heading="Mobile:" details={editedMobile} />
              <ShowData heading="Email:" details={editedEmail} />
              <ShowData heading="Location:" details={editedLocation} />
              <div className="profie-detail-rows">
                <p className="text-gray-760">Social Media:</p>
                <div className="social-icons">
                  <img
                    src="/src/assets/images/facebookGreen.png"
                    alt="Image"
                    className="social-icon"
                  />
                  <img
                    src="/src/assets/images/twitter.png"
                    alt="Image"
                    className="social-icon"
                  />
                  <img
                    src="/src/assets/images/instagram.png"
                    alt="Image"
                    className="social-icon"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default InfoDetail;
