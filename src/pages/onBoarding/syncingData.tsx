import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from 'primereact/progressbar';
import { Page } from '@app/types';
import BoardingPanel from './boardingPanel';

const SyncDataScreen: Page = () => {
  const navigate = useNavigate();

  return (
    <div className="grid">
      <div className="col-3">
        <BoardingPanel />
      </div>
      <div
        style={{ paddingTop: '15%' }}
        className="col-9 flex justify-content-center"
      >
        <div className="" style={{ width: '60%' }}>
          <div>
            <p
              style={{ fontSize: '2.2rem' }}
              className="font-bold text-black-alpha-90 flex justify-content-center firaSans"
            >
              Please wait we are syncing your data
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
              value={30}
              color="#F7A928 "
              showValue={false}
              style={{ height: '4px' }}
            ></ProgressBar>
          </div>
          <div className="flex justify-content-center  mt-5 pt-5">
            <Button
              style={{ backgroundColor: '#21A1A1', width: '15rem' }}
              label="next screen(temporary)"
              className="border-round-xs"
              onClick={() => navigate('/SyncDataSuccess')}
            >
              <i className="pi pi-chevron-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

SyncDataScreen.getLayout = function getLayout(page) {
  return <React.Fragment>{page}</React.Fragment>;
};
export default SyncDataScreen;
