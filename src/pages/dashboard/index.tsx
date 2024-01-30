import React from 'react';
import BarChart from '@app/components/charts/BarChart';
import LineChart from '@app/components/charts/LineChart';
import MostUsedPhrases from '@app/components/tables/MostUsedPhrases';
import MostMisspelledWords from '@app/components/tables/MostMisspelledWords';
import Layout from '@app/App';
import InfoBarSettingScreen from '@app/components/headingBarDashboardScreen';

const Dashboard = () => (
  <Layout>
    <div className="main">
      <InfoBarSettingScreen />

      <div className="grid mt-3">
        <div className="col-12 lg:col-6">
          <div className="p-3 card h-full">
            <BarChart></BarChart>
          </div>
        </div>
        <div className="col-12 lg:col-6">
          <div className="p-3 card h-full">
            <LineChart></LineChart>
          </div>
        </div>
        <div className="col-12 lg:col-6">
          <div className="p-3 card h-full">
            <MostUsedPhrases></MostUsedPhrases>
          </div>
        </div>
        <div className="col-12 lg:col-6">
          <div className="p-3 card h-full">
            <MostMisspelledWords></MostMisspelledWords>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

Dashboard.getLayout = function getLayout(page) {
  return <>{page}</>;
};
export default Dashboard;
