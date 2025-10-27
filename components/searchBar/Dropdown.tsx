"use client";

import React from "react";
import { FilterType } from "./types";
import { LocationContent, CategoryContent, PriceContent } from "./dropdowns";

interface DropdownProps {
  isOpen: boolean;
  top: number;
  left: number;
  activeField: FilterType;
  searchQuery?: string;
}

const Dropdown = ({
  isOpen,
  top,
  left,
  activeField,
  searchQuery,
}: DropdownProps) => {
  if (!isOpen) return null;

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
    <div
      data-dropdown
      className="fixed z-50 flex h-[490px] w-[300px] flex-shrink-0 flex-col items-start overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
      style={{
        top: `${top + 8}px`,
        left: `${left}px`,
      }}
    >
      {renderContent()}
    </div>
  );
};

export default Dropdown;
