import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getMetaTags, getSeoMetadata, getStructuredData } from "../seo/metadata.js";

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const metadata = getSeoMetadata(pathname);
    document.title = metadata.title;
    for (const [attribute, key, content] of getMetaTags(pathname)) {
      let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    }
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = metadata.canonical;
    let schema = document.getElementById("organisation-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "organisation-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(getStructuredData(pathname));
  }, [pathname]);
  return null;
}
