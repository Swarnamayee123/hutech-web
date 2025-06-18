import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = ' Leading DevOps & Cloud Infrastructure Experts | US, UK, UAE',
  description = 'Expert DevOps services, cloud infrastructure, and SRE solutions. 24/7 monitoring, cost-effective pricing, and enterprise-grade solutions for US, UK, India, UAE & Australia.',
  keywords = 'DevOps services, Cloud Infrastructure, SRE, Kubernetes, Docker, AWS, Cloud Migration, CI/CD, Infrastructure as Code, Cloud Native, DevOps Consulting, Cloud Architecture',
  image = 'https://hutechsolutions.com/wp-content/uploads/2024/08/hutech-logo-1.png.webp',
  url = 'https://Hutechsolutions.com',
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hutech Solutions',
    description,
    url,
    logo: image,
    sameAs: [
      'https://www.facebook.com/HutechSolutions',
      'https://twitter.com/HutechSolutions',
      'https://www.instagram.com/HutechSolutions',
      'https://www.youtube.com/channel/HutechSolutions',
      'https://www.pinterest.com/HutechSolutions',
      'https://www.linkedin.com/company/HutechSolutions',

    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
    areaServed: ['US', 'UK', 'India', 'UAE', 'Australia'],
    offers: {
      '@type': 'Offer',
      description: 'DevOps and Cloud Infrastructure Services',
    },
  };

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph meta tags for Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Hutech Solutions" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Hutech Solutions" />
      <meta name="geo.region" content="US, UK, IN, AE, AU" />
      <meta name="geo.position" content="global" />

      {/* Mobile meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0891b2" />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <link rel="apple-touch-icon" href="/vite.svg" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect to important third-party domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEO;