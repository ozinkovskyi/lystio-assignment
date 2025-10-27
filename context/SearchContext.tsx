"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { SearchFiltersState } from "@/types";

interface SearchContextType {
  state: SearchFiltersState;
  dispatch: React.Dispatch<SearchAction>;
}

type SearchAction =
  | { type: "SET_ACTION_TYPE"; payload: "rent" | "buy" | "ai" }
  | { type: "SET_ACTIVE_FIELD"; payload: "location" | "category" | "price" | null }
  | { type: "SET_LOCATION"; payload: string[] }
  | { type: "SET_CATEGORY"; payload: number[] }
  | { type: "SET_PRICE_RANGE"; payload: [number, number] }
  | { type: "RESET_FILTERS" };

const initialState: SearchFiltersState = {
  actionType: "rent",
  activeField: null,
  location: [],
  category: [],
  priceRange: [0, 10000],
};

function searchReducer(
  state: SearchFiltersState,
  action: SearchAction
): SearchFiltersState {
  switch (action.type) {
    case "SET_ACTION_TYPE":
      return { ...state, actionType: action.payload };
    case "SET_ACTIVE_FIELD":
      return { ...state, activeField: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "RESET_FILTERS":
      return initialState;
    default:
      return state;
  }
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export default SearchProvider;
export { useSearch };
