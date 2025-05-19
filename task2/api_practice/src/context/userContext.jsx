import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";
const initials = {
  users: [],
  loading: false,
  error: null,
  searchTerm: "",
};

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initials);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
