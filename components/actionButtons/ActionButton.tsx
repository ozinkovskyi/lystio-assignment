"use client";

import React from "react";
import { ActionButtonProps } from "./types";

const ActionButton = ({ label, isActive, onClick, children }: ActionButtonProps) => {
  const getButtonStyle = () => {
    if (isActive) {
      return "bg-white text-black border border-white rounded-full transition-all cursor-pointer";
    } else {
      return "bg-transparent text-black border-0 rounded-full cursor-pointer";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`h-[30px] w-auto ${getButtonStyle()}`}
      style={{
        fontFamily: "var(--font-plus-jakarta)",
        fontSize: "14px",
        lineHeight: "22.4px",
        fontWeight: 500,
        padding: "4px 12px",
        boxShadow: isActive ? "0 7px 29.9px 0 rgba(0, 0, 0, 0.10)" : "none",
      }}
    >
      {label}
      {children}
    </button>
  );
};

export default ActionButton;
