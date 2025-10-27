import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "search" | "draw";
  size?: "sm" | "md" | "lg" | "search" | "draw";
  children: ReactNode;
}
