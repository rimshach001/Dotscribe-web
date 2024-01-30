import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { TabPanel, TabView } from 'primereact/tabview';

const LineChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const documentStyle = getComputedStyle(document.documentElement);
  const textColorSecondary = documentStyle.getPropertyValue(
    '--text-color-secondary',
  );
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: '',
        borderColor: 'rgba(39,156,159,255)',
        data: [1, 0.3, 5, 3, 7, 2, 4],
        fill: true,
        backgroundColor: 'rgba(39,156,159,0.3)',
        tension: 0.3,
      },
      {
        label: '',
        borderColor: 'rgb(24,29,46)',
        data: [1.85, 1, 0, 4, 0, 0, 0],
        fill: true,
        tension: 0.4,
        backgroundColor: 'rgb(24,29,46,0.3)',
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
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
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
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
      <span style={{ margin: 0 }} className="text-xl text-black-alpha-90">
        Time Saved
      </span>
      <p>
        {' '}
        <span className="greenColor">(+5) more</span> in 2023
      </p>
      <TabView style={{ marginTop: '2%' }} activeIndex={0}>
        <TabPanel header="Dashboard">
          <Chart
            type="line"
            className="line"
            data={chartData}
            options={chartOptions}
          />
        </TabPanel>
        <TabPanel header="Phrases"></TabPanel>
        <TabPanel header="AutoCorrect"></TabPanel>
      </TabView>
    </div>
  );
};
LineChart.displayName = 'LineChart';
export default LineChart;
