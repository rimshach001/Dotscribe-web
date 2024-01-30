import React, { useEffect, useState, useContext } from 'react';
import { getAllTags } from '@server/functions/functions';
import { updateTag } from '@server/graphql';
import { LibraryContext } from '@app/layout/context/librarycontext';
import InfoBar from './headingBar';
import TagDetails from './table/tagsTable';

const AllTags = () => {
  const [allTags, setAllTags] = useState([]);
  const [loader, setLoader] = useState(true);

  const { updateSelectedTagRow } = useContext(LibraryContext);
  const fetchData = async () => {
    setLoader(true);
    try {
      const allTagsData = await getAllTags();
      // eslint-disable-next-line no-underscore-dangle
      const filteredTags = allTagsData.filter((tag) => tag._deleted !== true);
      setAllTags(filteredTags);
      console.log(allTags);
    } catch (error) {
      console.error(error);
    }
    setLoader(false);
  };
  useEffect(() => {
    fetchData();
  }, [updateTag]);

  const header = (
    <div className="grid">
      <div className="mb-1 col-6">
        <p className="mb-1 text-2xl font-medium">My Tags</p>
        <label className="text-gray-500">AAOS Ortho Information</label>
      </div>
    </div>
  );

  return (
    <div className="main">
      <div>
        <InfoBar
          img={'/src/assets/images/CommunityImg.png'}
          heading={'dotScribe Community'}
          subHeading={'All Tags/AAOS Orthoinfo'}
        />

        <div className="mt-2">
          <TagDetails
            items={allTags}
            head={header}
            setSelectedRow={updateSelectedTagRow}
            loading={loader}
            data={undefined}
          />
        </div>
      </div>
    </div>
  );
};

AllTags.displayName = 'AllTags';
export default AllTags;
