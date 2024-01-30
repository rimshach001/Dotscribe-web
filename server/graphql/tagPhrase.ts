import { graphQLRequest } from './helper';
import { CreateTagPhraseInput, DeleteTagPhraseInput } from './types';

const CREATE_TAG_PHRASE_QUERY = `mutation Mutation($input: CreateTagPhraseInput!) {
  createTagPhrase(input: $input) {
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
}`;

const DELETE_TAG_PHRASE_QUERY = `mutation DeleteTagPhrase($input: DeleteTagPhraseInput!) {
  deleteTagPhrase(input: $input) {
    id
    tagID
    phraseID
    _version
    _deleted
    _lastChangedAt
    createdAt
    updatedAt
  }
}`;

export const createTagPhrase = async (input: CreateTagPhraseInput) => {
  try {
    const {
      data: {
        data: { createTagPhrase: data },
      },
    } = await graphQLRequest(CREATE_TAG_PHRASE_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const deleteTagPhraseGroup = async (input: DeleteTagPhraseInput) => {
  try {
    const {
      data: {
        data: { deleteTagPhrase: data },
      },
    } = await graphQLRequest(DELETE_TAG_PHRASE_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const assignTagToPhrase = async (phraseID: string, tagID: string) =>
  createTagPhrase({ phraseID, tagID });
