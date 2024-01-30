import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';

export const CreateNewPhraseButton = ({ onClick }: { onClick: () => void }) => (
  <>
    <Button
      type="button"
      icon="pi pi-plus"
      label="Add Phrase "
      iconPos="right"
      className="font-normal"
      onClick={onClick}
      style={{ width: '90%', backgroundColor: '#21A1A1' }}
    />
    {/* <OverlayPanel ref={op} style={{ width: '20%', borderRadius: '1rem' }}>
        <div>
          <p className="text-black-alpha-90 font-bold">Create New</p>
          <div className="grid border-round-2xl p-2 back" onClick={onClick}>
            <div className=" align-self-center">
              <div
                className="border-round-2xl ml-2"
                style={{
                  backgroundColor: 'white',
                  height: '2rem',
                  width: '2rem',
                }}
              >
                <img
                  src="/src/assets/images/tags.svg"
                  alt="Filter"
                  className="pl-2 pt-2"
                ></img>
              </div>
            </div>
            <div className="ml-3 align-self-center">
              <p className="text-black-alpha-60 ">Phrases</p>
            </div>
          </div>
        </div>
      </OverlayPanel> */}
  </>
);

export const CopyPhraseButton = () => {
  const aa = 'aa';
  return (
    <>
      <Button
        type="button"
        label="Copy to Clipboard"
        className="font-normal"
        style={{ width: '90%', backgroundColor: '#21A1A1' }}
      />
    </>
  );
};

export const ImportPhraseButton = () => {
  const aa = 'aa';
  return (
    <>
      <Button
        type="button"
        label="Import"
        className="font-normal"
        style={{
          backgroundColor: '#FF6A00',
          borderColor: '#FF6A00',
          width: '90%',
        }}
      />
    </>
  );
};
