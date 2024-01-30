import React, { useState, createContext, useEffect } from 'react';
import {
  ChildContainerProps,
  LibraryContextProps,
  LibraryTree,
  Phrase,
  Tag,
  phraseGroups,
} from '@app/types/index';

import { getAllTags } from '@server/functions/functions';

export const LibraryContext = createContext({} as LibraryContextProps);

export const LibraryProvider = ({ children }: ChildContainerProps) => {
  const [selectedNode, setSelectedNode] = useState<LibraryTree>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [OpenMenu, setOpenMenu] = useState<{ [key: string]: boolean }>({
    myLibrary: false,
    dotScribeLibrary: false,
    sharedWithMe: false,
    communityPhrases: false,
    myAnalytics: false,
    helpCenter: false,
  });
  const [selectedRow, setSelectedRow] = useState<Phrase>(null);
  const [userLibraries, setUserLibraries] = useState<phraseGroups[]>(null);
  const [dsLibraries, setDsLibraries] = useState<phraseGroups[]>(null);
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTagRow, setSelectedTagRow] = useState<Tag>(null);
  const [orgId, setOrgId] = useState<string>('');
  const clearSelectedRow = () => {
    setSelectedRow(null);
  };

  const toggleMenu = (menuKey: string) => {
    setOpenMenu({
      ...OpenMenu,
      [menuKey]: !OpenMenu[menuKey],
    });
  };

  const updateSelectedNode = (item: LibraryTree) => {
    console.log(item, 'data');
    setSelectedNode(item);
  };

  const updateSelectedRow = (item: Phrase) => {
    setSelectedRow(item);
  };

  const updateSelectedTagRow = (item: Tag) => {
    setSelectedTagRow(item);
  };

  const getTags = async () => {
    const data = await getAllTags();
    setTags(data);
  };

  useEffect(() => {
    getTags();
  }, []);

  const value: LibraryContextProps = {
    orgId,
    setOrgId,
    selectedNode,
    setSelectedNode,
    loading,
    setLoading,
    OpenMenu,
    setOpenMenu,
    toggleMenu,
    selectedRow,
    setSelectedRow,
    selectedTagRow,
    setSelectedTagRow,
    userLibraries,
    setUserLibraries,
    dsLibraries,
    setDsLibraries,
    tags,
    phrases,
    setPhrases,
    clearSelectedRow,
    updateSelectedNode,
    updateSelectedRow,
    updateSelectedTagRow,
  };

  return (
    <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
  );
};
