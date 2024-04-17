"use client";
import React, { createContext } from "react";
import userStore from "./stores/UserStore";
// import { Provider } from "mobx-react";

export const StoreContext = createContext(userStore);

export const StoreWrapper = ({ children }) => {
  return (
    <StoreContext.Provider value={userStore}>{children}</StoreContext.Provider>
  );
};
