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

import { CreateNewPhraseButton } from '@app/components/buttons/createNewPhraseButton';
import InfoBar from '@app/components/headingBar';
import OpitonBar from '@app/components/optionBarOnTable';
import { CreatePhrase } from '@app/components/dialogs/createPhrase';
import TableDetails from '@app/components/table/phrasesTable';

export const PhrasesView = ({
  items,
  setSelectedRow,
  loading,
  selectedNode,
}: {
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

  // const filtr = useRef(null);

  // const allTags = [
  //   'Health Maintenance',
  //   'Hematology & Oncology',
  //   'Family Medicine',
  //   'Infectious Disease',
  //   'DME',
  // ];
  // const [visibleTags, setVisibleTags] = useState([]);
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const { groupId } = useParams<{ groupId: string }>();
  const { libraryId } = useParams<{ libraryId: string }>();
  const { orgId } = useContext(LibraryContext);
  const fetchData = async () => {
    let item;
    setLoader(true);
    try {
      if (groupId === undefined) {
        setAllItems([]);
        setSubHeading('All phrases/AAOS Orthoinfo');
      } else {
        item = await getPhrasesByPhraseGroupId(groupId);
        setAllItems(item);
        setSubHeading(selectedNode.label);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    if (libraryId === 'user') {
      const orgId = await getUserOrgId();
      item = await getPhrasesByOrganizationId(orgId);
      setAllItems(item);
      setHeading('My Library');
    } else if (libraryId === 'dotScribe') {
      setHeading('dotScribe Community');
    } else {
      const orgId = await getUserOrgId();
      item = await getPhrasesByOrganizationId(orgId);
      setAllItems(item);
      setHeading('My Library');
    }
    setLoader(false);
    // console.log(Allitems);
  };
  useEffect(() => {
    fetchData();
  }, [groupId, libraryId]);

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

  const header = (
    <div className="grid">
      <div className="mb-1 col-6">
        <p className="mb-1 text-2xl font-medium">Phrases</p>
        <label className="text-gray-500">AAOS Orthoinfo</label>
      </div>
      <div className="col-6 flex justify-content-end align-self-start">
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
    </div>
  );

  return (
    <div className="main">
      <InfoBar
        img={`/src/assets/images/CommunityImg.png`}
        heading={heading}
        subHeading={subHeading}
      />
      <OpitonBar />
      {loader ? (
        <div className="flex mt-6">
          <ProgressSpinner
            style={{ width: '70px', height: '70px' }}
            strokeWidth="4"
            animationDuration=".5s"
          />
        </div>
      ) : (
        <TableDetails
          items={Allitems}
          head={header}
          loading={loading}
          setSelectedRow={setSelectedRow}
          data={'Phrases'}
        />
      )}
    </div>
  );
};
