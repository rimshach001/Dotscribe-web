import React, { useContext } from 'react';
import { Page } from '@app/types/layout';
import CommunityPhrasesInfo from '@app/components/phraseDetails';
import Layout from '@app/App';
import { PhrasesView } from '@app/pages/table/view';
import { LibraryContext } from '../../layout/context/librarycontext';

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
  console.log(phrases);
  console.log(selectedRow);

  return (
    <Layout>
      <h1> T </h1>
      <div className="grid col-12">
        <div className={`${selectedRow ? 'col-8' : 'col-12'}`}>
          <div className="">
            <PhrasesView
              selectedNode={selectedNode}
              items={phrases}
              setSelectedRow={updateSelectedRow}
              loading={loading}
              getLibraryNextPhrases={getLibraryNextPhrases}
            />
          </div>
        </div>
        {selectedRow ? (
          <div className="col-4">
            <div className="card">
              <CommunityPhrasesInfo
                selectedRow={selectedRow}
                clearSelectedRow={clearSelectedRow}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  );
};

Home.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Home;
