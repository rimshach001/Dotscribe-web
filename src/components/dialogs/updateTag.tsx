import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { deleteTagGroup, updateTag } from '@server/graphql';
import { ColorPicker } from 'primereact/colorpicker';
import { InputText } from 'primereact/inputtext';

const UpdateTagDetails = ({
  display,
  item,
  onHide,
}: {
  display: boolean;
  item: any;
  onHide: any;
}) => {
  const [selectedItem, setSelectedItem] = useState(item);
  const [updatedTags, setUpdatedTags] = useState({
    id: '',
    name: '',
    color: '',
    organizationID: '',
    _version: 0,
  });
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(false);
  }, [selectedItem, updatedTags]);
  const handleUpdate = (tag, e) => {
    console.log(tag, '000000');

    setUpdatedTags({
      id: tag.id,
      name: tag.name,
      color: tag.color,
      organizationID: tag.organizationID,
      _version: tag._version,
    });
    setShowUpdateInput(true);
    console.log(updatedTags, 'okkk');
  };

  const handleUpdateConfirm = async () => {
    setShowUpdateInput(false);
    try {
      const updatedTagResult = await updateTag(updatedTags);
      console.log(updatedTagResult);

      setSelectedItem(updatedTags);
      console.log(updatedTags, 'latest');
    } catch (error) {
      console.error('Error updating tag:', error);
    }
  };
  const handleDelete = async (tag) => {
    try {
      const del = await deleteTagGroup({
        id: tag.id,
        // eslint-disable-next-line no-underscore-dangle
        _version: tag._version,
      });
      onHide(false);
      console.log(del);
      if (mounted) {
        setUpdatedTags({
          id: '',
          name: '',
          color: '',
          organizationID: '',
          _version: 0,
        });
      }
    } catch (error) {
      console.error('Error deleting tag:', error);
    }
  };
  return (
    <>
      <Dialog
        visible={display}
        style={{ width: '50vw' }}
        header="Update Tags"
        onHide={onHide}
        modal
      >
        {selectedItem && (
          <div>
            {showUpdateInput ? (
              <div className=" mt-3">
                <div className="mt-2 flex justify-content-around">
                  <InputText
                    type="text"
                    value={updatedTags.name}
                    onChange={(e) =>
                      setUpdatedTags((prevTag) => ({
                        ...prevTag,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Enter tag name"
                    className="font-medium text-gray-600"
                  />
                </div>
                <div>
                  <div className="mt-3 flex justify-content-center">
                    <span>Choose a color</span>
                    <ColorPicker
                      value={updatedTags.color}
                      onChange={(e) =>
                        setUpdatedTags((prevTag) => ({
                          ...prevTag,
                          color: e.value,
                        }))
                      }
                      className="ml-3"
                    />
                  </div>
                  <div className=" flex justify-content-center">
                    <Button
                      icon="pi pi-check"
                      onClick={() => handleUpdateConfirm()}
                      className="mr-2"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className=" mt-3">
                <div
                  style={{ width: '100%' }}
                  className="flex justify-content-around"
                >
                  <div
                    style={{
                      backgroundColor: `#${selectedItem.color}`,
                      width: '30%',
                    }}
                    className="mr-2 flex justify-content-around p-3 border-round-2xl text-white-alpha-90 text-2xl"
                  >
                    {selectedItem.name}
                  </div>
                </div>
                <div className="flex justify-content-center mt-3">
                  <Button
                    icon="pi pi-pencil"
                    onClick={(e) => handleUpdate(selectedItem, e)}
                    className="mr-2"
                  />
                  <Button
                    icon="pi pi-trash"
                    onClick={() => handleDelete(selectedItem)}
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
UpdateTagDetails.displayName = 'UpdateTagDetails';
export default UpdateTagDetails;
