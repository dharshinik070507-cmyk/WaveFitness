import React from "react";
import { gymData, faqList } from "@/content/gymData";

export const JsonLdSchema: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["HealthClub", "SportsActivityLocation", "LocalBusiness"],
    "name": gymData.name,
    "alternateName": [gymData.shortBrand, "Wave Fitness Tambaram"],
    "description": gymData.positioning,
    "url": "https://wavefitnesstambaram.in",
    "telephone": gymData.contact.phoneTel,
    "priceRange": "₹999 - ₹2499",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "06:00",
        "closes": "22:00"
      }
    ],
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
      "https://maps.app.goo.gl/w4fv65tambaram"
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
