import React from "react";

export interface BadgeProps {
  variant?: "red" | "dark" | "outline" | "green";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = "red", children }) => {
  let styles = "inline-flex items-center px-2.5 py-1 rounded-r-2 font-wordmark text-[10px] font-bold uppercase tracking-poster";

  if (variant === "red") {
    styles += " bg-red text-white";
  } else if (variant === "dark") {
    styles += " bg-surface-2 text-text border border-line";
  } else if (variant === "outline") {
    styles += " bg-transparent text-red-text border border-line";
  } else if (variant === "green") {
    styles += " bg-success/10 text-success border border-success/30";
  }

  return <span className={styles}>{children}</span>;
};
