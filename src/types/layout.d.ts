import * as React from 'react';
import {
  ReactElement,
  Dispatch,
  SetStateAction,
  HTMLAttributeAnchorTarget,
  ReactNode,
} from 'react';
import { User } from './user';
import { Stripe } from './stripe';
import { LibraryTree } from './interfaces';

/* Next & Layout Types */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Page<P = {}> = {
  getLayout?: (page: ReactElement) => ReactNode;
};

/* Breadcrumb Types */
export interface AppBreadcrumbProps {
  className?: string;
}

export interface Breadcrumb {
  labels?: string[];
  to?: string;
}

export interface BreadcrumbItem {
  label: string;
  to?: string;
  items?: BreadcrumbItem[];
}

/* Context Types */
export type LayoutState = {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
};

export type LayoutConfig = {
  ripple: boolean;
  inputStyle: string;
  menuMode: string;
  colorScheme: string;
  theme: string;
  scale: number;
};

export type RouteConfig = {
    userData: any;
    getOrganization: GetOrganization
    user: User
    subscription: string
    stripe: Stripe
  }
  export interface GetOrganization {
    id: string
    name: string
    logo: any
    users: string[]
    stripeCustomerId: string
    _version: number
    _deleted: any
    _lastChangedAt: number
    createdAt: string
    updatedAt: string
  }
  
export interface LayoutContextProps {
  layoutConfig: LayoutConfig;
  setLayoutConfig: Dispatch<SetStateAction<LayoutConfig>>;
  layoutState: LayoutState;
  setLayoutState: Dispatch<SetStateAction<LayoutState>>;
  onMenuToggle: () => void;
  showProfileSidebar: () => void;
}
export interface RouterContextProps{
  isLoggedIn:boolean,
  setIsLoggedIn:Dispatch<SetStateAction<boolean>>,
  user:RouteConfig,
  setUser:Dispatch<SetStateAction<RouteConfig>>
}

export interface LibraryContextProps{
  selectedNode: LibraryTree,
  setSelectedNode: Dispatch<SetStateAction<LibraryTree>>,
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>,
  OpenMenu: { [key: string]: boolean };
  setOpenMenu: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
  selectedRow: Phrase,
  setSelectedRow: Dispatch<SetStateAction<Phrase>>,
  selectedTagRow: Tag,
  setSelectedTagRow: Dispatch<SetStateAction<Tag>>,
  userLibraries: phraseGroups[],
  setUserLibraries: Dispatch<SetStateAction<phraseGroups[]>>,
  dsLibraries: phraseGroups[],
  setDsLibraries: Dispatch<SetStateAction<phraseGroups[]>>,
  tags: Tag[],
  phrases: Phrase[],
  setPhrases: Dispatch<SetStateAction<Phrase>>,
  clearSelectedRow: MouseEventHandler<HTMLElement>,
  toggleMenu:(menuKey: string)=>void;
  getLibraryPhrases: (id: string, libType: string) => Promise<void>;
  getLibraryNextPhrases: () => void;
  updateSelectedNode: (item: LibraryTree, libType: string) => void;
  updateSelectedRow: Dispatch<SetStateAction<Phrase>>,
  updateSelectedTagRow: Dispatch<SetStateAction<Tag>>,
  getLibraries: () => void;
  orgId: string;
  setOrgId: Dispatch<SetStateAction<string>>;
}
export interface MenuContextProps {
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
}

/* AppConfig Types */
export interface AppConfigProps {
  simple?: boolean;
}

/* AppTopbar Types */
export type NodeRef = React.MutableRefObject<ReactNode>;
export interface AppTopbarRef {
  menubutton?: HTMLButtonElement | null;
  topbarmenu?: HTMLDivElement | null;
  topbarmenubutton?: HTMLButtonElement | null;
}

/* AppMenu Types */
type CommandProps = {
  originalEvent: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
  // @ts-ignore
  item: MenuModelItem;
};

export interface MenuProps {
  model: MenuModel[];
}

export interface MenuModel {
  label: string;
  icon?: string;
  items?: MenuModel[];
  to?: string;
  url?: string;
  target?: HTMLAttributeAnchorTarget;
  seperator?: boolean;
}

export interface AppMenuItem extends MenuModel {
  items?: AppMenuItem[];
  badge?: 'UPDATED' | 'NEW';
  badgeClass?: string;
  class?: string;
  preventExact?: boolean;
  visible?: boolean;
  disabled?: boolean;
  replaceUrl?: boolean;
  command?: ({ originalEvent, item }: CommandProps) => void;
}

export interface AppMenuItemProps {
  item?: AppMenuItem;
  parentKey?: string;
  index?: number;
  root?: boolean;
  className?: string;
}
