import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from 'primereact/progressbar';
import { Page } from '@app/types';
import BoardingPanel from './boardingPanel';

const SyncDataSuccess: Page = () => {
  const navigate = useNavigate();

  return (
    <div className="grid">
      <div className="col-3">
        <BoardingPanel />
      </div>
      <div
        style={{ paddingTop: '7%' }}
        className="col-9 flex justify-content-center"
      >
        <div className="" style={{ width: '60%' }}>
          <div className="flex justify-content-center">
            <img
              src="/src/assets/images/checkMark.svg"
              alt="Image"
              className=""
            />
          </div>
          <div className="mt-6">
            <p
              style={{ fontSize: '2.2rem' }}
              className="font-bold text-black-alpha-90 flex justify-content-center firaSans"
            >
              We have Successfully Synced Your Data
            </p>
            <p
              className="flex justify-content-center"
              style={{ fontSize: '1.2rem', color: '#6D6D6D' }}
            >
              We are collecting your inputs to feed AI on future steps
            </p>
          </div>
          <div className="mt-6">
            <ProgressBar
              value={100}
              color="#F7A928 "
              showValue={false}
              style={{ height: '4px' }}
            ></ProgressBar>
          </div>
          <div className="flex justify-content-center  mt-5 ">
            <p style={{ fontSize: '1.1rem', color: 'black' }}>
              Need Setup Help?
            </p>
          </div>
          <div className="flex justify-content-center mt-3">
            <div>
              <Button
                style={{
                  backgroundColor: 'white',
                  color: '#21A1A1',
                  width: '12rem',
                  borderWidth: '3px',
                }}
                onClick={() => navigate('/')}
                label="Go to Dashboard"
                className="font-semibold"
              ></Button>
              <Button
                style={{
                  backgroundColor: '#21A1A1',
                  width: '12rem',
                  borderWidth: '3px',
                  borderColor: '#21A1A1',
                }}
                label="Watch Tutorials"
                className="ml-4 font-semibold"
              >
                <i className="pi pi-chevron-right"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SyncDataSuccess.getLayout = function getLayout(page) {
  return <React.Fragment>{page}</React.Fragment>;
};
export default SyncDataSuccess;
