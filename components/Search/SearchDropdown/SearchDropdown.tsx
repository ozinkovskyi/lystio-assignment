"use client";

import React from "react";
import { FilterType } from "../types";
import { LocationContent, CategoryContent, PriceContent } from "./index";
import Dropdown from "@/components/ui/Dropdown";

interface SearchDropdownProps {
  isOpen: boolean;
  top: number;
  left: number;
  activeField: FilterType;
  searchQuery?: string;
}

const SearchDropdown = ({
                          isOpen,
                          top,
                          left,
                          activeField,
                          searchQuery,
                        }: SearchDropdownProps) => {
  const renderContent = () => {
    switch (activeField) {
      case "location":
        return <LocationContent searchQuery={searchQuery || ""} />;
      case "category":
        return <CategoryContent />;
      case "price":
        return <PriceContent />;
      default:
        return null;
    }
  };

  return (
      <Dropdown isOpen={isOpen} top={top} left={left}>
        {renderContent()}
      </Dropdown>
  );
};

export default SearchDropdown;
