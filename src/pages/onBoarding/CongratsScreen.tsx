import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Page } from '@app/types';
import BoardingPanel from './boardingPanel';

const CongratScreen: Page = () => {
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
        <div className="" style={{ width: '80%' }}>
          <div>
            <p
              style={{ fontSize: '2.5rem', textAlign: 'center' }}
              className="font-bold text-black-alpha-90 flex justify-content-center firaSans"
            >
              Congratulation! We are ready for next step
            </p>
            <div style={{ width: '80%', marginLeft: '10%' }} className="">
              <p
                style={{
                  fontSize: '1.25rem',
                  color: '#6D6D6D',
                  textAlign: 'center',
                }}
                className="flex justify-content-center"
              >
                Download link will be sent to your email. Free Version grants
                full access to all features for 1 year. No credit card required.
                Currently only available for windows.
              </p>
            </div>
          </div>
          <div className="flex justify-content-center mt-5 pt-5">
            <img
              src="/src/assets/images/checkMark.svg"
              alt="Image"
              className=""
            />
          </div>
          <div className="flex justify-content-center  mt-5 pt-5">
            <Button
              style={{ backgroundColor: '#21A1A1', width: '15rem' }}
              label="Next Step"
              className="border-round-xs"
              onClick={() => navigate('/SyncDataScreen')}
            >
              <i className="pi pi-chevron-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

CongratScreen.getLayout = function getLayout(page) {
  return <React.Fragment>{page}</React.Fragment>;
};
// CongratScreen.displayName = 'CongratScreen';
export default CongratScreen;
