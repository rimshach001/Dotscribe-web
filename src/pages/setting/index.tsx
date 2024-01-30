import React, { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';

import Layout from '@app/App';
import InfoDetail from '@app/components/personalInfo';
import InfoBarSettingScreen from '@app/components/headingBarDashboardScreen';
import InfoBar from '@app/components/headingBar';

const Setting = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const tutorialData = [
    {
      id: 1,
      imgSrc: '/src/assets/images/tutorialimg.png',
      heading: 'How add new phrases?',
    },
    {
      id: 2,
      imgSrc: '/src/assets/images/tutorialimg.png',
      heading: 'How to manage dotScribe Library?',
    },
  ];
  const SetSettingData = ({
    state,
    setState,
    Option,
  }: {
    state: boolean;
    setState: Function;
    Option: string;
  }) => (
    <div className="flex mb-4 align-items-center">
      <InputSwitch
        className=""
        checked={state}
        onChange={(e) => setState(e.value)}
      />
      <div className="ml-3">
        <span className={state ? 'text-black-alpha-90' : 'text-gray-400'}>
          {Option}
        </span>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="main">
        <InfoBar
          img={'/src/assets/images/personImg.svg'}
          heading={'Esthera Jackson'}
          subHeading={'esthera@simmmple.com'}
        />
        <div className="grid col-12">
          <div className="p-1 col-12 xl:col-6">
            <div className="card h-full">
              <div>
                <div>
                  <p className="text-2xl text-black-alpha-90">
                    Platform Settings
                  </p>
                </div>
                <div>
                  <p className="text-black-alpha-90 mt-3">ACCOUNT</p>
                  <SetSettingData
                    state={checked1}
                    setState={setChecked1}
                    Option="Email me when someone rate my phrase"
                  />
                  <SetSettingData
                    state={checked2}
                    setState={setChecked2}
                    Option="Email me when someone shares folder with me"
                  />
                  <SetSettingData
                    state={checked3}
                    setState={setChecked3}
                    Option="Email me when someone mention me"
                  />
                </div>
                <div>
                  <p className=" text-black-alpha-90 mt-3">APPLICATION</p>
                  <SetSettingData
                    state={checked1}
                    setState={setChecked1}
                    Option="New launches and projects"
                  />
                  <SetSettingData
                    state={checked2}
                    setState={setChecked2}
                    Option="Monthly product updates"
                  />
                  <SetSettingData
                    state={checked3}
                    setState={setChecked3}
                    Option="Subscribe to newsletter"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 col-12 xl:col-6">
            <InfoDetail />
          </div>

          <div className="card col-12 mt-1">
            <p className="text-2xl text-black-alpha-90mb-0">Tutorial</p>
            <p className="text-500">See how our products works</p>
            <div className="grid col-12 ">
              {tutorialData.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="mb-2 md:col-6 lg:col-4 col-12 p-0"
                >
                  <img
                    src={tutorial.imgSrc}
                    className="w-full"
                    alt={`Tutorial ${tutorial.id}`}
                  />
                  <div className="">
                    <p className="text-500 text-sm" style={{ margin: 0 }}>
                      Tutorial # {tutorial.id}
                    </p>
                    <p className="sm:text-md sm:font-bold">
                      {tutorial.heading}
                    </p>
                    <div className="mt-4">
                      <Button label="Watch Now" outlined />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Setting.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Setting;
