import React, {
  useRef,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Tag } from '@app/types/interfaces';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { updateTag } from '@server/graphql';
import { ColorPicker } from 'primereact/colorpicker';
import { InputText } from 'primereact/inputtext';
// import { Tag } from 'primereact/tag';
import UpdateTagDetails from '../dialogs/updateTag';
// eslint-disable-next-line import/extensions
// import ExpandedRowDetails from './expandTable';

// eslint-disable-next-line react/prop-types
const TagDetails = ({
  items,
  head,
  setSelectedRow,
  loading,
}: {
  items: Phrase[];
  head: unknown;
  setSelectedRow: Dispatch<SetStateAction<Phrase>>;
  loading: boolean;
  data: unknown;
}) => {
  const [expandTbl, setExpandTbl] = useState(false);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<Tag[]>([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const dt = useRef<DataTable<unknown[]>>(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [displayDialog, setDisplayDialog] = useState(false);

  const [filteredItems, setFilteredItems] = useState<Phrase[]>([]);

  useEffect(() => {
    const filtered = items.filter((item) => item._deleted !== true);
    setFilteredItems(filtered);
  }, [items]);

  const tagsBodyTemplate = (rowData: Tag) => (
    <>
      <span className="p-column-title">Tags</span>
      <div style={{ backgroundColor: `#${rowData.color}`, width: '30%' }}>
        {rowData.color}
      </div>
    </>
  );
  const onRowSelect = (event) => {
    setSelectedItem(event.data);
    setSelectedRow(event.data);
    setDisplayDialog(true);
  };
  const onHide = () => {
    setDisplayDialog(false);
    setSelectedItem(null);
  };

  const onSelectAllChange = (event: { checked: boolean }) => {
    if (event.checked) {
      setSelectAll(true);
      setSelectedItems(items);
    } else {
      setSelectAll(false);
      setSelectedItems([]);
    }
  };
  useEffect(() => {}, [selectedItem, items]);
  const paginatorRight = (
    <Button type="button" label="More Records" size="small" outlined />
  );
  const columns = [
    {
      field: 'name',
      header: 'name',
      sortable: true,
      headerStyle: { minWidth: '168px' },
      style: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        // maxWidth: '2rem',
        backgroundColor: 'white',
      },
    },
    {
      field: 'color',
      header: 'Color',
      sortable: true,
      body: tagsBodyTemplate,
      headerStyle: { minWidth: '168px', color: '#2D2C2C' },
      style: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        maxWidth: '2rem',
        color: 'white',
      },
    },
  ];
  return (
    <>
      <DataTable
        ref={dt}
        value={filteredItems}
        dataKey="id"
        paginator
        showGridlines
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        className="card datatable-responsive"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} items"
        emptyMessage="No items found."
        header={head}
        selection={selectedItems}
        selectAll={selectAll}
        onSelectAllChange={onSelectAllChange}
        onRowClick={(e) => onRowSelect(e)}
        loading={loading}
        paginatorRight={paginatorRight}
        resizableColumns
        onRowExpand={() => console.log('Row Expand Occurs')}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        onSelectionChange={(e) => setSelectedItems(e.value)}
      >
        <Column expander className="rs-expander"></Column>
        <Column
          selectionMode="multiple"
          style={{ backgroundColor: 'white' }}
          headerStyle={{ width: '3rem' }}
        />
        {columns.map((c, index) => (
          <Column
            key={index}
            field={c.field}
            header={c.header}
            body={c.body}
            sortable
            headerStyle={{ minWidth: '168px' }}
            style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              maxWidth: '2rem',
              backgroundColor: 'white',
            }}
          ></Column>
        ))}
      </DataTable>
      {displayDialog && (
        <UpdateTagDetails
          display={displayDialog}
          item={selectedItem}
          onHide={onHide}
        />
      )}
    </>
  );
};
TagDetails.displayName = 'TagDetails';
export default TagDetails;
