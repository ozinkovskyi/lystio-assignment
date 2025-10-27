"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { SearchIcon } from "@/app/assets/icons";

interface SearchButtonProps {
  label: string;
  onClick: () => void;
}

const SearchButton = ({ label, onClick }: SearchButtonProps) => {
  return (
    <Button
      variant="search"
      size="search"
      onClick={onClick}
      className="flex h-[48px] w-[98px] flex-shrink-0 items-center justify-center gap-2 whitespace-nowrap"
      style={{
        borderRadius: "var(--Corner-Full, 1000px)",
        color: "var(--WhiteColors-White100, #FFF)",
        fontFamily: "Plus Jakarta Sans",
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "150%",
        marginRight: "8px",
      }}
    >
      <SearchIcon />
      {label}
    </Button>
  );
};

export default SearchButton;
