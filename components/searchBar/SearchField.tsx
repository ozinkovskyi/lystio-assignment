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
}: SearchFieldProps) => {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && fieldRef.current && onPositionChange) {
      const rect = fieldRef.current.getBoundingClientRect();
      onPositionChange({
        top: rect.bottom,
        left: rect.left,
        width: rect.width,
      }, type);
    }
  }, [isActive, onPositionChange, type]);
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
      onClick={onClick}
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
