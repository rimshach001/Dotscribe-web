import React from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const MostMisspelledWords = () => {
  const dataSample = [
    { description: 'Item A', usage: 10, percentage: 25 },
    { description: 'Item B', usage: 5, percentage: 12.5 },
    { description: 'Item C', usage: 15, percentage: 37.5 },
    { description: 'Item A', usage: 10, percentage: 25 },
    { description: 'Item B', usage: 5, percentage: 12.5 },
  ];
  const renderProgressBar = (rowData) => {
    const { percentage } = rowData;
    return (
      <>
        <p className="greenColor m-0">{percentage}%</p>
        <ProgressBar
          value={percentage}
          showValue={false}
          style={{ height: '3px' }}
        />
      </>
    );
  };
  return (
    <div className="">
      <span className="text-xl text-black-alpha-90">Most Misspelled Words</span>
      <DataTable value={dataSample} className="hide-last-divider">
        <Column
          field="description"
          header="Misspelled Words"
          style={{ backgroundColor: 'white' }}
        />
        <Column
          field="usage"
          header="Usage"
          style={{ backgroundColor: 'white' }}
        />
        <Column
          field="percentage"
          header="Percentage"
          body={renderProgressBar}
          style={{ backgroundColor: 'white' }}
        />
      </DataTable>
    </div>
  );
};

export default MostMisspelledWords;
