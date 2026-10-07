import React, { HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
