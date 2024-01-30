import { getUserOrgId } from '@server/functions/functions';
import {
  CreatePhraseInput,
  DeletePhraseInput,
  UpdatePhraseInput,
} from './types';
import { graphQLRequest } from './helper';

const GET_PHRASES = `query SyncPhrases($filter: ModelPhraseFilterInput) {
  syncPhrases(filter: $filter) {
    items {
      id
      name
      abbreviation
      content
      phrasegroupID
      organizationID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tags {
        items {
          id
          tagID
          phraseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          tag {
            id
            name
            color
            organizationID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }
    }
  }
}`;

const CREATE_PHRASE_QUERY = `mutation CreatePhrase($input: CreatePhraseInput!) {
  createPhrase(input: $input) {
    content
    abbreviation
    name
    phrasegroupID
  }
}`;

const UPDATE_PHRASE_QUERY = `mutation UpdatePhrase($input: UpdatePhraseInput!) {
  updatePhrase(input: $input) {
    id
    content
    abbreviation
    name
    phrasegroupID
    organizationID
  }
}`;

const DELETE_PHRASE_QUERY = `mutation DeletePhrase($input: DeletePhraseInput!) {
  deletePhrase(input: $input) {
    id
    _version
  }
}`;

export const getPhrasesByPhraseGroupId = async (phrasegroupID: string) => {
  try {
    const {
      data: {
        data: {
          syncPhrases: { items: data },
        },
      },
    } = await graphQLRequest(GET_PHRASES, {
      filter: {
        phrasegroupID: {
          eq: phrasegroupID,
        },
      },
    });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const getPhrasesByOrganizationId = async (organizationID: string) => {
  try {
    const {
      data: {
        data: {
          syncPhrases: { items: data },
        },
      },
    } = await graphQLRequest(GET_PHRASES, {
      filter: {
        organizationID: {
          eq: organizationID,
        },
      },
    });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const createPhrase = async (input: CreatePhraseInput) => {
  const organizationID = getUserOrgId();
  Object.assign(input, { organizationID });
  try {
    const {
      data: {
        data: { createPhrase: data },
      },
    } = await graphQLRequest(CREATE_PHRASE_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const updatePhrase = async (input: UpdatePhraseInput) => {
  try {
    const {
      data: {
        data: { updatePhrase: data },
      },
    } = await graphQLRequest(UPDATE_PHRASE_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const deletePhrase = async (input: DeletePhraseInput) => {
  try {
    const {
      data: {
        data: { deletePhrase: data },
      },
    } = await graphQLRequest(DELETE_PHRASE_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};
