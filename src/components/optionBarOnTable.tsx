import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'primereact/button';
import { ColorPicker } from 'primereact/colorpicker';
import { InputText } from 'primereact/inputtext';
import { createTag, getUserOrgId } from '@server/functions/functions';
import { OverlayPanel } from 'primereact/overlaypanel';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { getPhrasesByPhraseGroupId, search } from '@server/graphql';
// import { Phrase } from '@server/graphql/types';
import { Phrase } from '@app/types/interfaces';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const OpitonBar = ({
  allPhrases,
  setPhrase,
  phrasesOf,
}: {
  allPhrases: Function;
  setPhrase: Function;
  phrasesOf: String;
}) => {
  const [visibleTags, setVisibleTags] = useState([]);
  const [user, setUser] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const filtr = useRef(null);
  const allTags = [
    'Health Maintenance',
    'Hematology & Oncology',
    'Family Medicine',
    'Infectious Disease',
    'DME',
  ];
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  useEffect(() => {
    const loggedinUser = getUserOrgId();
    setUser(loggedinUser);
  }, [searchInput]);
  const onTagsToggle = (event: { value: string[] }) => {
    const selectedColumns = event.value;
    setVisibleTags(selectedColumns);
  };
  const searchFunction = async (e) => {
    if (phrasesOf === 'dotScribe') {
      console.log('dta');

      if (
        searchInput === null ||
        searchInput === '' ||
        searchInput === undefined
      ) {
        allPhrases();
      } else {
        const showData = await search(
          '5c230593-4d2f-42da-9856-251f00f0785e',
          null,
          searchInput,
          [],
        );
        console.log(showData);

        if (showData && showData.data) {
          setPhrase(showData.data);
        }
      }
    } else if (phrasesOf === 'user') {
      console.log('user data');
      if (
        searchInput === null ||
        searchInput === '' ||
        searchInput === undefined
      ) {
        allPhrases();
      } else {
        const showData = await search(
          '5c230593-4d2f-42da-9856-251f00f0785e',
          null,
          searchInput,
          [],
        );
        console.log(showData);
        if (showData && showData.data) {
          setPhrase(showData.data);
        }
      }
    }
  };

  const searchInputSet = async (input) => {
    setSearchInput(input);
    if (input === null || input === '' || input === undefined) {
      allPhrases();
    } else {
      const showData = await search(user, null, input, []);
      if (showData && showData.data) {
        setPhrase(showData.data);
      }
    }
  };

  return (
    <div
      className=" bg-white border-round-md ml-1 mr-1 flex mb-2 shadow-1 mt-2"
      style={{ height: '57px' }}
    >
      <div className="" style={{ width: '10%' }}>
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          placeholder="All"
          className="border-none align-self-center mt-1"
        />
      </div>

      <div className="" style={{ width: '50%' }}>
        <i className="pi pi-search mb-3" />
        <InputText
          type="search"
          value={searchInput}
          onChange={(e) => searchInputSet(e.target.value)}
          placeholder="Search Phrases"
          className=" border-0 mt-1 ml-3"
          style={{ width: '90%' }}
        />
      </div>
      <div className="mt-1" style={{ width: '20%', marginLeft: 'auto' }}>
        <div className="pr-4 pl-4">
          <Button
            label="Search"
            className="w-full"
            onClick={searchFunction}
            style={{ backgroundColor: '#21A1A1' }}
          />
        </div>
      </div>
      <div className="" style={{ width: '10%' }}>
        <Button className="bg-white-alpha-90 border-none">
          <img
            src="/src/assets/images/filter.svg"
            alt="Filter"
            className="mt-1"
            onClick={(e) => filtr.current.toggle(e)}
            style={{ height: '25px' }}
            // onClick={() => setShowMultiSelect(true)}
          ></img>
        </Button>
        <OverlayPanel ref={filtr} style={{ borderRadius: '1rem' }}>
          <>
            <MultiSelect
              value={visibleTags}
              options={allTags}
              onChange={onTagsToggle}
              className=""
              display="chip"
            />
          </>
        </OverlayPanel>
      </div>
    </div>
  );
};
OpitonBar.displayName = 'OpitonBar';
export default OpitonBar;
