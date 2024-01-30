import { phraseGroups } from '@app/types/interfaces';
import { api, graphql } from '../axios';

export const removeUser = () => sessionStorage.removeItem('user');
export const getUser = () => JSON.parse(sessionStorage.getItem('user'));
export const setUser = (user) =>
  sessionStorage.setItem('user', JSON.stringify(user));

export const getUserOrgId = () => {
  const user = getUser();
  // console.log(user.attributes['custom:organization'], 'user');
  return user.attributes['custom:organization'];
};

export const signOut = () => {
  removeUser();
};

export const signup = async (
  name: string,
  email: string,
  password: string,
  firstname: string,
  lastname: string,
  organization: string,
) =>
  api.post('/users/signup', {
    name,
    first: firstname,
    last: lastname,
    email,
    password,
    organization,
    isOwner: true,
  });

export const signin = async (email: string, password: string) => {
  try {
    const { data } = await api.post('/users/signin', {
      email,
      password,
    });
    setUser(data);
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const mapLibs = (folders: phraseGroups[] | null) => {
  if (!folders || !Array.isArray(folders)) {
    // console.log(folders);
    return [];
  }

  return (
    folders
      // eslint-disable-next-line no-underscore-dangle
      .filter((x) => !x?._deleted) // Ensure x exists before accessing properties
      .map((x) => ({
        key: x.id,
        // eslint-disable-next-line no-underscore-dangle
        _version: x._version,
        phrasegroupID: x.phrasegroupID,
        organizationID: x.organizationID,
        label: x.name,
        data: x.name,
        icon: 'pi pi-folder',
        children:
          x.PhraseGroupsNested &&
          x.PhraseGroupsNested.items &&
          x.PhraseGroupsNested.items.length
            ? mapLibs(x.PhraseGroupsNested.items)
            : [],
      }))
  );
};

export const deletePhraseGroup = async (input) => {
  try {
    const {
      data: {
        data: { deletePhraseGroup: data },
      },
    } = await graphql.post('/', {
      query: `mutation DeletePhraseGroup($input: DeletePhraseGroupInput!) {
        deletePhraseGroup(input: $input) {
          id
          _version
        }
      }`,
      variables: {
        input,
      },
    });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const createPhraseGroup = async (input) => {
  try {
    const {
      data: {
        data: { createPhraseGroup: data },
      },
    } = await graphql.post('/', {
      query: `mutation Mutation($input: CreatePhraseGroupInput!) {
        createPhraseGroup(input: $input) {
          _version
          name
          organizationID
          phrasegroupID
          id
        }
      }`,
      variables: {
        input,
      },
    });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const createTag = async (input) => {
  const orgId = getUserOrgId();
  try {
    const {
      data: {
        data: { createTag: data },
      },
    } = await graphql.post('/', {
      query: `mutation CreateTag($input: CreateTagInput!) {
        createTag(input: $input) {
          color
          name
          organizationID
        }
      }`,
      variables: {
        input: {
          name: input.name,
          organizationID: orgId,
          color: input.color,
        },
      },
    });
    console.log(data, 'add tag data');
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

const getAllPhraseGroups = async (orgId: string) => {
  try {
    const {
      data: {
        data: {
          getOrganization: {
            PhraseGroups: { items: data },
          },
        },
      },
    } = await graphql.post('/', {
      query: `query GetOrganization($getOrganizationId: ID!, $filter: ModelPhraseGroupFilterInput, $phraseGroupsFilter2: ModelPhraseGroupFilterInput) {
        getOrganization(id: $getOrganizationId) {
          PhraseGroups(filter: $phraseGroupsFilter2) {
            items {
              id
              name
              organizationID
              PhraseGroupsNested(filter: $filter) {
                items {
                  id
                  name
                  organizationID
                  phrasegroupID
                  _version
                  _deleted
                  PhraseGroupsNested {
                    items {
                      id
                      name
                      organizationID
                      phrasegroupID
                      _version
                      _deleted
                      PhraseGroupsNested {
                        items {
                          id
                          name
                          organizationID
                          phrasegroupID
                          _version
                          _deleted
                          PhraseGroupsNested {
                            items {
                              id
                              name
                              organizationID
                              phrasegroupID
                              _version
                              _deleted
                              PhraseGroupsNested {
                                items {
                                  id
                                  name
                                  organizationID
                                  phrasegroupID
                                  _version
                                  _deleted
                                  PhraseGroupsNested {
                                    items {
                                      id
                                      name
                                      organizationID
                                      phrasegroupID
                                      _version
                                      _deleted
                                      PhraseGroupsNested {
                                        items {
                                          id
                                          name
                                          organizationID
                                          phrasegroupID
                                          _version
                                          _deleted
                                          PhraseGroupsNested {
                                            items {
                                              id
                                              name
                                              organizationID
                                              phrasegroupID
                                              _version
                                              _deleted
                                              PhraseGroupsNested {
                                                items {
                                                  id
                                                  name
                                                  organizationID
                                                  phrasegroupID
                                                  _version
                                                  _deleted
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
              phrasegroupID
            }
          }
          id
          name
        }
      }`,
      variables: {
        getOrganizationId: orgId,
        phraseGroupsFilter2: {
          phrasegroupID: {
            attributeExists: false,
          },
        },
      },
    });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const getAllTags = async () => {
  const orgId = getUserOrgId();
  try {
    const {
      data: {
        data: {
          getOrganization: {
            Tags: { items: data },
          },
        },
      },
    } = await graphql.post('/', {
      query: `query GetOrganization($getOrganizationId: ID!) {
        getOrganization(id: $getOrganizationId) {
          Tags {
            items {
              id
              name
              organizationID
              color
              _version
              _deleted
            }
          }
        }
      }`,
      variables: {
        getOrganizationId: orgId,
      },
    });

    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const getPhraseGroupPhrases = async (phraseGroupId: string) => {
  try {
    const {
      data: {
        data: {
          getPhraseGroup: {
            Phrases: { items: data },
          },
        },
      },
    } = await graphql.post('/', {
      query: `query GetPhraseGroup($getPhraseGroupId: ID!) {
        getPhraseGroup(id: $getPhraseGroupId) {
          Phrases {
            items {
              id
              name
              content
              abbreviation
              _version
              phrasegroupID
            }
          }
          id
          name
        }
      }`,
      variables: {
        getPhraseGroupId: phraseGroupId,
      },
    });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const getUserLibrary = async () => {
  const orgId = getUserOrgId();
  try {
    return await getAllPhraseGroups(orgId);
  } catch (e) {
    console.log(e);

    throw new Error(JSON.stringify(e));
  }
};

export const getDSLibrary = async () => {
  const orgId = '5c230593-4d2f-42da-9856-251f00f0785e';
  try {
    return await getAllPhraseGroups(orgId);
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const createPhrase = async (input) => {
  const orgId = getUserOrgId();
  try {
    const { data } = await graphql.post('/', {
      query: `mutation CreatePhrase($input: CreatePhraseInput!) {
        createPhrase(input: $input) {
          content
          abbreviation
          name
          phrasegroupID
        }
      }`,
      variables: {
        input: {
          name: input.name,
          phrasegroupID: input.phrasegroupID,
          content: input.content,
          abbreviation: input.abbreviation,
          organizationID: orgId,
        },
      },
    });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const updatePhraseGroup = async (phraseGroup) => {
  try {
    const {
      data: {
        data: { updatePhraseGroup: data },
      },
    } = await graphql.post('/', {
      query: `mutation UpdatePhraseGroup($input: UpdatePhraseGroupInput!) {
        updatePhraseGroup(input: $input) {
          id
          phrasegroupID
          organizationID
          name
        }
      }`,
      variables: {
        input: {
          id: phraseGroup.id,
          // eslint-disable-next-line no-underscore-dangle
          _version: phraseGroup._version,
          phrasegroupID: phraseGroup.phrasegroupID,
          name: phraseGroup.name,
        },
      },
    });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const updatePhraseGroupsOrder = async (child, parent) => {
  const data = {
    id: child.key,
    // eslint-disable-next-line no-underscore-dangle
    _version: child._version,
    name: child.label,
    phrasegroupID: parent?.key || null,
  };
  await updatePhraseGroup(data);
};
