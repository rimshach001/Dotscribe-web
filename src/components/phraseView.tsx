/* eslint-disable no-nested-ternary */

import { ProgressSpinner } from 'primereact/progressspinner';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useContext,
} from 'react';
import { Phrase } from '@app/types/interfaces';
import {
  getPhrasesByOrganizationId,
  getPhrasesByPhraseGroupId,
} from '@server/graphql';
import { useParams } from 'react-router-dom';
import { getUserOrgId } from '@server/functions/functions';
import { LibraryContext } from '@app/layout/context/librarycontext';

import OpitonBar from './optionBarOnTable';
import PhraseTable from './table/phrasesTable';
import {
  CopyPhraseButton,
  CreateNewPhraseButton,
  ImportPhraseButton,
} from './buttons/createNewPhraseButton';
import { CreatePhrase } from './dialogs/createPhrase';
import TableDetails from './tableDetails';

const CommunityPhrasesTable = ({
  selectedRow,
  items,
  setSelectedRow,
  loading,
  getLibraryNextPhrases,
  selectedNode,
}: {
  selectedRow: any;
  items: Phrase[];
  setSelectedRow: Dispatch<SetStateAction<Phrase>>;
  loading: boolean;
  getLibraryNextPhrases: Function;
  selectedNode;
}) => {
  const emptyPhrase = {
    name: '',
    tag: '',
    abbreviation: '',
    info: '',
  };
  const [Allitems, setAllItems] = useState<Phrase[]>(items);
  const [phraseDialog, setPhraseDialog] = useState(false);
  const [phrase, setPhrase] = useState(emptyPhrase);
  const [loader, setLoader] = useState(true);
  const { groupId } = useParams<{ groupId: string }>();
  const { libraryId } = useParams<{ libraryId: string }>();
  const { orgId } = useContext(LibraryContext);
  const fetchData = async () => {
    setAllItems(items);
    let item;
    setLoader(true);
    try {
      if (groupId === undefined) {
        setAllItems([]);
      } else {
        item = await getPhrasesByPhraseGroupId(groupId);
        console.log(item, 'itemss');
        setAllItems(item);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    if (libraryId === 'user') {
      const orgId = await getUserOrgId();
      item = await getPhrasesByOrganizationId(orgId);
      setAllItems(item);
    } else if (libraryId === 'dotScribe') {
    } else {
      const orgId = await getUserOrgId();
      item = await getPhrasesByOrganizationId(orgId);
      setAllItems(item);
    }
    setLoader(false);
  };
  useEffect(() => {
    fetchData();
  }, [groupId, libraryId, items]);

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string,
  ) => {
    const val = e.target.value;
    setPhrase((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const MyPhraseHeader = (
    <div className="flex mr-0">
      <div className="mb-1" style={{ flex: '40%' }}>
        <p className="mb-1 text-2xl font-medium">Phrases</p>
        <label className="text-gray-500">AAOS Orthoinfo</label>
      </div>
      <div
        className="flex justify-content-end align-self-start"
        style={{ flex: '20%' }}
      >
        <CreateNewPhraseButton
          onClick={() => setPhraseDialog(true)}
        ></CreateNewPhraseButton>
        {phraseDialog && (
          <CreatePhrase
            onInputChange={onInputChange}
            phrase={phrase}
            fetchData={fetchData}
            orgId={orgId}
            folderId={selectedNode?.key}
            setPhraseDialog={setPhraseDialog}
          ></CreatePhrase>
        )}
      </div>
      <div
        className=" flex justify-content-center align-self-start"
        style={{ flex: '20%' }}
      >
        <CopyPhraseButton />
      </div>
      <div
        className="flex justify-content-start align-self-start"
        style={{ flex: '20%' }}
      >
        <ImportPhraseButton />
      </div>
    </div>
  );

  const DotscribeHeader = (
    <div className="">
      <p className="mb-1 text-2xl font-medium">Dotscribe Phrases</p>
      <label className="text-gray-500">AAOS Orthoinfo</label>
    </div>
  );
  return (
    <div className="">
      {libraryId === 'dotScribe' ? (
        <OpitonBar
          allPhrases={fetchData}
          setPhrase={setAllItems}
          phrasesOf={'dotScribe'}
        />
      ) : (
        <OpitonBar
          allPhrases={fetchData}
          setPhrase={setAllItems}
          phrasesOf={''}
        />
      )}
      {loader ? (
        <div className="flex mt-6">
          <ProgressSpinner
            style={{ width: '70px', height: '70px' }}
            strokeWidth="4"
            animationDuration=".5s"
          />
        </div>
      ) : // eslint-disable-next-line no-nested-ternary
      libraryId === 'user' ? (
        <PhraseTable
          items={Allitems}
          head={MyPhraseHeader}
          loading={loading}
          setSelectedRow={setSelectedRow}
        />
      ) : libraryId === 'dotScribe' ? (
        <PhraseTable
          items={Allitems}
          head={DotscribeHeader}
          loading={loading}
          setSelectedRow={setSelectedRow}
        />
      ) : (
        <PhraseTable
          items={Allitems}
          head={MyPhraseHeader}
          loading={loading}
          setSelectedRow={setSelectedRow}
        />
      )}
    </div>
  );
};

export default CommunityPhrasesTable;
