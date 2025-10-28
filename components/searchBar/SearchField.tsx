"use client";

import React, { useRef, useEffect } from "react";
import { SearchFieldProps } from "./types";

const SearchField = ({
  type,
  label,
  placeholder,
  onClick,
  isMiddle,
  isActive,
  onPositionChange,
  searchQuery = "",
  onSearchQueryChange,
}: SearchFieldProps) => {
  const fieldRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isActive && fieldRef.current && onPositionChange) {
      const rect = fieldRef.current.getBoundingClientRect();
      onPositionChange(
        {
          top: rect.bottom,
          left: rect.left,
          width: rect.width,
        },
        type
      );
    }
  }, [isActive, onPositionChange, type]);

  // Auto-focus input when location field becomes active
  useEffect(() => {
    if (type === "location" && isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [type, isActive]);
  const borderClasses = isMiddle
    ? "!border-l !border-r !border-[#eee7ff]"
    : "border-0";

  // If isActive is null, all buttons should be white
  const getBackgroundColor = () => {
    if (isActive === null || isActive) {
      return "#FFFFFF";
    }
    return "#f7f7fd";
  };

  return (
    <div
      ref={fieldRef}
      data-field-type={type}
      role="button"
      onClick={(e) => onClick && onClick(e)}
      className={`flex h-full min-w-0 flex-1 shrink cursor-pointer flex-col self-stretch px-[24px] py-[12px] whitespace-nowrap text-black ${borderClasses}`}
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
      {type === "location" && isActive ? (
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => {
            console.log("SearchField onChange:", e.target.value);
            onSearchQueryChange && onSearchQueryChange(e.target.value);
          }}
          onClick={(e) => e.stopPropagation()}
          className="w-full border-none bg-transparent outline-none text-black-shade"
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "160%",
          }}
        />
      ) : (
        <span
          className="text-black-shade"
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "160%",
          }}
        >
          {placeholder}
        </span>
      )}
    </div>
  );
};

export default SearchField;
