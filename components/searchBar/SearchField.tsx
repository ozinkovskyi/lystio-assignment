"use client";

import React from "react";
import { SearchFieldProps } from "./types";

const SearchField = ({
  label,
  placeholder,
  onClick,
  isMiddle,
  isActive,
}: SearchFieldProps) => {
  const borderClasses = isMiddle
    ? "!border-l !border-r !border-[#eee7ff]"
    : "border-0";

  // If isActive is null, all buttons should be white
  const getBackgroundColor = () => {
    console.log(`${label} - isActive: ${isActive}`);
    if (isActive === null || isActive) {
      return "#FFFFFF";
    }
    return "#f7f7fd";
  };

  return (
    <div
      role="button"
      onClick={onClick}
      className={`flex flex-col h-full flex-1 whitespace-nowrap text-black flex-shrink-0 self-stretch py-[12px] px-[24px] ${borderClasses}`}
      style={{ backgroundColor: getBackgroundColor() }}
          >
        <span
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "12px",
            fontWeight: 500,

          }}
        >
          {label}
        </span>
        <span
          style={{
            color: "var(--Black, #0E0E0E)",
            fontFamily: "Plus Jakarta Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "160%",
          }}
        >
          {placeholder}
        </span>
      </div>
  );
};

export default SearchField;
