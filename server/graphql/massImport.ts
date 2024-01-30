import { api } from '../axios';

export const massImport = async (
  file: File,
  organizationID: string,
  phrasegroupID: string | null,
) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('organizationID', organizationID);
  if (phrasegroupID) {
    formData.append('phrasegroupID', phrasegroupID);
  }

  return api.post('/mass-import', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
