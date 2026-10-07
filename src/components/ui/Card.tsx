import React, { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`bg-surface-1 border border-line rounded-r-0 p-6 sm:p-8 transition-colors duration-hover hover:border-surface-3 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
