import React, { createContext, useContext, useReducer } from "react";
// Context API
// Prepares the dataLayer
export const StateContext = createContext();

//  provide the Data layer and Wrap apps  
export const StateProvider = ({ reducer, initialState, children }) => (
  
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
  //it 'll be access the chaildren
);

// Pull and push information from the data layer by useStateValue hook
export const useStateValue = () => useContext(StateContext);
