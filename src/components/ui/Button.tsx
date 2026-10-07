import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  disabled,
  children,
  ...props
}) => {
  let baseStyles = "inline-flex items-center justify-center font-wordmark uppercase tracking-poster font-bold transition-all duration-hover focus-visible:outline-2 focus-visible:outline-blue active:translate-y-[1px]";

  let sizeStyles = "min-h-[52px] px-6 py-3 text-xs rounded-r-1";
  if (size === "sm") sizeStyles = "min-h-[44px] px-4 py-2 text-[11px] rounded-r-1";
  if (size === "lg") sizeStyles = "min-h-[56px] px-8 py-4 text-sm rounded-r-1";

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles = "bg-red text-white hover:bg-red-hover active:bg-red-press disabled:opacity-50 disabled:pointer-events-none";
  } else if (variant === "secondary") {
    variantStyles = "bg-transparent border border-line text-text hover:bg-text hover:text-bg disabled:opacity-50";
  } else if (variant === "ghost") {
    variantStyles = "bg-transparent text-text underline underline-offset-4 decoration-line hover:decoration-red p-0 min-h-0 border-0";
  }

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
