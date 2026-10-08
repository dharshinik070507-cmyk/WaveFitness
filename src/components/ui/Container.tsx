import React, { HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`max-w-[1600px] mx-auto px-[clamp(1.25rem,3vw,3.75rem)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
