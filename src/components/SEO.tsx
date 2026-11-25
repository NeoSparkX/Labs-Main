import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://neosparkx.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_OG_ALT = "NeoSparkX — Designing the Future of Intelligence";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogImageAlt?: string;
  type?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown>;
}

const toAbsoluteUrl = (img?: string): string => {
  if (!img) return DEFAULT_OG_IMAGE;
  if (img.startsWith("http://") || img.startsWith("https://")) return encodeURI(img);
  const cleanPath = img.startsWith("/") ? img : `/${img}`;
  return encodeURI(`${SITE_URL}${cleanPath}`);
};

export const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogImageAlt,
  type = "website",
  noIndex = false,
  schema,
}: SEOProps) => {
  const { pathname } = useLocation();
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;
  const resolvedOgImage = toAbsoluteUrl(ogImage);
  const resolvedOgAlt = ogImageAlt || (title.includes("NeoSparkX") ? title : `${title} | NeoSparkX`) || DEFAULT_OG_ALT;
  const schemaJson = schema ? JSON.stringify(schema) : "";

  useEffect(() => {
    // 1. Title
    const formattedTitle = title.includes("NeoSparkX") ? title : `${title} | NeoSparkX`;
    document.title = formattedTitle;

    // Helper to find or create meta tags
    const getOrCreateMeta = (nameAttr: "name" | "property", value: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${value}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, value);
        document.head.appendChild(element);
      }
      return element;
    };

    // 2. Meta description
    getOrCreateMeta("name", "description").setAttribute("content", description);

    // 3. Robots
    getOrCreateMeta("name", "robots").setAttribute(
      "content",
      noIndex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // 4. Keywords (optional)
    if (keywords) {
      getOrCreateMeta("name", "keywords").setAttribute("content", keywords);
    } else {
      document.querySelector('meta[name="keywords"]')?.remove();
    }

    // 5. OpenGraph
    getOrCreateMeta("property", "og:title").setAttribute("content", formattedTitle);
    getOrCreateMeta("property", "og:description").setAttribute("content", description);
    getOrCreateMeta("property", "og:url").setAttribute("content", canonicalUrl);
    getOrCreateMeta("property", "og:image").setAttribute("content", resolvedOgImage);
    getOrCreateMeta("property", "og:image:alt").setAttribute("content", resolvedOgAlt);
    getOrCreateMeta("property", "og:type").setAttribute("content", type);

    // 6. Twitter
    getOrCreateMeta("name", "twitter:card").setAttribute("content", "summary_large_image");
    getOrCreateMeta("name", "twitter:title").setAttribute("content", formattedTitle);
    getOrCreateMeta("name", "twitter:description").setAttribute("content", description);
    getOrCreateMeta("name", "twitter:image").setAttribute("content", resolvedOgImage);
    getOrCreateMeta("name", "twitter:image:alt").setAttribute("content", resolvedOgAlt);

    // 7. Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 8. Dynamic Route JSON-LD
    const dynamicSchemaId = "neosparkx-route-jsonld";
    const existingScript = document.getElementById(dynamicSchemaId);
    if (schemaJson) {
      const script = existingScript || document.createElement("script");
      script.id = dynamicSchemaId;
      script.setAttribute("type", "application/ld+json");
      script.textContent = schemaJson;
      if (!existingScript) {
        document.head.appendChild(script);
      }
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [title, description, keywords, resolvedOgImage, resolvedOgAlt, type, noIndex, canonicalUrl, schemaJson]);

  return null;
};

export default SEO;
