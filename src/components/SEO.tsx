import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  type?: string;
}

export const SEO = ({
  title,
  description,
  keywords,
  ogImage = "https://neosparkx.com/favicon.ico",
  type = "website",
}: SEOProps) => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://neosparkx.com${pathname === "/" ? "" : pathname}`;

  useEffect(() => {
    // 1. Title
    const formattedTitle = title.includes("NeoSparkX") ? title : `${title} | NeoSparkX`;
    document.title = formattedTitle;

    // Helper to find or create meta/link tags
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
    const descEl = getOrCreateMeta("name", "description");
    descEl.setAttribute("content", description);

    // 3. Keywords
    if (keywords) {
      const keywordsEl = getOrCreateMeta("name", "keywords");
      keywordsEl.setAttribute("content", keywords);
    } else {
      const keywordsEl = document.querySelector('meta[name="keywords"]');
      if (keywordsEl) keywordsEl.remove();
    }

    // 4. OpenGraph
    const ogTitle = getOrCreateMeta("property", "og:title");
    ogTitle.setAttribute("content", formattedTitle);

    const ogDesc = getOrCreateMeta("property", "og:description");
    ogDesc.setAttribute("content", description);

    const ogUrl = getOrCreateMeta("property", "og:url");
    ogUrl.setAttribute("content", canonicalUrl);

    const ogImg = getOrCreateMeta("property", "og:image");
    ogImg.setAttribute("content", ogImage);

    const ogType = getOrCreateMeta("property", "og:type");
    ogType.setAttribute("content", type);

    // 5. Twitter
    const twitterCard = getOrCreateMeta("name", "twitter:card");
    twitterCard.setAttribute("content", "summary_large_image");

    const twitterTitle = getOrCreateMeta("name", "twitter:title");
    twitterTitle.setAttribute("content", formattedTitle);

    const twitterDesc = getOrCreateMeta("name", "twitter:description");
    twitterDesc.setAttribute("content", description);

    const twitterImg = getOrCreateMeta("name", "twitter:image");
    twitterImg.setAttribute("content", ogImage);

    // 6. Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

  }, [title, description, keywords, ogImage, type, canonicalUrl]);

  return null;
};

export default SEO;
