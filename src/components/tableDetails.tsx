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
import { Dialog } from 'primereact/dialog';
import { updateTag } from '@server/graphql';
import { ColorPicker } from 'primereact/colorpicker';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import ExpandedRowDetails from './expandTable';

// eslint-disable-next-line react/prop-types
const TableDetails = ({
  items,
  head,
  setSelectedRow,
  loading,
  data,
}: {
  items: Phrase[];
  head: unknown;
  setSelectedRow: Dispatch<SetStateAction<Phrase>>;
  loading: boolean;
  data: unknown;
}) => {
  const [expandTbl, setExpandTbl] = useState(false);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<Phrase[]>([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const dt = useRef<DataTable<unknown[]>>(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [displayDialog, setDisplayDialog] = useState(false);
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [updatedTag, setUpdatedTag] = useState({
    id: '',
    name: '',
    color: '',
    organizationID: '',
    _version: 0,
  });
  const [filteredItems, setFilteredItems] = useState<Phrase[]>([]);

  useEffect(() => {
    const filtered = items.filter((item) => item._deleted !== true);
    setFilteredItems(filtered);
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
  const tagsBodyTemplate = (rowData: Phrase) => (
    <>
      <span className="p-column-title">Tags</span>
      {rowData.tags && rowData.tags.items && rowData.tags.items.length > 0 ? (
        rowData.tags.items.map((item) => {
          if (item && item.id && !item._deleted) {
            return (
              <Tag
                key={item.id}
                value={item.tag.name}
                className="mr-1 mb-1"
                style={{
                  background: item.tag.color,
                }}
              ></Tag>
            );
          }
          return null;
        })
      ) : (
        <span>No tags</span>
      )}
    </>
  );

  const onRowSelect = (event) => {
    if (data === 'Phrases') {
      console.log('phrase');

      if (event.originalEvent.ctrlKey || event.originalEvent.metaKey) {
        const value = event.data;
        let selectedItemsTemp = [...selectedItems];
        if (selectedItemsTemp.find((x) => x.id === value.id)) {
          selectedItemsTemp = selectedItemsTemp.filter(
            (x) => x.id !== value.id,
          );
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
    } else if (data === 'Tags') {
      setSelectedItem(event.data);
      setSelectedRow(event.data);
      setDisplayDialog(true);
    }
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
  useEffect(() => {
    // console.log(items);
  }, [selectedItem, updatedTag, items]);
  const paginatorRight = (
    <Button
      type="button"
      label="More Records"
      size="small"
      outlined
      // onClick={() => getLibraryNextPhrases()}
    />
  );
  const handleUpdate = (tag) => {
    setUpdatedTag({
      id: tag.id,
      name: tag.name,
      color: tag.color,
      organizationID: tag.organizationID,
      _version: tag._version,
    });
    setShowUpdateInput(true);
  };

  const handleUpdateConfirm = async () => {
    setShowUpdateInput(false);
    try {
      const updatedTagResult = await updateTag(updatedTag);
      console.log(updatedTagResult);
      setUpdatedTag({
        id: '',
        name: '',
        color: '',
        organizationID: '',
        _version: 0,
      });
      // fetchData();
      setSelectedItem(updatedTag);
    } catch (error) {
      console.error('Error updating tag:', error);
    }
  };
  const handleDelete = async (tag) => {
    try {
      // fetchData();
    } catch (error) {
      console.error('Error deleting tag:', error);
    }
  };

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
        <Column
          field="name"
          header="name"
          body={nameBodyTemplte}
          sortable
          headerStyle={{ minWidth: '168px' }}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            // maxWidth: '2rem',
            backgroundColor: 'white',
          }}
        ></Column>
        <Column
          field="abbreviation"
          header="Abbreviation"
          sortable
          headerStyle={{ minWidth: '168px', color: '#2D2C2C' }}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '2rem',
            backgroundColor: 'white',
          }}
        ></Column>
        <Column
          field="tags"
          header="Tags"
          body={tagsBodyTemplate}
          headerStyle={{ minWidth: '12rem', color: '#2D2C2C' }}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '2rem',
            backgroundColor: 'white',
          }}
        ></Column>
        <Column
          field="author"
          header="Author"
          sortable
          headerStyle={{ minWidth: '10rem', color: '#2D2C2C' }}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '2rem',
            backgroundColor: 'white',
          }}
        ></Column>
        <Column
          field="rating"
          header="Rating"
          sortable
          // body={ratingBodyTemplate}
          headerStyle={{ minWidth: '10rem', color: '#2D2C2C' }}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '2rem',
            backgroundColor: 'white',
          }}
        ></Column>
        <Column
          field="lastUpdated"
          header="Last Updated"
          sortable
          // body={dateTimeBodyTemplate}
          headerStyle={{ minWidth: '10rem', color: '#2D2C2C' }}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '2rem',
            backgroundColor: 'white',
          }}
        ></Column>
        <Column
          field="delDate"
          header="Delete Date"
          sortable
          // body={dateTimeBodyTemplate}
          headerStyle={{ minWidth: '10rem', color: '#2D2C2C' }}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '2rem',
            backgroundColor: 'white',
          }}
        ></Column>
        <Column
          field="Location"
          header="Location"
          sortable
          // body={dateTimeBodyTemplate}
          headerStyle={{ minWidth: '10rem', color: '#2D2C2C' }}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '2rem',
            backgroundColor: 'white',
          }}
        ></Column>
      </DataTable>

      <Dialog
        visible={displayDialog}
        style={{ width: '50vw' }}
        header="Row Details"
        onHide={onHide}
        modal
      >
        {selectedItem && (
          <div>
            {showUpdateInput ? (
              <div className="flex items-center justify-between mt-3">
                <div className="mt-2">
                  <InputText
                    type="text"
                    value={updatedTag.name}
                    onChange={(e) =>
                      setUpdatedTag((prevTag) => ({
                        ...prevTag,
                        name: e.target.value,
                      }))
                    }
                    // onChange={(e) => setUpdatedTag(e.target.value)}
                    placeholder="Enter tag name"
                    className="font-medium text-gray-600"
                  />
                </div>
                <div className="mt-3">
                  <span>Choose a color</span>
                  <ColorPicker
                    value={updatedTag.color}
                    onChange={(e) =>
                      setUpdatedTag((prevTag) => ({
                        ...prevTag,
                        color: e.target.value,
                      }))
                    }
                    // onChange={(e) => setTagColor(e.value)}
                    className="ml-3"
                  />
                </div>
                <Button
                  icon="pi pi-check"
                  onClick={() => handleUpdateConfirm()}
                  className="mr-2"
                />
              </div>
            ) : (
              <div className="flex items-center justify-between mt-3">
                <div>
                  <div
                    style={{ backgroundColor: selectedItem.color }}
                    className="mr-2"
                  >
                    {selectedItem.name}
                  </div>
                </div>
                <div>
                  {/* Button to initiate tag update */}
                  <Button
                    icon="pi pi-pencil"
                    onClick={() => handleUpdate(selectedItem)}
                    className="mr-2"
                  />
                  <Button
                    icon="pi pi-trash"
                    onClick={() => handleDelete(selectedItem.id)}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </Dialog>
    </>
  );
};
TableDetails.displayName = 'TableDetails';
export default TableDetails;
