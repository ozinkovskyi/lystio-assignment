"use client";

import React from "react";
import { FilterType } from "./types";
import {
  LocationContent,
  CategoryContent,
  PriceContent,
} from "./dropdowns";

interface DropdownProps {
  isOpen: boolean;
  top: number;
  left: number;
  activeField: FilterType;
  searchQuery?: string;
}

const Dropdown = ({ isOpen, top, left, activeField, searchQuery }: DropdownProps) => {
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
      className="fixed flex w-[300px] h-[490px] flex-col items-start flex-shrink-0 rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] z-50 overflow-hidden"
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
