import React, { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';
import { createPhrase } from '@server/graphql/phrase';
import { CreatePhraseInput } from '@server/graphql/types';
import { Button } from 'primereact/button';
import InfoDetail from '../personalInfo';
import { MultiSelect } from 'primereact/multiselect';
import { getUserOrgId } from '@server/functions/functions';
import { assignTagToPhrase, getTagsByOrganizationId } from '@server/graphql';

interface CreatePhraseJSX {
  folderId: string | undefined;
  fetchData: () => {};
  phrase: CreatePhraseInput;
  orgId: string;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string,
  ) => void;
  setPhraseDialog: Function;
}

export const CreatePhrase = ({
  folderId,
  fetchData,
  phrase,
  orgId,
  onInputChange,
  setPhraseDialog,
}: CreatePhraseJSX) => {
  const [submitted, setSubmitted] = useState(false);
  const [tagsList, setTagsList] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserOrgId();
        const tags = await getTagsByOrganizationId(user);
        const filteredTags = tags.filter((t) => !t._deleted);
        setTagsList(filteredTags);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchData();
  }, []);
  const hideDialog = () => {
    setSubmitted(false);
    setPhraseDialog(false);
    setSubmitted(false);
    onInputChange(
      { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>,
      'name',
    );
    onInputChange(
      { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>,
      'abbreviation',
    );
    onInputChange(
      { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>,
      'content',
    );
  };

  const savePhrase = async () => {
    setSubmitted(true);

    const newPhrase = await createPhrase({
      name: phrase.name,
      abbreviation: phrase.abbreviation,
      content: phrase.content,
      phrasegroupID: folderId,
      organizationID: orgId,
    });

    fetchData();
    hideDialog();
    setSubmitted(false);
    onInputChange(
      { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>,
      'name',
    );
    onInputChange(
      { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>,
      'abbreviation',
    );
    onInputChange(
      { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>,
      'content',
    );
  };

  const phraseDialogFooter = (
    <div className="mt-2">
      <Button label="Cancel" icon="pi pi-times" onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={savePhrase} />
    </div>
  );

  return (
    <Dialog
      visible={true}
      style={{ width: '30%', borderRadius: '10%' }}
      header="Add New Phrase"
      modal
      className="p-fluid"
      headerStyle={{ color: '#2D3748' }}
      footer={phraseDialogFooter}
      onHide={hideDialog}
    >
      <div className="grid">
        <InputText
          id="name"
          value={phrase.name}
          onChange={(e) => onInputChange(e, 'name')}
          required
          placeholder="Enter Phrase name.."
          autoFocus
          className={classNames({
            'p-invalid': submitted && !phrase.name,
          })}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: 'black',
          }}
        />
        {submitted && !phrase.name && (
          <small className="p-invalid">Name is required.</small>
        )}
      </div>
      <div className="card p-2 mt-2" style={{ backgroundColor: '#D9D9D9' }}>
        <label className="pl-2">Enter Phrases</label>
        <InputText
          id="content"
          value={phrase.content}
          onChange={(e) => onInputChange(e, 'content')}
          required
          placeholder="Phrases..."
          autoFocus
          className={classNames({
            'p-invalid': submitted && !phrase.content,
          })}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: 'black',
          }}
        />
        {submitted && !phrase.content && (
          <small className="p-invalid">Content is required.</small>
        )}
      </div>
      <div className="card p-2" style={{ backgroundColor: '#D9D9D9' }}>
        <label className="pl-2">Enter Tags</label>

        <div className="flex justify-content-center">
          <MultiSelect
            value={selectedTags}
            onChange={(e) => setSelectedTags(e.value)}
            options={tagsList}
            optionLabel="name"
            // display="chip"
            placeholder="Select Tags"
            maxSelectedLabels={3}
            className="w-full md:w-19rem"
            // style={{ position: 'absolute' }}
          />
        </div>
      </div>

      <div className="card p-2" style={{ backgroundColor: '#D9D9D9' }}>
        <label htmlFor="abbreviation" className="pl-2">
          Enter Abbreviation
        </label>
        <InputText
          id="abbreviation"
          value={phrase.abbreviation}
          onChange={(e) => onInputChange(e, 'abbreviation')}
          required
          placeholder="...."
          className={classNames({
            'p-invalid': submitted && !phrase.abbreviation,
          })}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: 'black',
          }}
        />
        {submitted && !phrase.abbreviation && (
          <small className="p-invalid">Abbreviation is required.</small>
        )}
      </div>
      <div className="card p-0" style={{ backgroundColor: '#D9D9D9' }}>
        <InfoDetail backgroundColor="#D9D9D9" />
      </div>
    </Dialog>
  );
};
