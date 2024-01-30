export type Library = {
  key?: string | null;
  label?: string | null;
  name?: string | null;
  phrasegroupID?: string | null;
  organizationID?: string | null;
  _version?: number | null;
};

export type CreatePhraseInput = {
  id?: string | null;
  name?: string | null;
  abbreviation?: string | null;
  content?: string | null;
  phrasegroupID?: string | null;
  organizationID?: string | null;
  _version?: number | null;
};

export type ModelPhraseConditionInput = {
  name?: ModelStringInput | null;
  abbreviation?: ModelStringInput | null;
  content?: ModelStringInput | null;
  phrasegroupID?: ModelIDInput | null;
  organizationID?: ModelIDInput | null;
  and?: Array<ModelPhraseConditionInput | null> | null;
  or?: Array<ModelPhraseConditionInput | null> | null;
  not?: ModelPhraseConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Phrase = {
  __typename: 'Phrase';
  id: string;
  name?: string | null;
  abbreviation?: string | null;
  content?: string | null;
  phrasegroupID?: string | null;
  organizationID?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  tags?: ModelTagPhraseConnection | null;
};

export type ModelTagPhraseConnection = {
  __typename: 'ModelTagPhraseConnection';
  items: Array<TagPhrase | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type TagPhrase = {
  __typename: 'TagPhrase';
  id: string;
  tagID: string;
  phraseID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  phrase: Phrase;
  tag: Tag;
};

export type Tag = {
  __typename: 'Tag';
  id: string;
  name?: string | null;
  color?: string | null;
  organizationID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  TagPhrases?: ModelTagPhraseConnection | null;
};

export type UpdatePhraseInput = {
  id: string;
  name?: string | null;
  abbreviation?: string | null;
  content?: string | null;
  phrasegroupID?: string | null;
  organizationID?: string | null;
  _version?: number | null;
};

export type DeletePhraseInput = {
  id: string;
  _version?: number | null;
};

export type CreateTagInput = {
  id?: string | null;
  name?: string | null;
  color?: string | null;
  organizationID: string;
  _version?: number | null;
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null;
  color?: ModelStringInput | null;
  organizationID?: ModelIDInput | null;
  and?: Array<ModelTagConditionInput | null> | null;
  or?: Array<ModelTagConditionInput | null> | null;
  not?: ModelTagConditionInput | null;
};

export type UpdateTagInput = {
  id: string;
  name?: string | null;
  color?: string | null;
  organizationID?: string | null;
  _version?: number | null;
};

export type DeleteTagInput = {
  id: string;
  _version?: number | null;
};

export type CreateOrganizationInput = {
  Owner?: CreateUserInput;
  id?: string | null;
  name?: string | null;
  logo?: string | null;
  stripeCustomerId?: string | null;
  _version?: number | null;
  organizationOwnerId?: string | null;
};

export type ModelOrganizationConditionInput = {
  name?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  stripeCustomerId?: ModelStringInput | null;
  and?: Array<ModelOrganizationConditionInput | null> | null;
  or?: Array<ModelOrganizationConditionInput | null> | null;
  not?: ModelOrganizationConditionInput | null;
};

export type Organization = {
  __typename?: 'Organization';
  id: string;
  name?: string | null;
  logo?: string | null;
  stripeCustomerId?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Phrases?: ModelPhraseConnection | null;
  Tags?: ModelTagConnection | null;
  Users?: ModelUserConnection | null;
  Owner?: User | null;
  PhraseGroups?: ModelPhraseGroupConnection | null;
};

export type ModelPhraseConnection = {
  __typename?: 'ModelPhraseConnection';
  items: Array<Phrase | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTagConnection = {
  __typename: 'ModelTagConnection';
  items: Array<Tag | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelUserConnection = {
  __typename?: 'ModelUserConnection';
  items: Array<User | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type User = {
  __typename: 'User';
  id: string;
  name?: string | null;
  logo?: string | null;
  isOwner?: boolean | null;
  permissions?: string | null;
  metadata?: string | null;
  disabled?: boolean | null;
  deleted?: boolean | null;
  loggedInDevices?: string | null;
  loggedInCount?: string | null;
  organizationID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  UserStats?: ModelUserStatConnection | null;
};

export type ModelUserStatConnection = {
  __typename: 'ModelUserStatConnection';
  items: Array<UserStat | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UserStat = {
  __typename: 'UserStat';
  id: string;
  userID: string;
  statID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  user: User;
  stat: Stat;
};

export type Stat = {
  __typename: 'Stat';
  id: string;
  type?: string | null;
  content?: string | null;
  bool?: boolean | null;
  count?: number | null;
  count_1?: number | null;
  count_2?: number | null;
  count_3?: number | null;
  count_4?: number | null;
  metadata?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  users?: ModelUserStatConnection | null;
};

export type ModelPhraseGroupConnection = {
  __typename?: 'ModelPhraseGroupConnection';
  items: Array<PhraseGroup | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type PhraseGroup = {
  __typename: 'PhraseGroup';
  id: string;
  name?: string | null;
  organizationID?: string | null;
  phrasegroupID?: string | null;
  hidden?: boolean | null;
  locked?: boolean | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Phrases?: ModelPhraseConnection | null;
  PhraseGroupsNested?: ModelPhraseGroupConnection | null;
};

export type UpdateOrganizationInput = {
  id: string;
  name?: string | null;
  logo?: string | null;
  stripeCustomerId?: string | null;
  _version?: number | null;
  organizationOwnerId?: string | null;
};

export type DeleteOrganizationInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserInput = {
  id?: string | null;
  name?: string | null;
  logo?: string | null;
  isOwner?: boolean | null;
  permissions?: string | null;
  metadata?: string | null;
  disabled?: boolean | null;
  deleted?: boolean | null;
  loggedInDevices?: string | null;
  loggedInCount?: string | null;
  organizationID?: string;
  _version?: number | null;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  isOwner?: ModelBooleanInput | null;
  permissions?: ModelStringInput | null;
  metadata?: ModelStringInput | null;
  disabled?: ModelBooleanInput | null;
  deleted?: ModelBooleanInput | null;
  loggedInDevices?: ModelStringInput | null;
  loggedInCount?: ModelStringInput | null;
  organizationID?: ModelIDInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  logo?: string | null;
  isOwner?: boolean | null;
  permissions?: string | null;
  metadata?: string | null;
  disabled?: boolean | null;
  deleted?: boolean | null;
  loggedInDevices?: string | null;
  loggedInCount?: string | null;
  organizationID?: string | null;
  _version?: number | null;
};

export type DeleteUserInput = {
  id: string;
  _version?: number | null;
};

export type CreateStatInput = {
  id?: string | null;
  type?: string | null;
  content?: string | null;
  bool?: boolean | null;
  count?: number | null;
  count_1?: number | null;
  count_2?: number | null;
  count_3?: number | null;
  count_4?: number | null;
  metadata?: string | null;
  _version?: number | null;
};

export type ModelStatConditionInput = {
  type?: ModelStringInput | null;
  content?: ModelStringInput | null;
  bool?: ModelBooleanInput | null;
  count?: ModelIntInput | null;
  count_1?: ModelIntInput | null;
  count_2?: ModelIntInput | null;
  count_3?: ModelIntInput | null;
  count_4?: ModelIntInput | null;
  metadata?: ModelStringInput | null;
  and?: Array<ModelStatConditionInput | null> | null;
  or?: Array<ModelStatConditionInput | null> | null;
  not?: ModelStatConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateStatInput = {
  id: string;
  type?: string | null;
  content?: string | null;
  bool?: boolean | null;
  count?: number | null;
  count_1?: number | null;
  count_2?: number | null;
  count_3?: number | null;
  count_4?: number | null;
  metadata?: string | null;
  _version?: number | null;
};

export type DeleteStatInput = {
  id: string;
  _version?: number | null;
};

export type CreatePhraseGroupInput = {
  id?: string | null;
  name?: string | null;
  organizationID?: string | null;
  phrasegroupID?: string | null;
  hidden?: boolean | null;
  locked?: boolean | null;
  _version?: number | null;
};

export type ModelPhraseGroupConditionInput = {
  name?: ModelStringInput | null;
  organizationID?: ModelIDInput | null;
  phrasegroupID?: ModelIDInput | null;
  hidden?: ModelBooleanInput | null;
  locked?: ModelBooleanInput | null;
  and?: Array<ModelPhraseGroupConditionInput | null> | null;
  or?: Array<ModelPhraseGroupConditionInput | null> | null;
  not?: ModelPhraseGroupConditionInput | null;
};

export type UpdatePhraseGroupInput = {
  id: string;
  name?: string | null;
  organizationID?: string | null;
  phrasegroupID?: string | null;
  hidden?: boolean | null;
  locked?: boolean | null;
  _version?: number | null;
};

export type DeletePhraseGroupInput = {
  id: string;
  _version?: number | null;
};

export type CreateTagPhraseInput = {
  id?: string | null;
  tagID: string;
  phraseID: string;
  _version?: number | null;
};

export type ModelTagPhraseConditionInput = {
  tagID?: ModelIDInput | null;
  phraseID?: ModelIDInput | null;
  and?: Array<ModelTagPhraseConditionInput | null> | null;
  or?: Array<ModelTagPhraseConditionInput | null> | null;
  not?: ModelTagPhraseConditionInput | null;
};

export type UpdateTagPhraseInput = {
  id: string;
  tagID?: string | null;
  phraseID?: string | null;
  _version?: number | null;
};

export type DeleteTagPhraseInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserStatInput = {
  id?: string | null;
  userID: string;
  statID: string;
  _version?: number | null;
};

export type ModelUserStatConditionInput = {
  userID?: ModelIDInput | null;
  statID?: ModelIDInput | null;
  and?: Array<ModelUserStatConditionInput | null> | null;
  or?: Array<ModelUserStatConditionInput | null> | null;
  not?: ModelUserStatConditionInput | null;
};

export type UpdateUserStatInput = {
  id: string;
  userID?: string | null;
  statID?: string | null;
  _version?: number | null;
};

export type DeleteUserStatInput = {
  id: string;
  _version?: number | null;
};

export type ModelPhraseFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  abbreviation?: ModelStringInput | null;
  content?: ModelStringInput | null;
  phrasegroupID?: ModelIDInput | null;
  organizationID?: ModelIDInput | null;
  and?: Array<ModelPhraseFilterInput | null> | null;
  or?: Array<ModelPhraseFilterInput | null> | null;
  not?: ModelPhraseFilterInput | null;
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  color?: ModelStringInput | null;
  organizationID?: ModelIDInput | null;
  and?: Array<ModelTagFilterInput | null> | null;
  or?: Array<ModelTagFilterInput | null> | null;
  not?: ModelTagFilterInput | null;
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  stripeCustomerId?: ModelStringInput | null;
  and?: Array<ModelOrganizationFilterInput | null> | null;
  or?: Array<ModelOrganizationFilterInput | null> | null;
  not?: ModelOrganizationFilterInput | null;
};

export type ModelOrganizationConnection = {
  __typename: 'ModelOrganizationConnection';
  items: Array<Organization | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  isOwner?: ModelBooleanInput | null;
  permissions?: ModelStringInput | null;
  metadata?: ModelStringInput | null;
  disabled?: ModelBooleanInput | null;
  deleted?: ModelBooleanInput | null;
  loggedInDevices?: ModelStringInput | null;
  loggedInCount?: ModelStringInput | null;
  organizationID?: ModelIDInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelStatFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelStringInput | null;
  content?: ModelStringInput | null;
  bool?: ModelBooleanInput | null;
  count?: ModelIntInput | null;
  count_1?: ModelIntInput | null;
  count_2?: ModelIntInput | null;
  count_3?: ModelIntInput | null;
  count_4?: ModelIntInput | null;
  metadata?: ModelStringInput | null;
  and?: Array<ModelStatFilterInput | null> | null;
  or?: Array<ModelStatFilterInput | null> | null;
  not?: ModelStatFilterInput | null;
};

export type ModelStatConnection = {
  __typename: 'ModelStatConnection';
  items: Array<Stat | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelPhraseGroupFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  organizationID?: ModelIDInput | null;
  phrasegroupID?: ModelIDInput | null;
  hidden?: ModelBooleanInput | null;
  locked?: ModelBooleanInput | null;
  and?: Array<ModelPhraseGroupFilterInput | null> | null;
  or?: Array<ModelPhraseGroupFilterInput | null> | null;
  not?: ModelPhraseGroupFilterInput | null;
};

export type ModelTagPhraseFilterInput = {
  id?: ModelIDInput | null;
  tagID?: ModelIDInput | null;
  phraseID?: ModelIDInput | null;
  and?: Array<ModelTagPhraseFilterInput | null> | null;
  or?: Array<ModelTagPhraseFilterInput | null> | null;
  not?: ModelTagPhraseFilterInput | null;
};

export type ModelUserStatFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  statID?: ModelIDInput | null;
  and?: Array<ModelUserStatFilterInput | null> | null;
  or?: Array<ModelUserStatFilterInput | null> | null;
  not?: ModelUserStatFilterInput | null;
};

export type CreatePhraseMutationVariables = {
  input: CreatePhraseInput;
  condition?: ModelPhraseConditionInput | null;
};

export type CreatePhraseMutation = {
  createPhrase?: {
    __typename: 'Phrase';
    id: string;
    name?: string | null;
    abbreviation?: string | null;
    content?: string | null;
    phrasegroupID?: string | null;
    organizationID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    tags?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type UpdatePhraseMutationVariables = {
  input: UpdatePhraseInput;
  condition?: ModelPhraseConditionInput | null;
};

export type UpdatePhraseMutation = {
  updatePhrase?: {
    __typename: 'Phrase';
    id: string;
    name?: string | null;
    abbreviation?: string | null;
    content?: string | null;
    phrasegroupID?: string | null;
    organizationID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    tags?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type DeletePhraseMutationVariables = {
  input: DeletePhraseInput;
  condition?: ModelPhraseConditionInput | null;
};

export type DeletePhraseMutation = {
  deletePhrase?: {
    __typename: 'Phrase';
    id: string;
    name?: string | null;
    abbreviation?: string | null;
    content?: string | null;
    phrasegroupID?: string | null;
    organizationID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    tags?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type CreateTagMutationVariables = {
  input: CreateTagInput;
  condition?: ModelTagConditionInput | null;
};

export type CreateTagMutation = {
  createTag?: {
    __typename: 'Tag';
    id: string;
    name?: string | null;
    color?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    TagPhrases?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput;
  condition?: ModelTagConditionInput | null;
};

export type UpdateTagMutation = {
  updateTag?: {
    __typename: 'Tag';
    id: string;
    name?: string | null;
    color?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    TagPhrases?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput;
  condition?: ModelTagConditionInput | null;
};

export type DeleteTagMutation = {
  deleteTag?: {
    __typename: 'Tag';
    id: string;
    name?: string | null;
    color?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    TagPhrases?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput;
  condition?: ModelOrganizationConditionInput | null;
};

export type CreateOrganizationMutation = {
  createOrganization?: {
    __typename: 'Organization';
    id: string;
    name?: string | null;
    logo?: string | null;
    stripeCustomerId?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Tags?: {
      __typename: 'ModelTagConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelUserConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Owner?: {
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    PhraseGroups?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput;
  condition?: ModelOrganizationConditionInput | null;
};

export type UpdateOrganizationMutation = {
  updateOrganization?: {
    __typename: 'Organization';
    id: string;
    name?: string | null;
    logo?: string | null;
    stripeCustomerId?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Tags?: {
      __typename: 'ModelTagConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelUserConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Owner?: {
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    PhraseGroups?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type DeleteOrganizationMutationVariables = {
  input: DeleteOrganizationInput;
  condition?: ModelOrganizationConditionInput | null;
};

export type DeleteOrganizationMutation = {
  deleteOrganization?: {
    __typename: 'Organization';
    id: string;
    name?: string | null;
    logo?: string | null;
    stripeCustomerId?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Tags?: {
      __typename: 'ModelTagConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelUserConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Owner?: {
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    PhraseGroups?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: 'User';
    id: string;
    name?: string | null;
    logo?: string | null;
    isOwner?: boolean | null;
    permissions?: string | null;
    metadata?: string | null;
    disabled?: boolean | null;
    deleted?: boolean | null;
    loggedInDevices?: string | null;
    loggedInCount?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    UserStats?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: 'User';
    id: string;
    name?: string | null;
    logo?: string | null;
    isOwner?: boolean | null;
    permissions?: string | null;
    metadata?: string | null;
    disabled?: boolean | null;
    deleted?: boolean | null;
    loggedInDevices?: string | null;
    loggedInCount?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    UserStats?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
  condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: 'User';
    id: string;
    name?: string | null;
    logo?: string | null;
    isOwner?: boolean | null;
    permissions?: string | null;
    metadata?: string | null;
    disabled?: boolean | null;
    deleted?: boolean | null;
    loggedInDevices?: string | null;
    loggedInCount?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    UserStats?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type CreateStatMutationVariables = {
  input: CreateStatInput;
  condition?: ModelStatConditionInput | null;
};

export type CreateStatMutation = {
  createStat?: {
    __typename: 'Stat';
    id: string;
    type?: string | null;
    content?: string | null;
    bool?: boolean | null;
    count?: number | null;
    count_1?: number | null;
    count_2?: number | null;
    count_3?: number | null;
    count_4?: number | null;
    metadata?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    users?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type UpdateStatMutationVariables = {
  input: UpdateStatInput;
  condition?: ModelStatConditionInput | null;
};

export type UpdateStatMutation = {
  updateStat?: {
    __typename: 'Stat';
    id: string;
    type?: string | null;
    content?: string | null;
    bool?: boolean | null;
    count?: number | null;
    count_1?: number | null;
    count_2?: number | null;
    count_3?: number | null;
    count_4?: number | null;
    metadata?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    users?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type DeleteStatMutationVariables = {
  input: DeleteStatInput;
  condition?: ModelStatConditionInput | null;
};

export type DeleteStatMutation = {
  deleteStat?: {
    __typename: 'Stat';
    id: string;
    type?: string | null;
    content?: string | null;
    bool?: boolean | null;
    count?: number | null;
    count_1?: number | null;
    count_2?: number | null;
    count_3?: number | null;
    count_4?: number | null;
    metadata?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    users?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type CreatePhraseGroupMutationVariables = {
  input: CreatePhraseGroupInput;
  condition?: ModelPhraseGroupConditionInput | null;
};

export type CreatePhraseGroupMutation = {
  createPhraseGroup?: {
    __typename: 'PhraseGroup';
    id: string;
    name?: string | null;
    organizationID?: string | null;
    phrasegroupID?: string | null;
    hidden?: boolean | null;
    locked?: boolean | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PhraseGroupsNested?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type UpdatePhraseGroupMutationVariables = {
  input: UpdatePhraseGroupInput;
  condition?: ModelPhraseGroupConditionInput | null;
};

export type UpdatePhraseGroupMutation = {
  updatePhraseGroup?: {
    __typename: 'PhraseGroup';
    id: string;
    name?: string | null;
    organizationID?: string | null;
    phrasegroupID?: string | null;
    hidden?: boolean | null;
    locked?: boolean | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PhraseGroupsNested?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type DeletePhraseGroupMutationVariables = {
  input: DeletePhraseGroupInput;
  condition?: ModelPhraseGroupConditionInput | null;
};

export type DeletePhraseGroupMutation = {
  deletePhraseGroup?: {
    __typename: 'PhraseGroup';
    id: string;
    name?: string | null;
    organizationID?: string | null;
    phrasegroupID?: string | null;
    hidden?: boolean | null;
    locked?: boolean | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PhraseGroupsNested?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type CreateTagPhraseMutationVariables = {
  input: CreateTagPhraseInput;
  condition?: ModelTagPhraseConditionInput | null;
};

export type CreateTagPhraseMutation = {
  createTagPhrase?: {
    __typename: 'TagPhrase';
    id: string;
    tagID: string;
    phraseID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    phrase: {
      __typename: 'Phrase';
      id: string;
      name?: string | null;
      abbreviation?: string | null;
      content?: string | null;
      phrasegroupID?: string | null;
      organizationID?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
    tag: {
      __typename: 'Tag';
      id: string;
      name?: string | null;
      color?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
};

export type UpdateTagPhraseMutationVariables = {
  input: UpdateTagPhraseInput;
  condition?: ModelTagPhraseConditionInput | null;
};

export type UpdateTagPhraseMutation = {
  updateTagPhrase?: {
    __typename: 'TagPhrase';
    id: string;
    tagID: string;
    phraseID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    phrase: {
      __typename: 'Phrase';
      id: string;
      name?: string | null;
      abbreviation?: string | null;
      content?: string | null;
      phrasegroupID?: string | null;
      organizationID?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
    tag: {
      __typename: 'Tag';
      id: string;
      name?: string | null;
      color?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
};

export type DeleteTagPhraseMutationVariables = {
  input: DeleteTagPhraseInput;
  condition?: ModelTagPhraseConditionInput | null;
};

export type DeleteTagPhraseMutation = {
  deleteTagPhrase?: {
    __typename: 'TagPhrase';
    id: string;
    tagID: string;
    phraseID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    phrase: {
      __typename: 'Phrase';
      id: string;
      name?: string | null;
      abbreviation?: string | null;
      content?: string | null;
      phrasegroupID?: string | null;
      organizationID?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
    tag: {
      __typename: 'Tag';
      id: string;
      name?: string | null;
      color?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
};

export type CreateUserStatMutationVariables = {
  input: CreateUserStatInput;
  condition?: ModelUserStatConditionInput | null;
};

export type CreateUserStatMutation = {
  createUserStat?: {
    __typename: 'UserStat';
    id: string;
    userID: string;
    statID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
    stat: {
      __typename: 'Stat';
      id: string;
      type?: string | null;
      content?: string | null;
      bool?: boolean | null;
      count?: number | null;
      count_1?: number | null;
      count_2?: number | null;
      count_3?: number | null;
      count_4?: number | null;
      metadata?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
};

export type UpdateUserStatMutationVariables = {
  input: UpdateUserStatInput;
  condition?: ModelUserStatConditionInput | null;
};

export type UpdateUserStatMutation = {
  updateUserStat?: {
    __typename: 'UserStat';
    id: string;
    userID: string;
    statID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
    stat: {
      __typename: 'Stat';
      id: string;
      type?: string | null;
      content?: string | null;
      bool?: boolean | null;
      count?: number | null;
      count_1?: number | null;
      count_2?: number | null;
      count_3?: number | null;
      count_4?: number | null;
      metadata?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
};

export type DeleteUserStatMutationVariables = {
  input: DeleteUserStatInput;
  condition?: ModelUserStatConditionInput | null;
};

export type DeleteUserStatMutation = {
  deleteUserStat?: {
    __typename: 'UserStat';
    id: string;
    userID: string;
    statID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
    stat: {
      __typename: 'Stat';
      id: string;
      type?: string | null;
      content?: string | null;
      bool?: boolean | null;
      count?: number | null;
      count_1?: number | null;
      count_2?: number | null;
      count_3?: number | null;
      count_4?: number | null;
      metadata?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
};

export type GetPhraseQueryVariables = {
  id: string;
};

export type GetPhraseQuery = {
  getPhrase?: {
    __typename: 'Phrase';
    id: string;
    name?: string | null;
    abbreviation?: string | null;
    content?: string | null;
    phrasegroupID?: string | null;
    organizationID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    tags?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type ListPhrasesQueryVariables = {
  filter?: ModelPhraseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPhrasesQuery = {
  listPhrases?: {
    __typename: 'ModelPhraseConnection';
    items: Array<{
      __typename: 'Phrase';
      id: string;
      name?: string | null;
      abbreviation?: string | null;
      content?: string | null;
      phrasegroupID?: string | null;
      organizationID?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncPhrasesQueryVariables = {
  filter?: ModelPhraseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncPhrasesQuery = {
  syncPhrases?: {
    __typename: 'ModelPhraseConnection';
    items: Array<{
      __typename: 'Phrase';
      id: string;
      name?: string | null;
      abbreviation?: string | null;
      content?: string | null;
      phrasegroupID?: string | null;
      organizationID?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetTagQueryVariables = {
  id: string;
};

export type GetTagQuery = {
  getTag?: {
    __typename: 'Tag';
    id: string;
    name?: string | null;
    color?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    TagPhrases?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListTagsQuery = {
  listTags?: {
    __typename: 'ModelTagConnection';
    items: Array<{
      __typename: 'Tag';
      id: string;
      name?: string | null;
      color?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncTagsQueryVariables = {
  filter?: ModelTagFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncTagsQuery = {
  syncTags?: {
    __typename: 'ModelTagConnection';
    items: Array<{
      __typename: 'Tag';
      id: string;
      name?: string | null;
      color?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetOrganizationQueryVariables = {
  id: string;
};

export type GetOrganizationQuery = {
  getOrganization?: {
    __typename: 'Organization';
    id: string;
    name?: string | null;
    logo?: string | null;
    stripeCustomerId?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Tags?: {
      __typename: 'ModelTagConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelUserConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Owner?: {
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    PhraseGroups?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListOrganizationsQuery = {
  listOrganizations?: {
    __typename: 'ModelOrganizationConnection';
    items: Array<{
      __typename: 'Organization';
      id: string;
      name?: string | null;
      logo?: string | null;
      stripeCustomerId?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncOrganizationsQuery = {
  syncOrganizations?: {
    __typename: 'ModelOrganizationConnection';
    items: Array<{
      __typename: 'Organization';
      id: string;
      name?: string | null;
      logo?: string | null;
      stripeCustomerId?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: 'User';
    id: string;
    name?: string | null;
    logo?: string | null;
    isOwner?: boolean | null;
    permissions?: string | null;
    metadata?: string | null;
    disabled?: boolean | null;
    deleted?: boolean | null;
    loggedInDevices?: string | null;
    loggedInCount?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    UserStats?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: 'ModelUserConnection';
    items: Array<{
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUsersQuery = {
  syncUsers?: {
    __typename: 'ModelUserConnection';
    items: Array<{
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetStatQueryVariables = {
  id: string;
};

export type GetStatQuery = {
  getStat?: {
    __typename: 'Stat';
    id: string;
    type?: string | null;
    content?: string | null;
    bool?: boolean | null;
    count?: number | null;
    count_1?: number | null;
    count_2?: number | null;
    count_3?: number | null;
    count_4?: number | null;
    metadata?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    users?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type ListStatsQueryVariables = {
  filter?: ModelStatFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListStatsQuery = {
  listStats?: {
    __typename: 'ModelStatConnection';
    items: Array<{
      __typename: 'Stat';
      id: string;
      type?: string | null;
      content?: string | null;
      bool?: boolean | null;
      count?: number | null;
      count_1?: number | null;
      count_2?: number | null;
      count_3?: number | null;
      count_4?: number | null;
      metadata?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncStatsQueryVariables = {
  filter?: ModelStatFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncStatsQuery = {
  syncStats?: {
    __typename: 'ModelStatConnection';
    items: Array<{
      __typename: 'Stat';
      id: string;
      type?: string | null;
      content?: string | null;
      bool?: boolean | null;
      count?: number | null;
      count_1?: number | null;
      count_2?: number | null;
      count_3?: number | null;
      count_4?: number | null;
      metadata?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetPhraseGroupQueryVariables = {
  id: string;
};

export type GetPhraseGroupQuery = {
  getPhraseGroup?: {
    __typename: 'PhraseGroup';
    id: string;
    name?: string | null;
    organizationID?: string | null;
    phrasegroupID?: string | null;
    hidden?: boolean | null;
    locked?: boolean | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PhraseGroupsNested?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type ListPhraseGroupsQueryVariables = {
  filter?: ModelPhraseGroupFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPhraseGroupsQuery = {
  listPhraseGroups?: {
    __typename: 'ModelPhraseGroupConnection';
    items: Array<{
      __typename: 'PhraseGroup';
      id: string;
      name?: string | null;
      organizationID?: string | null;
      phrasegroupID?: string | null;
      hidden?: boolean | null;
      locked?: boolean | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncPhraseGroupsQueryVariables = {
  filter?: ModelPhraseGroupFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncPhraseGroupsQuery = {
  syncPhraseGroups?: {
    __typename: 'ModelPhraseGroupConnection';
    items: Array<{
      __typename: 'PhraseGroup';
      id: string;
      name?: string | null;
      organizationID?: string | null;
      phrasegroupID?: string | null;
      hidden?: boolean | null;
      locked?: boolean | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncTagPhrasesQueryVariables = {
  filter?: ModelTagPhraseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncTagPhrasesQuery = {
  syncTagPhrases?: {
    __typename: 'ModelTagPhraseConnection';
    items: Array<{
      __typename: 'TagPhrase';
      id: string;
      tagID: string;
      phraseID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUserStatsQueryVariables = {
  filter?: ModelUserStatFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUserStatsQuery = {
  syncUserStats?: {
    __typename: 'ModelUserStatConnection';
    items: Array<{
      __typename: 'UserStat';
      id: string;
      userID: string;
      statID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type OnCreatePhraseSubscription = {
  onCreatePhrase?: {
    __typename: 'Phrase';
    id: string;
    name?: string | null;
    abbreviation?: string | null;
    content?: string | null;
    phrasegroupID?: string | null;
    organizationID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    tags?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnUpdatePhraseSubscription = {
  onUpdatePhrase?: {
    __typename: 'Phrase';
    id: string;
    name?: string | null;
    abbreviation?: string | null;
    content?: string | null;
    phrasegroupID?: string | null;
    organizationID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    tags?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnDeletePhraseSubscription = {
  onDeletePhrase?: {
    __typename: 'Phrase';
    id: string;
    name?: string | null;
    abbreviation?: string | null;
    content?: string | null;
    phrasegroupID?: string | null;
    organizationID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    tags?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnCreateTagSubscription = {
  onCreateTag?: {
    __typename: 'Tag';
    id: string;
    name?: string | null;
    color?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    TagPhrases?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnUpdateTagSubscription = {
  onUpdateTag?: {
    __typename: 'Tag';
    id: string;
    name?: string | null;
    color?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    TagPhrases?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnDeleteTagSubscription = {
  onDeleteTag?: {
    __typename: 'Tag';
    id: string;
    name?: string | null;
    color?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    TagPhrases?: {
      __typename: 'ModelTagPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?: {
    __typename: 'Organization';
    id: string;
    name?: string | null;
    logo?: string | null;
    stripeCustomerId?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Tags?: {
      __typename: 'ModelTagConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelUserConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Owner?: {
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    PhraseGroups?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?: {
    __typename: 'Organization';
    id: string;
    name?: string | null;
    logo?: string | null;
    stripeCustomerId?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Tags?: {
      __typename: 'ModelTagConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelUserConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Owner?: {
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    PhraseGroups?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?: {
    __typename: 'Organization';
    id: string;
    name?: string | null;
    logo?: string | null;
    stripeCustomerId?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Tags?: {
      __typename: 'ModelTagConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelUserConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Owner?: {
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    PhraseGroups?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: 'User';
    id: string;
    name?: string | null;
    logo?: string | null;
    isOwner?: boolean | null;
    permissions?: string | null;
    metadata?: string | null;
    disabled?: boolean | null;
    deleted?: boolean | null;
    loggedInDevices?: string | null;
    loggedInCount?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    UserStats?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: 'User';
    id: string;
    name?: string | null;
    logo?: string | null;
    isOwner?: boolean | null;
    permissions?: string | null;
    metadata?: string | null;
    disabled?: boolean | null;
    deleted?: boolean | null;
    loggedInDevices?: string | null;
    loggedInCount?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    UserStats?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: 'User';
    id: string;
    name?: string | null;
    logo?: string | null;
    isOwner?: boolean | null;
    permissions?: string | null;
    metadata?: string | null;
    disabled?: boolean | null;
    deleted?: boolean | null;
    loggedInDevices?: string | null;
    loggedInCount?: string | null;
    organizationID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    UserStats?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnCreateStatSubscription = {
  onCreateStat?: {
    __typename: 'Stat';
    id: string;
    type?: string | null;
    content?: string | null;
    bool?: boolean | null;
    count?: number | null;
    count_1?: number | null;
    count_2?: number | null;
    count_3?: number | null;
    count_4?: number | null;
    metadata?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    users?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnUpdateStatSubscription = {
  onUpdateStat?: {
    __typename: 'Stat';
    id: string;
    type?: string | null;
    content?: string | null;
    bool?: boolean | null;
    count?: number | null;
    count_1?: number | null;
    count_2?: number | null;
    count_3?: number | null;
    count_4?: number | null;
    metadata?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    users?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnDeleteStatSubscription = {
  onDeleteStat?: {
    __typename: 'Stat';
    id: string;
    type?: string | null;
    content?: string | null;
    bool?: boolean | null;
    count?: number | null;
    count_1?: number | null;
    count_2?: number | null;
    count_3?: number | null;
    count_4?: number | null;
    metadata?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    users?: {
      __typename: 'ModelUserStatConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnCreatePhraseGroupSubscription = {
  onCreatePhraseGroup?: {
    __typename: 'PhraseGroup';
    id: string;
    name?: string | null;
    organizationID?: string | null;
    phrasegroupID?: string | null;
    hidden?: boolean | null;
    locked?: boolean | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PhraseGroupsNested?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnUpdatePhraseGroupSubscription = {
  onUpdatePhraseGroup?: {
    __typename: 'PhraseGroup';
    id: string;
    name?: string | null;
    organizationID?: string | null;
    phrasegroupID?: string | null;
    hidden?: boolean | null;
    locked?: boolean | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PhraseGroupsNested?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnDeletePhraseGroupSubscription = {
  onDeletePhraseGroup?: {
    __typename: 'PhraseGroup';
    id: string;
    name?: string | null;
    organizationID?: string | null;
    phrasegroupID?: string | null;
    hidden?: boolean | null;
    locked?: boolean | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    Phrases?: {
      __typename: 'ModelPhraseConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PhraseGroupsNested?: {
      __typename: 'ModelPhraseGroupConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnCreateTagPhraseSubscription = {
  onCreateTagPhrase?: {
    __typename: 'TagPhrase';
    id: string;
    tagID: string;
    phraseID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    phrase: {
      __typename: 'Phrase';
      id: string;
      name?: string | null;
      abbreviation?: string | null;
      content?: string | null;
      phrasegroupID?: string | null;
      organizationID?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
    tag: {
      __typename: 'Tag';
      id: string;
      name?: string | null;
      color?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
};

export type OnUpdateTagPhraseSubscription = {
  onUpdateTagPhrase?: {
    __typename: 'TagPhrase';
    id: string;
    tagID: string;
    phraseID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    phrase: {
      __typename: 'Phrase';
      id: string;
      name?: string | null;
      abbreviation?: string | null;
      content?: string | null;
      phrasegroupID?: string | null;
      organizationID?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
    tag: {
      __typename: 'Tag';
      id: string;
      name?: string | null;
      color?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
};

export type OnDeleteTagPhraseSubscription = {
  onDeleteTagPhrase?: {
    __typename: 'TagPhrase';
    id: string;
    tagID: string;
    phraseID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    phrase: {
      __typename: 'Phrase';
      id: string;
      name?: string | null;
      abbreviation?: string | null;
      content?: string | null;
      phrasegroupID?: string | null;
      organizationID?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
    tag: {
      __typename: 'Tag';
      id: string;
      name?: string | null;
      color?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
};

export type OnCreateUserStatSubscription = {
  onCreateUserStat?: {
    __typename: 'UserStat';
    id: string;
    userID: string;
    statID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
    stat: {
      __typename: 'Stat';
      id: string;
      type?: string | null;
      content?: string | null;
      bool?: boolean | null;
      count?: number | null;
      count_1?: number | null;
      count_2?: number | null;
      count_3?: number | null;
      count_4?: number | null;
      metadata?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
};

export type OnUpdateUserStatSubscription = {
  onUpdateUserStat?: {
    __typename: 'UserStat';
    id: string;
    userID: string;
    statID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
    stat: {
      __typename: 'Stat';
      id: string;
      type?: string | null;
      content?: string | null;
      bool?: boolean | null;
      count?: number | null;
      count_1?: number | null;
      count_2?: number | null;
      count_3?: number | null;
      count_4?: number | null;
      metadata?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
};

export type OnDeleteUserStatSubscription = {
  onDeleteUserStat?: {
    __typename: 'UserStat';
    id: string;
    userID: string;
    statID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: 'User';
      id: string;
      name?: string | null;
      logo?: string | null;
      isOwner?: boolean | null;
      permissions?: string | null;
      metadata?: string | null;
      disabled?: boolean | null;
      deleted?: boolean | null;
      loggedInDevices?: string | null;
      loggedInCount?: string | null;
      organizationID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
    stat: {
      __typename: 'Stat';
      id: string;
      type?: string | null;
      content?: string | null;
      bool?: boolean | null;
      count?: number | null;
      count_1?: number | null;
      count_2?: number | null;
      count_3?: number | null;
      count_4?: number | null;
      metadata?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
};
