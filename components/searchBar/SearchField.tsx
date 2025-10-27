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
    if (typeof window === 'undefined') return;
    
    if (isActive && fieldRef.current && onPositionChange) {
      const rect = fieldRef.current.getBoundingClientRect();
      onPositionChange({
        top: rect.bottom,
        left: rect.left,
        width: rect.width,
      }, type);
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
      className={`flex flex-col h-full flex-1 whitespace-nowrap text-black flex-shrink-0 self-stretch py-[12px] px-[24px] cursor-pointer ${borderClasses}`}
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
            className="w-full bg-transparent border-none outline-none"
            style={{
              color: "var(--Black, #0E0E0E)",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "160%",
            }}
          />
        ) : (
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
        )}
      </div>
  );
};

export default SearchField;
