import React, { useContext, useEffect, useState } from 'react';
import { Page } from '@app/types/layout';
import CommunityPhrasesTable from '@app/components/phraseView';
import CommunityPhrasesInfo from '@app/components/phraseDetails';
import Layout from '@app/App';
import InfoBar from '@app/components/headingBar';
import { useParams } from 'react-router-dom';
import { LibraryContext } from '../../layout/context/librarycontext';
import { Phrase } from '@app/types/interfaces';
import {
  getPhrasesByOrganizationId,
  getPhrasesByPhraseGroupId,
} from '@server/graphql';
import { getUserOrgId } from '@server/functions/functions';

const Home: Page = () => {
  const {
    phrases,
    updateSelectedRow,
    loading,
    getLibraryNextPhrases,
    selectedRow,
    clearSelectedRow,
    selectedNode,
  } = useContext(LibraryContext);
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const { groupId } = useParams<{ groupId: string }>();
  const { libraryId } = useParams<{ libraryId: string }>();
  const [Allitems, setAllItems] = useState<Phrase[]>(phrases);
  const fetchData = async () => {
    try {
      if (groupId === undefined) {
        setSubHeading('All phrases/AAOS Orthoinfo');
      } else {
        setSubHeading(selectedNode.label);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    if (libraryId === 'user') {
      setHeading('My Library');
      clearSelectedRow();
    } else if (libraryId === 'dotScribe') {
      setHeading('dotScribe Community');
      clearSelectedRow();
    } else {
      setHeading('My Library');
    }
  };
  useEffect(() => {
    fetchData();
  }, [groupId, libraryId, Allitems]);

  const fetch = async () => {
    // setAllItems(items);
    let item;
    // setLoader(true);
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
    // setLoader(false);
  };
  return (
    <Layout>
      <div className="main">
        <InfoBar
          img={`/src/assets/images/CommunityImg.png`}
          heading={heading}
          subHeading={subHeading}
        />
        <div className="grid col-12">
          <div className={`${selectedRow ? 'col-8' : 'col-12'}`}>
            <div className="">
              <CommunityPhrasesTable
                selectedRow={selectedRow}
                selectedNode={selectedNode}
                items={Allitems}
                setSelectedRow={updateSelectedRow}
                loading={loading}
                getLibraryNextPhrases={getLibraryNextPhrases}
              />
            </div>
          </div>
          {selectedRow ? (
            <div
              className="col-4 border-left-2 border-gray-400 mt-3"
              style={{}}
            >
              
              <div className="card">
                <CommunityPhrasesInfo
                  selectedRow={selectedRow}
                  clearSelectedRow={clearSelectedRow}
                  getData={fetch}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Layout>
  );
};

Home.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Home;
