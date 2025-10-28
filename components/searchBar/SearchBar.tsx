"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearch } from "@/context/SearchContext";
import SearchField from "./SearchField";
import SearchButton from "./SearchButton";
import Dropdown from "./Dropdown";
import { FilterType, FieldPosition } from "./types";
import {
  searchFieldsConfig,
  searchBarStyles,
  searchButtonConfig,
} from "./index";

const SearchBar = () => {
  const { state, dispatch } = useSearch();
  const [dropdownPosition, setDropdownPosition] =
    useState<FieldPosition | null>(null);
  const [locationSearchQuery, setLocationSearchQuery] = useState("");

  useEffect(() => {
    console.log("locationSearchQuery changed:", locationSearchQuery);
  }, [locationSearchQuery]);

  const getDisplayValue = (fieldType: FilterType): string => {
    if (typeof window === "undefined") {
      // Return default placeholder during SSR
      switch (fieldType) {
        case "location":
          return "City District, Street, Postcode.";
        case "category":
          return "Select Category";
        case "price":
          return "Select Price Range";
        default:
          return "";
      }
    }

    switch (fieldType) {
      case "location":
        return state.location.length > 0
          ? `${state.location.length} location${state.location.length > 1 ? "s" : ""}`
          : "City District, Street, Postcode.";
      case "category":
        return state.category.length > 0
          ? `${state.category.length} categor${state.category.length > 1 ? "ies" : "y"}`
          : "Select Category";
      case "price":
        return state.priceRange[0] > 0 || state.priceRange[1] < 10000
          ? `€${state.priceRange[0].toLocaleString()} - €${state.priceRange[1].toLocaleString()}`
          : "Select Price Range";
      default:
        return "";
    }
  };

  const handleFieldClick = (
    type: FilterType,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (typeof window === "undefined") return;

    const newActiveField =
      state.activeField === type
        ? null
        : (type as "location" | "category" | "price");
    console.log("Field clicked:", type, "newActiveField:", newActiveField);

    if (!newActiveField) {
      console.log("Closing dropdown");
      setDropdownPosition(null);
      // Reset search query when closing location dropdown
      if (state.activeField === "location") {
        setLocationSearchQuery("");
      }
    } else if (event.currentTarget) {
      // Get position immediately for the new active field
      const rect = event.currentTarget.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom,
        left: rect.left,
        width: rect.width,
      });
    }

    dispatch({ type: "SET_ACTIVE_FIELD", payload: newActiveField });
  };

  const handlePositionChange = (
    position: FieldPosition,
    fieldType: FilterType
  ) => {
    console.log(
      "Position changed:",
      position,
      "for field:",
      fieldType,
      "activeField:",
      state.activeField
    );
    // Only update position if this field is currently active
    if (state.activeField === fieldType) {
      setDropdownPosition(position);
    }
  };

  const handleSearch = () => {
    console.log("Search clicked", state);
  };

  const isDropdownOpen = !!state.activeField && !!dropdownPosition;

  // Close dropdown when clicking outside
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const searchBarElement = document.querySelector("[data-search-bar]");
      const dropdownElement = document.querySelector("[data-dropdown]");

      if (
        searchBarElement &&
        !searchBarElement.contains(target) &&
        dropdownElement &&
        !dropdownElement.contains(target)
      ) {
        if (state.activeField) {
          if (state.activeField === "location") {
            setLocationSearchQuery("");
          }
          dispatch({ type: "SET_ACTIVE_FIELD", payload: null });
          setDropdownPosition(null);
        }
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, state.activeField, dispatch]);

  return (
    <>
      <div className={searchBarStyles.container} data-search-bar>
        <div
          className={`${searchBarStyles.wrapper} ${isDropdownOpen ? "shadow-[0_0_4px_1px_rgba(12,12,13,0.05)]" : ""}`}
        >
          {searchFieldsConfig.map((field, index) => {
            const isActive =
              state.activeField === null
                ? null
                : state.activeField === field.type;
            const displayValue = getDisplayValue(field.type);

            return (
              <SearchField
                key={field.type}
                type={field.type}
                label={field.label}
                placeholder={displayValue}
                onClick={(e) => handleFieldClick(field.type, e)}
                isMiddle={index === 1}
                isActive={isActive}
                onPositionChange={(position) =>
                  handlePositionChange(position, field.type)
                }
                searchQuery={
                  field.type === "location" ? locationSearchQuery : undefined
                }
                onSearchQueryChange={
                  field.type === "location" ? setLocationSearchQuery : undefined
                }
              />
            );
          })}
        </div>
        <div className="absolute right-[calc(50%-425px+8px)] top-1/2 -translate-y-1/2">
          <SearchButton
            label={searchButtonConfig.label}
            onClick={handleSearch}
          />
        </div>
      </div>
      {dropdownPosition && state.activeField && (
        <Dropdown
          isOpen={true}
          top={dropdownPosition.top}
          left={dropdownPosition.left}
          activeField={state.activeField}
          searchQuery={
            state.activeField === "location" ? locationSearchQuery : undefined
          }
        />
      )}
    </>
  );
};

export default SearchBar;
