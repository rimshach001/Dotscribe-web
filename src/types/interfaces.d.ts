export interface Phrase {
  _version: number
  id: string,
  name: string,
  abbreviation: string,
  content: string,
  phrase?: string,
  phraseGroup: {
    __typename: string,
    id: string
  },
  phrasegroupID?: string,
  tags: Tag[],
}

export interface Tag {
  color: {
    __typename: string,
    hex: string
  },
  __typename: string,
  id: string,
  name: string
}

export interface LibraryTree {
  key: string,
  label: string,
  data: string,
  icon: string,
  children?: LibraryDir[]
}

export interface phraseGroups {
  hidden: boolean,
  id: string,
  _version: number,
  name: string,
  phraseGroup: null,
  phrasegroupID: string,
  phraseGroupsNested: phraseGroups[]
  PhraseGroupsNested: {
    items: phraseGroups[]
  }
}