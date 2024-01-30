import { getUserOrgId, removeUser, setUser } from '@server/functions/functions';
import { api } from '../axios';
import { CreateUserInput, DeleteUserInput, UpdateUserInput } from './types';
import { graphQLRequest } from './helper';

const CREATE_USER_QUERY = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    logo
    isOwner
    permissions
    metadata
    disabled
    deleted
    loggedInDevices
    loggedInCount
    organizationID
    _version
    _deleted
    _lastChangedAt
    createdAt
    updatedAt
  }
}`;

const DELETE_USER_QUERY = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
    logo
    isOwner
    permissions
    metadata
    disabled
    deleted
    loggedInDevices
    loggedInCount
    organizationID
    _version
    _deleted
    _lastChangedAt
    createdAt
    updatedAt
  }
}`;

const UPDATE_USER_QUERY = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    logo
    isOwner
    permissions
    metadata
    disabled
    deleted
    loggedInDevices
    loggedInCount
    organizationID
    _version
    _deleted
    _lastChangedAt
    createdAt
    updatedAt
  }
}`;

export const inviteUser = async (input: CreateUserInput) => {
  const organizationID = getUserOrgId();
  Object.assign(input, { organizationID });
  try {
    const {
      data: {
        data: { createUser: data },
      },
    } = await graphQLRequest(CREATE_USER_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const updateUser = async (input: UpdateUserInput) => {
  try {
    const {
      data: {
        data: { updateUser: data },
      },
    } = await graphQLRequest(UPDATE_USER_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

export const deleteUser = async (input: DeleteUserInput) => {
  try {
    const {
      data: {
        data: { deleteUser: data },
      },
    } = await graphQLRequest(DELETE_USER_QUERY, { input });
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};

// Create user / owner with organization
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

export const signOut = () => {
  removeUser();
};

export const forgotPassword = async (email: string) =>
  api.post('/users/forgot-password', {
    email,
  });
