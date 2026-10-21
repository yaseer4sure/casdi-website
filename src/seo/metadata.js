import { organisation } from "../data/organisation.js";

export const seoPages = {
  "/": {
    title: "CASDI | Climate Alaramma Sustainable Development Initiative",
    description: "CASDI (Climate Alaramma Sustainable Development Initiative) is a youth-led nonprofit advancing community climate action, resilience and sustainability in Nigeria.",
  },
  "/about": {
    title: "About CASDI | Our Mission, Vision & Organisation",
    description: "Learn about Climate Alaramma Sustainable Development Initiative (CASDI), our mission, community-led climate action and registered organisation in Zaria, Nigeria.",
  },
  "/about-history": {
    title: "Our Approach | CASDI Community-led Climate Action",
    description: "Discover how CASDI brings indigenous knowledge, local languages and community leadership together to advance climate resilience and environmental justice in Nigeria.",
  },
  "/work": {
    title: "Our Work | CASDI Climate Action & Community Resilience",
    description: "Explore CASDI's work in environmental sustainability, youth leadership, community resilience, inclusion, policy advocacy and grassroots support across Nigeria.",
  },
  "/work-programs": {
    title: "Our Programs | CASDI Sustainability & Youth Leadership",
    description: "Explore CASDI programs supporting grassroots leadership, environmental stewardship, climate education, sustainable livelihoods and inclusive communities in Nigeria.",
  },
  "/work-projects": {
    title: "Our Impact | CASDI Community Climate Action in Nigeria",
    description: "See how CASDI supports youth and women through climate action, leadership training, community dialogue, education and climate-resilient livelihoods in Nigeria.",
  },
  "/work-research": {
    title: "Pipeline Projects | CASDI Climate Resilience Initiatives",
    description: "Discover CASDI's planned initiatives in disaster preparedness, school environmental clubs, renewable energy, climate mobility and indigenous knowledge in Nigeria.",
  },
  "/projects": {
    title: "Our Team | CASDI Leadership & Community Advocates",
    description: "Meet the people behind Climate Alaramma Sustainable Development Initiative (CASDI), working together on climate resilience and sustainable development in Nigeria.",
  },
  "/get-involved": {
    title: "Get Involved | Volunteer, Partner & Support CASDI",
    description: "Volunteer with CASDI, partner with our team or support community-led climate education, environmental stewardship and youth leadership initiatives in Nigeria.",
  },
  "/resources": {
    title: "Resources & Media | CASDI Climate Action Stories",
    description: "Explore CASDI community photos, programs and climate action stories. Contact our team for learning resources on climate adaptation and community organising.",
  },
  "/contact": {
    title: "Contact CASDI | Zaria, Kaduna State, Nigeria",
    description: "Contact CASDI in Zaria, Kaduna State, Nigeria for partnerships, volunteering and media inquiries. Email admin@climateasdi.org. Registration number: 7017179.",
  },
};

const aliases = {
  "/resources-library": "/resources",
  "/resources-media": "/resources",
  "/impact": "/work-projects",
  "/involved-partner": "/get-involved",
  "/involved-support": "/get-involved",
};

export function getSeoMetadata(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const canonicalPath = aliases[path] || path;
  const page = seoPages[canonicalPath];
  return {
    title: page?.title || "Page Not Found | CASDI",
    description: page?.description || "This CASDI page could not be found. Explore our community-led climate action, programs and contact information.",
    canonical: new URL(canonicalPath, organisation.website).href,
    robots: page ? "index, follow, max-image-preview:large" : "noindex, follow",
  };
}

export const socialImage = `${organisation.website}/seo/community-tree-planting.jpg`;
export const socialImageAlt = "Young people planting a tree together through CASDI community climate action in Nigeria";

export function getStructuredData(pathname) {
  const page = getSeoMetadata(pathname);
  const orgId = `${organisation.website}/#organisation`;
  const websiteId = `${organisation.website}/#website`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": orgId,
        name: organisation.name,
        alternateName: "CASDI",
        url: `${organisation.website}/`,
        description: seoPages["/"].description,
        logo: `${organisation.website}/seo/casdi-logo.png`,
        email: organisation.email,
        identifier: { "@type": "PropertyValue", name: "Registration number", value: organisation.registrationNumber },
        address: {
          "@type": "PostalAddress",
          streetAddress: "No 3, Sheikh Jafar Close, Dogarawa New Extension Sabon Gari",
          addressLocality: "Zaria",
          addressRegion: "Kaduna State",
          addressCountry: "NG",
        },
        areaServed: { "@type": "Country", name: "Nigeria" },
        sameAs: organisation.socials.filter((social) => !social.url.includes("/share/")).map((social) => social.url),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${organisation.website}/`,
        name: "CASDI",
        alternateName: organisation.name,
        inLanguage: "en",
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": `${page.canonical}#webpage`,
        url: page.canonical,
        name: page.title,
        description: page.description,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
      },
    ],
  };
}

export function getMetaTags(pathname) {
  const page = getSeoMetadata(pathname);
  return [
    ["name", "description", page.description],
    ["name", "robots", page.robots],
    ["name", "author", organisation.name],
    ["property", "og:type", "website"],
    ["property", "og:site_name", "CASDI"],
    ["property", "og:locale", "en_NG"],
    ["property", "og:title", page.title],
    ["property", "og:description", page.description],
    ["property", "og:url", page.canonical],
    ["property", "og:image", socialImage],
    ["property", "og:image:alt", socialImageAlt],
    ["property", "og:image:type", "image/jpeg"],
    ["property", "og:image:width", "1024"],
    ["property", "og:image:height", "682"],
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:site", "@climate_asdi"],
    ["name", "twitter:title", page.title],
    ["name", "twitter:description", page.description],
    ["name", "twitter:image", socialImage],
    ["name", "twitter:image:alt", socialImageAlt],
  ];
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

export function renderSeoHead(pathname) {
  const page = getSeoMetadata(pathname);
  const tags = getMetaTags(pathname).map(([attribute, key, content]) => `    <meta ${attribute}="${key}" content="${escapeHtml(content)}" />`);
  return [
    `    <title>${escapeHtml(page.title)}</title>`,
    `    <link rel="canonical" href="${escapeHtml(page.canonical)}" />`,
    ...tags,
    `    <script id="organisation-schema" type="application/ld+json">${JSON.stringify(getStructuredData(pathname)).replace(/</g, "\\u003c")}</script>`,
  ].join("\n");
}
