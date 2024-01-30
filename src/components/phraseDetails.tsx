/* eslint-disable no-underscore-dangle */
import React, { MouseEventHandler, useState, useEffect } from 'react';
import { Phrase } from '@app/types/interfaces';
import {
  assignTagToPhrase,
  deletePhrase,
  deleteTagGroup,
  deleteTagPhraseGroup,
  getTagsByOrganizationId,
  updatePhrase,
} from '@server/graphql';
import { MultiSelect } from 'primereact/multiselect';
import { getAllTags, getUserOrgId } from '@server/functions/functions';
import InfoDetail from './personalInfo';
import { Button } from 'primereact/button';

const CommunityPhrasesInfo = ({
  selectedRow,
  clearSelectedRow,
  getData,
}: {
  selectedRow: Phrase;
  clearSelectedRow: MouseEventHandler<HTMLElement>;
  getData: Function;
}) => {
  const [selectedPhraseRow, setselectedPhraseRow] = useState(selectedRow);
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [tag, setTag] = useState([]);
  const [abbrevation, setAbbrevation] = useState('');
  const [editableName, setEditableName] = useState(false);
  const [tagsList, setTagsList] = useState([]);
  const [editable, setEditable] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [editedAbbreviation, setEditedAbbreviation] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [combinedTags, setCombinedTags] = useState<Array<any>>([]);

  useEffect(() => {}, [editedName, editedContent, editedAbbreviation]);
  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserOrgId();
      const tag = await getTagsByOrganizationId(user);
      const excludedDelTags = tag.filter((t) => !t._deleted);
      const excludedDelPhraseTags = selectedRow.tags.items.filter(
        (t) => t._deleted === null,
      );
      const filteredExcludedDelTags = excludedDelTags.filter(
        (tagItem) =>
          !excludedDelPhraseTags.some(
            (phraseTagItem) => phraseTagItem.tag.id === tagItem.id,
          ),
      );

      setTagsList(filteredExcludedDelTags);
    };

    fetchData();
  }, [selectedRow]);

  useEffect(() => {
    if (selectedRow) {
      setEditable(false);
      setContent(selectedRow.content);
      setName(selectedRow.name);
      setAbbrevation(selectedRow.abbreviation);
      setTag(selectedRow.tags);
      setEditedAbbreviation(selectedRow.abbreviation);
      setEditedContent(selectedRow.content);
      setEditedName(selectedRow.name);
    }
  }, [selectedRow]);

  useEffect(() => {}, [selectedTags, tag, combinedTags]);
  const fetch = async () => {
    const allTagsData = await getAllTags();
    const filteredTags = allTagsData.filter((tag) => tag._deleted !== true);
    // setAvailableTags(filteredTags);
    const showTags = tag?.items?.filter(
      (item) =>
        item && item.tagID && filteredTags.some((tag) => tag.id === item.tagID),
    );
    console.log(filteredTags, tag.items, showTags);

    setCombinedTags(showTags);
  };

  useEffect(() => {
    fetch();
  }, [combinedTags]);

  const handleSave = async () => {
    try {
      const confirmUpdate = window.confirm(`Are you sure you want to add tag?`);
      if (confirmUpdate) {
        const newTags = await Promise.all(
          selectedTags.map(async (tag) =>
            assignTagToPhrase(selectedRow.id, tag.id),
          ),
        );
        const updatedCombinedTags = [...combinedTags, ...newTags];
        setCombinedTags(updatedCombinedTags);
        setSelectedTags([]);
        setEditable(false);
        getData();
      }
    } catch (error) {
      console.error(`Error assigning tags to phrase: ${error}`);
    }
  };

  const delPhraseContent = async (heading) => {
    try {
      if (heading === 'PHRASE') {
        // eslint-disable-next-line no-alert
        const confirmUpdate = window.confirm(
          `Are you sure you want to delete phrase content ?`,
        );
        if (confirmUpdate) {
          const newdata = await updatePhrase({
            id: selectedRow.id,
            name: selectedRow.name,
            content: '',
            abbreviation: selectedRow.abbreviation,
            _version: selectedRow._version,
          });
          setContent('');
          setselectedPhraseRow(newdata);
          getData();
        }
      } else if (heading === 'ABBREVIATION') {
        const confirmUpdate = window.confirm(
          `Are you sure you want to delete abbrivation ?`,
        );
        if (confirmUpdate) {
          const newdata = await updatePhrase({
            id: selectedRow.id,
            name: selectedRow.name,
            content: selectedRow.content,
            abbreviation: '',
            _version: selectedRow._version,
          });
          setselectedPhraseRow(newdata);
          setAbbrevation('');
          getData();
        }
      }
    } catch (error) {
      console.error('Error updating phrase:', error);
    }
  };

  const handleNameInputChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleContentInputChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleAbbrInputChange = (e) => {
    setEditedAbbreviation(e.target.value);
  };

  const handleCancel = async () => {
    setEditable(false);
  };

  const handlePhraseDataUpdate = async () => {
    // eslint-disable-next-line no-alert
    const confirmUpdate = window.confirm(
      `Are you sure you want to update phrase" ?`,
    );
    if (confirmUpdate) {
      if (
        editedName !== name ||
        editedContent !== content ||
        editedAbbreviation !== abbrevation
      ) {
        const newdata = await updatePhrase({
          id: selectedRow.id,
          name: editedName,
          content: editedContent,
          abbreviation: editedAbbreviation,
          _version: selectedRow._version,
        });
        setselectedPhraseRow(newdata);
        setName(editedName);
        setEditable(false);
        getData();
      }
    }
    // try {
    //   const confirmUpdate = window.confirm(`Are you sure you want to add tag?`);
    //   if (confirmUpdate) {
    //     const newTags = await Promise.all(
    //       selectedTags.map(async (tag) =>
    //         assignTagToPhrase(selectedRow.id, tag.id),
    //       ),
    //     );
    //     const updatedCombinedTags = [...combinedTags, ...newTags];
    //     setCombinedTags(updatedCombinedTags);
    //     setSelectedTags([]);
    //     setEditable(false);
    //     getData();
    //   }
    // } catch (error) {
    //   console.error(`Error assigning tags to phrase: ${error}`);
    // }
  };

  const deletePhraseData = async (e) => {
    try {
      // eslint-disable-next-line no-alert
      const confirmDelete = window.confirm(
        'Are you sure you want to delete this phrase?',
      );
      if (confirmDelete) {
        const del = await deletePhrase({
          id: selectedRow.id,
          _version: selectedRow._version,
        });
        setselectedPhraseRow(null);
        clearSelectedRow(e);
        getData();
      }
    } catch (error) {
      console.error('Error deleting phrase:', error);
    }
  };

  const handleTrashContent = async () => {
    await delPhraseContent('PHRASE');
  };

  const handleTrashAbbr = async () => {
    await delPhraseContent('ABBREVIATION');
  };

  const handleDeleteTag = async (i) => {
    try {
      const confirmUpdate = window.confirm(
        `Are you sure you want to delete tag ?`,
      );
      if (confirmUpdate) {
        const input = {
          id: i.id,
          _version: i._version,
        };
        const deletedData = await deleteTagPhraseGroup(input);

        const updatedCombinedTags = combinedTags.filter(
          (tag) => tag.id !== deletedData.id,
        );
        setCombinedTags(updatedCombinedTags);
        getData();
      }
    } catch (error) {
      console.error('Error deleting tag phrase:', error);
    }
  };

  return (
    <div className=" ">
      {selectedRow ? (
        <>
          <div className="grid mb-3">
            <div className="col-10">
              {editable ? (
                <div className="card p-3 mb-3 border-none">
                  <input
                    type="text"
                    onChange={(e) => handleNameInputChange(e)}
                    value={editedName}
                    style={{}}
                    className="p-2 border-none shadow-3"
                  />
                </div>
              ) : (
                <p className=" " style={{ color: '#2D3748' }}>
                  {name}
                </p>
              )}
            </div>
            <div className=" col-2">
              {editable ? (
                <i
                  className="pi pi-times cursor-pointer"
                  onClick={handleCancel}
                ></i>
              ) : (
                <div>
                  <img
                    style={{ height: '1rem' }}
                    src="/src/assets/images/editable.svg"
                    alt="edit"
                    onClick={() => setEditable(true)}
                  />
                </div>
              )}
            </div>
          </div>
          {editable ? (
            <div
              className="card p-3 mb-3 bg-gray-100 border-gray-300"
              style={{ backgroundColor: '#D9D9D9' }}
            >
              <div className="flex">
                <p
                  className="text-xs font-bold mb-2 col-9"
                  style={{ color: '#2D3748' }}
                >
                  PHRASE
                </p>
                <i
                  className="pi pi-trash ml-3 mt-2"
                  onClick={handleTrashContent}
                ></i>
              </div>
              <input
                type="text"
                onChange={(e) => handleContentInputChange(e)}
                value={editedContent}
                style={{}}
                className="p-2 border-none"
              />
            </div>
          ) : (
            <div
              className="card p-3 mb-3 bg-gray-100 border-gray-300"
              style={{ backgroundColor: '#D9D9D9' }}
            >
              <div className="grid ">
                <p
                  className="text-xs font-bold mb-2 col-7"
                  style={{ color: '#2D3748' }}
                >
                  PHRASE
                </p>
                <div className="col-5 flex justify-content-end"></div>
              </div>
              <p className="text-sm" style={{ color: '#718096' }}>
                {content}
              </p>
            </div>
          )}
          {editable ? (
            <div
              className="card p-3 mb-3 bg-gray-100 border-gray-300"
              style={{ backgroundColor: '#D9D9D9' }}
            >
              <div className="flex">
                <p
                  className="text-xs font-bold mb-2 col-9"
                  style={{ color: '#2D3748' }}
                >
                  ABBREVIATION
                </p>
                <i
                  className="pi pi-trash ml-3 mt-2"
                  onClick={handleTrashAbbr}
                ></i>
              </div>
              <input
                type="text"
                onChange={(e) => handleAbbrInputChange(e)}
                value={editedAbbreviation}
                style={{}}
                className="p-2 border-none"
              />
            </div>
          ) : (
            <div
              className="card p-3 mb-3 bg-gray-100 border-gray-300"
              style={{ backgroundColor: '#D9D9D9' }}
            >
              <div className="grid ">
                <p
                  className="text-xs font-bold mb-2 col-7"
                  style={{ color: '#2D3748' }}
                >
                  ABBREVIATION
                </p>
              </div>
              <p className="text-sm" style={{ color: '#718096' }}>
                {abbrevation}
              </p>
            </div>
          )}
          <div className="card p-3 mb-3 bg-gray-100 border-gray-300">
            {editable ? (
              <div
                className="card p-3 mb-3 bg-gray-100 border-gray-300"
                style={{ backgroundColor: '#D9D9D9' }}
              >
                <div className="grid">
                  <p
                    className="text-xs font-bold mb-2 col-9"
                    style={{ color: '#2D3748' }}
                  >
                    TAGS
                  </p>
                  <div className="col-3">
                    <i className="ml-3" onClick={handleSave}>
                      {' '}
                      ADD
                    </i>
                  </div>
                </div>
                <div className="flex justify-content-center">
                  <MultiSelect
                    value={selectedTags}
                    onChange={(e) => setSelectedTags(e.value)}
                    options={tagsList}
                    optionLabel="name"
                    display="chip"
                    placeholder="Select Tags"
                    maxSelectedLabels={3}
                    className="w-full md:w-17rem"
                  />
                </div>
              </div>
            ) : (
              <div className="grid">
                <p
                  className="text-xs font-bold mb-2 col-7"
                  style={{ color: '#2D3748' }}
                >
                  TAGS
                </p>
              </div>
            )}
            {combinedTags && combinedTags.length > 0 ? (
              <div>
                <div
                  className="pt-2 pb-2 mb-2"
                  style={{
                    display: 'flex',
                    gap: '7px',
                    flexWrap: 'wrap',
                    maxWidth: '16rem',
                  }}
                >
                  {combinedTags.map((i) => (
                    <div key={i.id} className="mt-2">
                      {i && i.tag && !i._deleted ? (
                        <div
                          style={{
                            backgroundColor: `#${i.tag.color}`,
                            padding: '5px 10px',
                            borderRadius: '5px',
                            color: 'white',
                            position: 'relative',
                            marginRight: '4px',
                          }}
                        >
                          {i.tag.name}
                          {editable && (
                            <i
                              style={{
                                position: 'absolute',
                                top: '-5px',
                                borderRadius: '5px',
                                padding: '2px',
                              }}
                              onClick={() => handleDeleteTag(i)}
                              className="pi pi-times bg-gray-400"
                            ></i>
                          )}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>no tags</div>
            )}
          </div>
          <div className="card p-0" style={{ backgroundColor: '#D9D9D9' }}>
            <InfoDetail backgroundColor="rgb(243 244 246)" />
          </div>
          {editable ? (
            <div className="flex justify-content-center">
              <div
                style={{ borderColor: '#DE0909' }}
                className=" "
                onClick={(e) => deletePhraseData(e)}
              >
                <Button
                  style={{
                    color: '#DE0909',
                    backgroundColor: 'white',
                    borderColor: '#DE0909',
                    borderWidth: '2px',
                  }}
                  label="Delete"
                />
              </div>
              <div className="ml-3" onClick={() => handlePhraseDataUpdate()}>
                <Button label="Save" />
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
};

export default CommunityPhrasesInfo;
