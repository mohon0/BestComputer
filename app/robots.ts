import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const sitemap = "https://www.training.oylkka.com/sitemap.xml";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/about", "/contact", "/course"],
        disallow: ["/admin", "/private/"],
      },
    ],
    sitemap,
    host: "www.training.oylkka.com",
  };
}
