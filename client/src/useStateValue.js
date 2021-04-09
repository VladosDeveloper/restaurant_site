import React, { useReducer, useContext, createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ reducer, initialState, children }) => {
  return (
    <BasketContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </BasketContext.Provider>
  );
};

export const useStateValue = () => useContext(BasketContext);
