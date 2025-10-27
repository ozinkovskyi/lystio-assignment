"use client";

import React from "react";

interface DropdownProps {
  isOpen: boolean;
  top: number;
  left: number;
}

const Dropdown = ({ isOpen, top, left }: DropdownProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed flex w-[300px] h-[490px] flex-col items-start flex-shrink-0 rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] z-50"
      style={{
        top: `${top + 8}px`,
        left: `${left}px`,
        padding: "0",
      }}
    >
      {/* Dropdown content will go here */}
      <div className="w-full p-4">Content placeholder</div>
    </div>
  );
};

export default Dropdown;
