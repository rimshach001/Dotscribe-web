import { getUserOrgId } from '@server/functions/functions';
import {
  CreatePhraseGroupInput,
  Library,
  UpdatePhraseGroupInput,
} from './types';
import { graphQLRequest } from './helper';

const GET_PHRASE_GROUPS = `query SyncPhraseGroups($filter: ModelPhraseGroupFilterInput, $phraseGroupsNestedFilter2: ModelPhraseGroupFilterInput) {
  syncPhraseGroups(filter: $filter) {
    items {
      id
      name
      organizationID
      phrasegroupID
      hidden
      locked
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PhraseGroupsNested(filter: $phraseGroupsNestedFilter2) {
        items {
          id
          name
          organizationID
          phrasegroupID
          hidden
          locked
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          PhraseGroupsNested {
            items {
              id
              name
              organizationID
              phrasegroupID
              hidden
              locked
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              PhraseGroupsNested {
                items {
                  id
                  name
                  organizationID
                  phrasegroupID
                  hidden
                  locked
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  PhraseGroupsNested {
                    items {
                      id
                      name
                      organizationID
                      phrasegroupID
                      hidden
                      locked
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      PhraseGroupsNested {
                        items {
                          id
                          name
                          organizationID
                          phrasegroupID
                          hidden
                          locked
                          _version
                          _deleted
                          _lastChangedAt
                          createdAt
                          updatedAt
                          PhraseGroupsNested {
                            items {
                              id
                              name
                              organizationID
                              phrasegroupID
                              hidden
                              locked
                              _version
                              _deleted
                              _lastChangedAt
                              createdAt
                              updatedAt
                              PhraseGroupsNested {
                                items {
                                  id
                                  name
                                  organizationID
                                  phrasegroupID
                                  hidden
                                  locked
                                  _version
                                  _deleted
                                  _lastChangedAt
                                  createdAt
                                  updatedAt
                                  PhraseGroupsNested {
                                    items {
                                      id
                                      name
                                      organizationID
                                      phrasegroupID
                                      hidden
                                      locked
                                      _version
                                      _deleted
                                      _lastChangedAt
                                      createdAt
                                      updatedAt
                                      PhraseGroupsNested {
                                        items {
                                          id
                                          name
                                          organizationID
                                          phrasegroupID
                                          hidden
                                          locked
                                          _version
                                          _deleted
                                          _lastChangedAt
                                          createdAt
                                          updatedAt
                                          PhraseGroupsNested {
                                            items {
                                              id
                                              name
                                              organizationID
                                              phrasegroupID
                                              hidden
                                              locked
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
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

const CREATE_PHRASE_GROUP_QUERY = `mutation Mutation($input: CreatePhraseGroupInput!) {
  createPhraseGroup(input: $input) {
    _version
    name
    organizationID
    phrasegroupID
    id
  }
}`;

const UPDATE_PHRASE_GROUP_QUERY = `mutation UpdatePhraseGroup($input: UpdatePhraseGroupInput!) {
  updatePhraseGroup(input: $input) {
    id
    phrasegroupID
    organizationID
    name
  }
}`;

const DELETE_PHRASE_GROUP_QUERY = `mutation DeletePhraseGroup($input: DeletePhraseGroupInput!) {
  deletePhraseGroup(input: $input) {
    id
    _version
  }
}`;

export const getPhraseGroupsByOrganizationId = async (
  organizationID: string,
) => {
  try {
    const {
      data: {
        data: {
          syncPhraseGroups: { items: data },
        },
      },
    } = await graphQLRequest(GET_PHRASE_GROUPS, {
      filter: {
        organizationID: {
          eq: organizationID,
        },
      },
      phraseGroupsNestedFilter2: {
        phrasegroupID: {
          attributeExists: false,
        },
      },
    });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const getUserPhraseGroups = () => {
  const orgId = getUserOrgId();
  return getPhraseGroupsByOrganizationId(orgId);
};

export const getDotscribePhraseGroups = () => {
  const orgId = '5c230593-4d2f-42da-9856-251f00f0785e';
  return getPhraseGroupsByOrganizationId(orgId);
};

export const createPhraseGroup = async (input: CreatePhraseGroupInput) => {
  try {
    const {
      data: {
        data: { createPhraseGroup: data },
      },
    } = await graphQLRequest(CREATE_PHRASE_GROUP_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const updatePhraseGroup = async (input: UpdatePhraseGroupInput) => {
  try {
    const {
      data: {
        data: { updatePhraseGroup: data },
      },
    } = await graphQLRequest(UPDATE_PHRASE_GROUP_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const updatePhraseGroupsOrder = async (
  child: Library,
  parent: Library,
) => {
  const data = {
    id: child.key,
    // eslint-disable-next-line no-underscore-dangle
    _version: child._version,
    name: child.label,
    phrasegroupID: parent?.key || null,
  };
  await updatePhraseGroup(data);
};

export const deletePhraseGroup = async (input) => {
  try {
    const {
      data: {
        data: { deletePhraseGroup: data },
      },
    } = await graphQLRequest(DELETE_PHRASE_GROUP_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};
