import { getUserOrgId } from '@server/functions/functions';
import { CreateTagInput, DeleteTagInput, UpdateTagInput } from './types';
import { graphQLRequest } from './helper';

const GET_TAGS = `query Query($filter: ModelTagFilterInput) {
  syncTags(filter: $filter) {
    items {
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

const CREATE_TAG_QUERY = `mutation Mutation($input: CreateTagInput!) {
  createTag(input: $input) {
    id
    name
    color
    organizationID
  }
}`;

const UPDATE_TAG_QUERY = `mutation UpdateTag($input: UpdateTagInput!) {
  updateTag(input: $input) {
    id
    name
    color
    organizationID
    _version
  }
}`;

const DELETE_TAG_QUERY = `mutation DeleteTag($input: DeleteTagInput!) {
  deleteTag(input: $input) {
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
}`;

export const getTagsByOrganizationId = async (organizationID: string) => {
  try {
    const {
      data: {
        data: {
          syncTags: { items: data },
        },
      },
    } = await graphQLRequest(GET_TAGS, {
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

export const createTag = async (input: CreateTagInput) => {
  const organizationID = getUserOrgId();
  Object.assign(input, { organizationID });
  try {
    const {
      data: {
        data: { createTag: data },
      },
    } = await graphQLRequest(CREATE_TAG_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const updateTag = async (input: UpdateTagInput) => {
  try {
    const {
      data: {
        data: { updateTag: data },
      },
    } = await graphQLRequest(UPDATE_TAG_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const deleteTagGroup = async (input: DeleteTagInput) => {
  try {
    const {
      data: {
        data: { deleteTag: data },
      },
    } = await graphQLRequest(DELETE_TAG_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};
