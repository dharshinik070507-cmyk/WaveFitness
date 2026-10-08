import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg" | "header";
  onSurface?: "ink" | "paper";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  onSurface = "ink",
  className = "",
  disabled,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-display uppercase tracking-[0.02em] font-bold text-[clamp(0.875rem,1vw,1.25rem)] whitespace-nowrap shrink-0 w-fit rounded-pill transition-all duration-hover focus-visible:outline-2 focus-visible:outline-blue active:translate-y-[1px] select-none";

  const sizeStyles =
    size === "header"
      ? "h-[44px] min-h-[44px] px-[1.25rem]"
      : "h-[clamp(52px,3.9vw,72px)] min-h-[52px] px-[1.5rem] sm:px-[2.25rem]";

  let variantStyles = "";
  if (onSurface === "paper") {
    if (variant === "primary") {
      variantStyles =
        "bg-ink text-white hover:opacity-90 active:bg-black disabled:opacity-50 disabled:pointer-events-none";
    } else if (variant === "secondary") {
      variantStyles =
        "bg-transparent border border-line text-text hover:bg-ink hover:text-white disabled:opacity-50";
    } else if (variant === "ghost") {
      variantStyles =
        "bg-transparent text-text underline underline-offset-4 decoration-line p-0 min-h-0 h-auto border-0";
    }
  } else {
    if (variant === "primary") {
      variantStyles =
        "bg-red text-white hover:bg-red-hover active:bg-red-press disabled:opacity-50 disabled:pointer-events-none";
    } else if (variant === "secondary") {
      variantStyles =
        "bg-transparent border border-line text-text hover:bg-surface-2 disabled:opacity-50";
    } else if (variant === "ghost") {
      variantStyles =
        "bg-transparent text-text underline underline-offset-4 decoration-line hover:decoration-blue p-0 min-h-0 h-auto border-0";
    }
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
