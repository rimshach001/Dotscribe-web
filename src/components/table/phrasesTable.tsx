import React, {
  useRef,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Phrase } from '@app/types/interfaces';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { getAllTags } from '@server/functions/functions';
import ExpandedRowDetails from '../expandTable';

// eslint-disable-next-line react/prop-types
const PhraseTable = ({
  items,
  head,
  setSelectedRow,
  loading,
}: {
  items: Phrase[];
  head: unknown;
  setSelectedRow: Dispatch<SetStateAction<Phrase>>;
  loading: boolean;
}) => {
  const [tableOptions, setTableOptions] = useState({
    rowExpandView: true,
    rowDetailsOnRightSide: true,
    panelDesign: true,
  });

  const [expandTbl, setExpandTbl] = useState(false);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<Phrase[]>([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const dt = useRef<DataTable<unknown[]>>(null);
  const [filteredItems, setFilteredItems] = useState<Phrase[]>([]);
  const [availableTags, setAvailableTags] = useState([]);

  const fetch = async () => {
    // eslint-disable-next-line no-underscore-dangle
    const filtered = items.filter((item) => item._deleted !== true);
    const allTagsData = await getAllTags();
    // eslint-disable-next-line no-underscore-dangle
    const filteredTags = allTagsData.filter((tag) => tag._deleted !== true);
    setAvailableTags(filteredTags);
    setFilteredItems(filtered);
  };
  useEffect(() => {
    fetch();
  }, [items]);

  const nameBodyTemplte = (item) => (
    <div className="grid">
      <div className="col-9">{item.name}</div>
      <div className="col-3">
        <img
          src="/src/assets/images/triangle.svg"
          alt="expand"
          className=""
          onClick={(event) => {
            if (expandTbl === false) {
              const expander =
                event.target.parentElement.parentElement.parentElement.parentElement.querySelector(
                  '.rs-expander .p-row-toggler',
                );

              setTimeout(() => expander.click(), 500);

              expander.click();
              setExpandTbl(true);
            }
            if (expandTbl === true) {
              setExpandTbl(false);
            }
          }}
        />
      </div>
    </div>
  );
  const tagsBodyTemplate = (rowData: Phrase) => {
    const filteredTags = rowData.tags?.items?.filter(
      (item) =>
        item &&
        item.tagID &&
        availableTags.some((tag) => tag.id === item.tagID),
    );

    return (
      <>
        <span className="p-column-title">Tags</span>
        {filteredTags && filteredTags.length > 0 ? (
          filteredTags.map((item) => {
            // eslint-disable-next-line no-underscore-dangle
            if (item && item.id && !item._deleted) {
              return (
                <Tag
                  key={item.id}
                  value={item.tag.name}
                  className="mr-1 mb-1"
                  style={{
                    background: `#${item.tag.color}`,
                  }}
                ></Tag>
              );
            }
            return null;
          })
        ) : (
          <span></span>
        )}
      </>
    );
  };

  const onRowSelect = (event) => {
    if (event.originalEvent.ctrlKey || event.originalEvent.metaKey) {
      const value = event.data;
      let selectedItemsTemp = [...selectedItems];
      if (selectedItemsTemp.find((x) => x.id === value.id)) {
        selectedItemsTemp = selectedItemsTemp.filter((x) => x.id !== value.id);
      } else {
        selectedItemsTemp.push(value);
      }
      setSelectedItems(selectedItemsTemp);

      setSelectAll(
        selectedItemsTemp && selectedItemsTemp.length === items.length,
      );
    } else {
      setSelectedRow(event.data);
      console.log(event.data, 'seleted row');
    }
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

  const paginatorRight = (
    <Button
      type="button"
      label="More Records"
      size="small"
      outlined
      // onClick={() => getLibraryNextPhrases()}
    />
  );

  const columns = [
    {
      field: 'name',
      header: 'name',
      body: nameBodyTemplte,
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
      field: 'abbreviation',
      header: 'Abbreviation',
      sortable: true,
      headerStyle: { minWidth: '168px', color: '#2D2C2C' },
      style: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        maxWidth: '2rem',
        backgroundColor: 'white',
      },
    },
    {
      field: 'tags',
      header: 'Tags',
      body: tagsBodyTemplate,
    },
    {
      field: 'author',
      header: 'Author',
    },
    {
      field: 'rating',
      header: 'Ratings',
    },
    {
      field: 'lastUpdated',
      header: 'Last Updated',
    },
    {
      field: 'delDate',
      header: 'Delete Date',
    },
    {
      field: 'Location',
      header: 'Location',
    },
  ];

  return tableOptions.panelDesign ? (
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
        // responsiveLayout="scroll"
        selection={selectedItems}
        selectAll={selectAll}
        onSelectAllChange={onSelectAllChange}
        // scrollable
        onRowClick={(e) => onRowSelect(e)}
        loading={loading}
        paginatorRight={paginatorRight}
        resizableColumns
        onRowExpand={() => console.log('Row Expand Occurs')}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        // // rowExpansionTemplate={setExpandedRowsDetails}
        rowExpansionTemplate={(data) => <ExpandedRowDetails data={data} />}
        // // selection={selectedCustomers}
        onSelectionChange={(e) => setSelectedItems(e.value)}
      >
        <Column
          expander
          // headerStyle={{ width: '4rem' }}
          className="rs-expander"
        ></Column>
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
            headerStyle={{
              ...{ minWidth: '168px', color: '#2D2C2C' },
              ...(c.headerStyle ? c.headerStyle : {}),
            }}
            style={{
              ...{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                maxWidth: '2rem',
                backgroundColor: 'white',
              },
              ...(c.style ? c.style : {}),
            }}
          ></Column>
        ))}
      </DataTable>
    </>
  ) : (
    <></>
  );
};
PhraseTable.displayName = 'PhraseTable';
export default PhraseTable;
