"use client";

import React from "react";

interface SearchButtonProps {
  label: string;
  onClick: () => void;
}

const SearchButton = ({ label, onClick }: SearchButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="h-[100%] flex-1 rounded-full border border-white bg-white whitespace-nowrap text-black transition-all"
      style={{
        fontFamily: "var(--font-plus-jakarta)",
        fontSize: "14px",
        lineHeight: "22.4px",
        fontWeight: 500,
        padding: "4px 12px",
        boxShadow: "0 7px 29.9px 0 rgba(0, 0, 0, 0.10)",
      }}
    >
      {label}
    </button>
  );
};

export default SearchButton;
