import React from "react";
import { gymData, faqList } from "@/content/gymData";

export const JsonLdSchema: React.FC = () => {
  const priceRangeStr = `₹${gymData.pricing.monthly.amount} - ₹${gymData.pricing.quarterly.amount}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["HealthClub", "SportsActivityLocation", "LocalBusiness"],
    "name": gymData.name,
    "alternateName": [gymData.shortBrand, "Wave Fitness Tambaram"],
    "description": gymData.positioning,
    "url": "https://wavefitnesstambaram.in",
    "logo": "https://wavefitnesstambaram.in/brand/logo-wf-clean.png",
    "image": "https://wavefitnesstambaram.in/brand/logo-wf-clean.png",
    "telephone": gymData.contact.phoneTel,
    "priceRange": priceRangeStr,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${gymData.address.line1}, ${gymData.address.line2}`,
      "addressLocality": gymData.address.area,
      "addressRegion": gymData.address.state,
      "postalCode": gymData.address.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": gymData.coordinates.lat,
      "longitude": gymData.coordinates.lng
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": gymData.rating.stars,
      "reviewCount": gymData.rating.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      gymData.social.instagram.url,
      gymData.social.youtube.url,
      gymData.mapsUrl
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
