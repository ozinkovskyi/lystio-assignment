import React from "react";
import { ButtonProps } from "./types";

const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "rounded-lg font-medium transition-colors focus:outline-none cursor-pointer";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    search: "bg-[#A540F3] transition-all cursor-pointer rounded-full",
    draw: "border border-[#EEE7FF] bg-white flex-1 rounded-xl shadow-[0_11px_35.2px_0_rgba(0,0,0,0.06)] text-black font-medium",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    search: "",
    draw: "w-full h-[48px] p-[var(--sds-size-space-200)]",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
