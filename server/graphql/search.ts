import { api } from '../axios';

export const search = async (
  organizationID: string,
  phrasegroupID: string | null,
  keyword: string,
  tagIDs: string[] | [],
) =>
  api.post('/search', {
    organizationID,
    phrasegroupID,
    keyword,
    tagIDs,
  });
