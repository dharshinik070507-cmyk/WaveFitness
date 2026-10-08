import React, { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  onSurface?: "ink" | "paper";
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ onSurface = "ink", className = "", children, ...props }) => {
  const bgClass = onSurface === "paper" ? "bg-paper-card border-line-paper text-text-paper" : "bg-surface-1 border-line text-text";
  return (
    <div
      className={`${bgClass} border rounded-card p-6 sm:p-8 transition-colors duration-hover ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
