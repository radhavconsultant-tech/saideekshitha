import { useEffect } from 'react';

export const SEOHead = ({ 
  title, 
  description, 
  keywords,
  canonicalUrl,
  pageType = 'website',
  serviceName = null,
  areaName = null
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl || window.location.href;

    // Add Open Graph tags
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:type': pageType,
      'og:url': canonicalUrl || window.location.href,
      'og:site_name': 'Sri Sai Deekshitha Ambulance Service',
      'og:locale': 'en_IN',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = content;
    });

    // Add Schema.org JSON-LD for Local Business
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "EmergencyService", "MedicalBusiness"],
      "name": "Sri Sai Deekshitha Ambulance Service",
      "description": "24/7 Emergency Ambulance Service in Hyderabad. ICU Ambulance, Ventilator Ambulance, Oxygen Ambulance, Dead Body Freezer Box services.",
      "url": "https://srisaideekshithaambulance.com",
      "telephone": ["+91-9666606910", "+91-9948386178"],
      "email": "contact@srisaideekshithaambulance.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "LB Nagar, Beside Global Hospital",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500074",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "17.3497",
        "longitude": "78.5481"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "priceRange": "₹₹",
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "availableService": [
        {
          "@type": "MedicalService",
          "name": "ICU Ambulance Service",
          "description": "Advanced ICU ambulance with life support equipment"
        },
        {
          "@type": "MedicalService",
          "name": "Ventilator Ambulance Service",
          "description": "Ambulance with ventilator support for critical patients"
        },
        {
          "@type": "MedicalService",
          "name": "Oxygen Ambulance Service",
          "description": "Ambulance with oxygen supply for patients"
        },
        {
          "@type": "MedicalService",
          "name": "Dead Body Freezer Box Service",
          "description": "Mortuary services and dead body transport"
        }
      ],
      "sameAs": []
    };

    // Add service-specific schema if applicable
    if (serviceName) {
      schemaData["@type"].push("Service");
      schemaData.serviceType = serviceName;
    }

    // Add area-specific schema if applicable
    if (areaName) {
      schemaData.areaServed = {
        "@type": "Place",
        "name": areaName + ", Hyderabad",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": areaName,
          "addressRegion": "Hyderabad",
          "addressCountry": "IN"
        }
      };
    }

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);

    // Cleanup
    return () => {
      const schema = document.querySelector('script[type="application/ld+json"]');
      if (schema) {
        schema.remove();
      }
    };
  }, [title, description, keywords, canonicalUrl, pageType, serviceName, areaName]);

  return null;
};

export default SEOHead;
