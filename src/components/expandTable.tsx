import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

import { TabView, TabPanel } from 'primereact/tabview';

import React from 'react';

// eslint-disable-next-line react/prop-types
const ExpandedRowDetails = ({ data }) => {
  // eslint-disable-next-line no-console
  console.log(data);
  return (
    <div className="p-3">
      <TabView activeIndex={0}>
        {''}
        <TabPanel header="All Properties">
          <div style={{ height: '100px', overflow: 'auto' }}>
            <DataTable resizableColumns value={[data]}>
              <Column
                field="name"
                header="Name"
                headerStyle={{ minWidth: '15rem' }}
              />
              <Column
                field="id"
                header="Abbreviation"
                headerStyle={{ minWidth: '15rem' }}
              />
              <Column
                field="content"
                header="Content"
                headerStyle={{ minWidth: '40rem' }}
                style={{ maxWidth: '40rem' }}
              />
            </DataTable>
          </div>
        </TabPanel>
        <TabPanel header="Your Properties"></TabPanel>
        <TabPanel header="Mixpanel Properties"></TabPanel>
      </TabView>
    </div>
  );
};

export default ExpandedRowDetails;
