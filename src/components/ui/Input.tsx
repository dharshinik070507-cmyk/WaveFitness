import React, { InputHTMLAttributes } from "react";
import { AlertCircle } from "lucide-react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = "", id, ...props }) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full">
      <label htmlFor={inputId} className="block font-wordmark text-xs font-bold uppercase tracking-button text-text-muted mb-1.5">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full min-h-[56px] px-4 rounded-input bg-surface-2 border text-text font-body text-base focus:outline-none transition-colors duration-hover ${
          error ? "border-error" : "border-line focus:border-blue"
        } ${className}`}
        {...props}
      />
      {error && (
        <div className="flex items-center gap-1 mt-1.5 text-xs text-error font-body">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
