import React from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Check } from "lucide-react";

export interface PlanCardProps {
  title: string;
  subtitle: string;
  price: number;
  currency?: string;
  period: string;
  perDayText: string;
  savingsText?: string;
  features: string[];
  isFeatured?: boolean;
  featuredTag?: string;
  onSelect: () => void;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  subtitle,
  price,
  currency = "₹",
  period,
  perDayText,
  savingsText,
  features,
  isFeatured = false,
  featuredTag = "MOST POPULAR",
  onSelect,
}) => {
  return (
    <div
      className={`relative bg-surface-1 p-6 sm:p-8 rounded-r-0 border transition-all flex flex-col justify-between ${
        isFeatured
          ? "border-line border-t-2 border-t-red shadow-hard lg:-translate-y-2"
          : "border-line hover:border-surface-3"
      }`}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-6">
          <Badge variant="red">{featuredTag}</Badge>
        </div>
      )}

      <div>
        <span className="font-wordmark text-[11px] font-bold text-text-muted uppercase tracking-poster block">
          {subtitle}
        </span>
        <h3 className="font-display text-2xl font-bold text-text uppercase mt-1">
          {title}
        </h3>

        {/* Poster Price Numerals */}
        <div className="mt-6 flex items-baseline font-display">
          <span className="text-2xl font-bold text-red self-start mt-2">{currency}</span>
          <span className={`text-price font-black tracking-tightest ${isFeatured ? "text-red" : "text-text"}`}>
            {price.toLocaleString("en-IN")}
          </span>
          <span className="text-xl font-bold text-text-muted ml-1">/-</span>
          <span className="font-body text-xs text-text-muted font-bold ml-2">{period}</span>
        </div>

        <div className="mt-1 flex items-center justify-between font-body text-xs">
          <span className="text-success font-bold">{perDayText}</span>
          {savingsText && (
            <span className="px-2 py-0.5 bg-success/10 text-success font-extrabold rounded-r-2">
              {savingsText}
            </span>
          )}
        </div>

        <hr className="my-6 border-line" />

        <ul className="space-y-3 font-body text-xs text-text-muted">
          {features.map((feat, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-red shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Button
          variant={isFeatured ? "primary" : "secondary"}
          onClick={onSelect}
          className="w-full"
        >
          {isFeatured ? "Claim Free Trial for 3-Month Plan" : "Select Plan"}
        </Button>
      </div>
    </div>
  );
};
