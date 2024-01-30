import React, { useState, createContext } from 'react';
import {
  ChildContainerProps,
  RouteConfig,
  RouterContextProps,
} from '@app/types/index';

export const RouterContext = createContext({} as RouterContextProps);

export const RouterProvider = ({ children }: ChildContainerProps) => {
  const isUserLoggedIn = () => {
    const user = sessionStorage.getItem('user');
    return !!user;
  };
  const getUser = () => {
    if (isUserLoggedIn()) {
      const userData = sessionStorage.getItem('user');
      return JSON.parse(userData || '') as RouteConfig;
    }
    return null;
  };
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isUserLoggedIn());
  const [user, setUser] = useState<RouteConfig | null>(getUser());

  const value: RouterContextProps = {
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
  };

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};
