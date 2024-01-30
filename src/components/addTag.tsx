import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { ColorPicker } from 'primereact/colorpicker';
import { InputText } from 'primereact/inputtext';
import { createTag } from '@server/functions/functions';

const NewTag = () => {
  const [tagName, setTagName] = useState('');
  const [tagColor, setTagColor] = useState(null);
  const addTag = () => {
    const newTag = { name: tagName, color: tagColor };
    const tagss = createTag(newTag);
    console.log(tagss);

    setTagName('');
    setTagColor(null);
  };
  return (
    <div className="card">
      <div>
        <p className="mb-1 text-2xl">Create new Tags</p>
        <div className="mt-2">
          <p>Add tag name</p>
          <InputText
            type="text"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            placeholder="Enter tag name"
            className="font-medium text-gray-600"
          />
        </div>
        <div className="mt-3">
          <span>Choose a color</span>
          <ColorPicker
            value={tagColor}
            onChange={(e) => setTagColor(e.value)}
            className="ml-3"
          />
        </div>

        <Button
          type="button"
          icon="pi pi-plus"
          label="Add tag to tags"
          onClick={addTag}
          className="font-normal mt-3"
          style={{ backgroundColor: '#FF6A00', borderColor: '#FF6A00' }}
        />
      </div>
    </div>
  );
};
NewTag.displayName = 'NewTag';
export default NewTag;
