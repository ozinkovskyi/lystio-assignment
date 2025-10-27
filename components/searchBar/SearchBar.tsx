"use client";

import React, { useState } from "react";
import { useSearch } from "@/context/SearchContext";
import SearchField from "./SearchField";
import SearchButton from "./SearchButton";
import Dropdown from "./Dropdown";
import { FilterType, FieldPosition } from "./types";
import { searchFieldsConfig, searchBarStyles, searchButtonConfig } from "./index";

const SearchBar = () => {
  const { state, dispatch } = useSearch();
  const [dropdownPosition, setDropdownPosition] = useState<FieldPosition | null>(null);

  const handleFieldClick = (type: FilterType) => {
    const newActiveField = state.activeField === type ? null : type as "location" | "category" | "price";
    console.log("Field clicked:", type, "newActiveField:", newActiveField);
    dispatch({ type: "SET_ACTIVE_FIELD", payload: newActiveField });
    
    if (!newActiveField) {
      console.log("Closing dropdown");
      setDropdownPosition(null);
    }
  };

  const handlePositionChange = (position: FieldPosition, fieldType: FilterType) => {
    console.log("Position changed:", position, "for field:", fieldType, "activeField:", state.activeField);
    // Only update position if this field is currently active
    if (state.activeField === fieldType) {
      setDropdownPosition(position);
    }
  };

  const handleSearch = () => {
    console.log("Search clicked", state);
  };

  const isDropdownOpen = !!state.activeField && !!dropdownPosition;

  return (
    <>
      <div className={searchBarStyles.container}>
        <div className={`${searchBarStyles.wrapper} ${isDropdownOpen ? 'shadow-[0_0_4px_1px_rgba(12,12,13,0.05)]' : ''}`}>
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
                onPositionChange={(position) => handlePositionChange(position, field.type)}
              />
            );
          })}
          <SearchButton label={searchButtonConfig.label} onClick={handleSearch} />
        </div>
      </div>
      {dropdownPosition && state.activeField && (
        <Dropdown
          isOpen={true}
          top={dropdownPosition.top}
          left={dropdownPosition.left}
        />
      )}
    </>
  );
};

export default SearchBar;
