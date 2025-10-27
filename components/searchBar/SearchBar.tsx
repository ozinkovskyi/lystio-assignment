"use client";

import React from "react";
import { useSearch } from "@/context/SearchContext";
import SearchField from "./SearchField";
import SearchButton from "./SearchButton";
import { FilterType } from "./types";
import { searchFieldsConfig, searchBarStyles, searchButtonConfig } from "./index";

const SearchBar = () => {
  const { state, dispatch } = useSearch();

  const handleFieldClick = (type: FilterType) => {
    
    const newActiveField = state.activeField === type ? null : type as "location" | "category" | "price";
    dispatch({ type: "SET_ACTIVE_FIELD", payload: newActiveField });
  };

  const handleSearch = () => {
    console.log("Search clicked", state);
  };

  
  return (
    <div className={searchBarStyles.container}>
      <div className={searchBarStyles.wrapper}>
        {searchFieldsConfig.map((field, index) => {
          const isActive = state.activeField === null ? null : state.activeField === field.type;

          return (
            <SearchField
              key={field.type}
              type={field.type}
              label={field.label}
              placeholder={field.placeholder}
              onClick={() => handleFieldClick(field.type)}
              isMiddle={index === 1}
              isActive={isActive}
            />
          );
        })}
        {/* TODO: TMP DISABLED */}
        {/* <SearchButton label={searchButtonConfig.label} onClick={handleSearch} /> */}
      </div>
    </div>
  );
};

export default SearchBar;
