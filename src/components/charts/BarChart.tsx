import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { ProgressBar } from 'primereact/progressbar';
import { TabPanel, TabView } from 'primereact/tabview';

const BarChart = () => {
  const [chartData2, setChartData] = useState({});
  const [chartOptions2, setChartOptions] = useState({});
  const documentStyle = getComputedStyle(document.documentElement);
  const textColorSecondary = documentStyle.getPropertyValue(
    '--text-color-secondary',
  );

  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: '',
        borderColor: 'rgb(255,255,255)',
        data: [200, 100, 500, 300, 300, 200, 400],
        backgroundColor: 'rgb(255,255,255)',
        tension: 0.3,
        barPercentage: 0.1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };
  useEffect(() => {
    setChartData(data);
    setChartOptions(options);
  }, []);
  return (
    <div className="">
      <span className="text-xl text-black-alpha-90 text-lg">
        Productivity Time/Characters
      </span>
      <TabView activeIndex={0}>
        <TabPanel header="Dashboard">
          <div className="md:h-auto">
            <Chart
              type="bar"
              className="bar"
              data={chartData2}
              options={chartOptions2}
            />
          </div>
          <div className="grid col-12">
            <div className="col-6 md:col-3 m-0">
              <div className="flex">
                <img
                  src="/src/assets/images/todayIcon.svg"
                  alt="Image"
                  className=""
                />
                <p className="text-black-alpha-90">Today</p>
              </div>
              <span className="text-black-alpha-90 text-xl">54,678</span>
              <ProgressBar
                style={{
                  maxHeight: 4,
                }}
                value={50}
                showValue={false}
                className="mt-2"
              ></ProgressBar>
            </div>
            <div className="col-6 md:col-3 m-0">
              <div className="flex">
                <img
                  src="/src/assets/images/todayIcon.svg"
                  alt="Image"
                  className=""
                />
                <p className="text-black-alpha-90">Yesterday</p>
              </div>
              <span className="text-black-alpha-90 text-xl">54,678</span>
              <ProgressBar
                style={{
                  maxHeight: 4,
                }}
                value={10}
                showValue={false}
                className="mt-2"
              ></ProgressBar>
            </div>
            <div className="col-6 md:col-3 m-0">
              <div className="flex">
                <img
                  src="/src/assets/images/todayIcon.svg"
                  alt="Image"
                  className=""
                />
                <p className="text-black-alpha-90  text-100 xl:text-sm xl:mt-1">
                  This week
                </p>
              </div>
              <span className="text-black-alpha-90 text-xl">54,678</span>
              <ProgressBar
                style={{
                  maxHeight: 4,
                }}
                value={80}
                showValue={false}
                className="mt-2"
              ></ProgressBar>
            </div>
            <div className="col-6 md:col-3">
              <div className="flex">
                <img
                  src="/src/assets/images/todayIcon.svg"
                  alt="Image"
                  className=""
                />
                <p className="text-black-alpha-90  text-100 xl:text-sm xl:mt-1">
                  Last week
                </p>
              </div>
              <span className="text-black-alpha-90 text-xl">54,678</span>
              <ProgressBar
                style={{
                  maxHeight: 4,
                }}
                value={10}
                showValue={false}
                className="mt-2"
              ></ProgressBar>
            </div>
          </div>
          <div className="grid col-12">
            <div className="col-6 md:col-3">
              <div className="flex">
                <img
                  src="/src/assets/images/todayIcon.svg"
                  alt="Image"
                  className=""
                />
                <p className="text-black-alpha-90">Today</p>
              </div>
              <span className="text-black-alpha-90 text-xl">54,678</span>
              <ProgressBar
                style={{
                  maxHeight: 4,
                }}
                value={43}
                showValue={false}
                className="mt-2"
              ></ProgressBar>
            </div>
            <div className="col-6 md:col-3">
              <div className="flex">
                <img
                  src="/src/assets/images/todayIcon.svg"
                  alt="Image"
                  className=""
                />
                <p className="text-black-alpha-90">Yesterday</p>
              </div>
              <span className="text-black-alpha-90 text-xl">54,678</span>
              <ProgressBar
                style={{
                  maxHeight: 4,
                }}
                value={22}
                showValue={false}
                className="mt-2"
              ></ProgressBar>
            </div>
            <div className="col-6 md:col-3">
              <div className="flex">
                <img
                  src="/src/assets/images/todayIcon.svg"
                  alt="Image"
                  className=""
                />
                <p className="text-black-alpha-90 text-100 xl:text-sm xl:mt-1">
                  This week
                </p>
              </div>
              <span className="text-black-alpha-90 text-xl">54,678</span>
              <ProgressBar
                style={{
                  maxHeight: 4,
                }}
                value={10}
                showValue={false}
                className="mt-2"
              ></ProgressBar>
            </div>
            <div className="col-6 md:col-3">
              <div className="flex">
                <img
                  src="/src/assets/images/todayIcon.svg"
                  alt="Image"
                  className=""
                />
                <p className="text-black-alpha-90 text-100 xl:text-sm xl:mt-1">
                  Last week
                </p>
              </div>
              <span className="text-black-alpha-90 text-xl">54,678</span>
              <ProgressBar
                style={{
                  maxHeight: 4,
                }}
                value={32}
                showValue={false}
                className="mt-2"
              ></ProgressBar>
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Phrases"></TabPanel>
        <TabPanel header="AutoCorrect"></TabPanel>
      </TabView>
    </div>
  );
};
BarChart.displayName = 'BarChart';
export default BarChart;
