import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Block all crawlers by default
      { userAgent: "*", disallow: "/" },

      // Google
      { userAgent: "Googlebot", disallow: "/" },
      { userAgent: "Googlebot-Image", disallow: "/" },
      { userAgent: "Googlebot-News", disallow: "/" },
      { userAgent: "Googlebot-Video", disallow: "/" },
      { userAgent: "AdsBot-Google", disallow: "/" },
      { userAgent: "Mediapartners-Google", disallow: "/" },

      // Bing / Microsoft
      { userAgent: "Bingbot", disallow: "/" },
      { userAgent: "MSNBot", disallow: "/" },
      { userAgent: "AdIdxBot", disallow: "/" },

      // Yahoo
      { userAgent: "Slurp", disallow: "/" },

      // DuckDuckGo
      { userAgent: "DuckDuckBot", disallow: "/" },

      // Baidu
      { userAgent: "Baiduspider", disallow: "/" },

      // Yandex
      { userAgent: "Yandex", disallow: "/" },

      // Sogou
      { userAgent: "Sogou", disallow: "/" },

      // Exalead
      { userAgent: "Exabot", disallow: "/" },

      // Seznam
      { userAgent: "SeznamBot", disallow: "/" },

      // Ahrefs
      { userAgent: "AhrefsBot", disallow: "/" },

      // Semrush
      { userAgent: "SemrushBot", disallow: "/" },

      // MJ12
      { userAgent: "MJ12bot", disallow: "/" },

      // DotBot
      { userAgent: "DotBot", disallow: "/" },

      // Petal Search
      { userAgent: "PetalBot", disallow: "/" },

      // Coccoc
      { userAgent: "CoccocBot", disallow: "/" },

      // Apple
      { userAgent: "Applebot", disallow: "/" },

      // AI Crawlers
      // OpenAI
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ChatGPT-User", disallow: "/" },

      // Google AI
      { userAgent: "Google-Extended", disallow: "/" },

      // Anthropic
      { userAgent: "ClaudeBot", disallow: "/" },

      // Perplexity
      { userAgent: "PerplexityBot", disallow: "/" },
      { userAgent: "Perplexity-User", disallow: "/" },

      // Common Crawl
      { userAgent: "CCBot", disallow: "/" },

      // Amazon
      { userAgent: "Amazonbot", disallow: "/" },

      // ByteDance
      { userAgent: "Bytespider", disallow: "/" },

      // Meta
      { userAgent: "FacebookBot", disallow: "/" },

      // Apple AI
      { userAgent: "Applebot-Extended", disallow: "/" },

      // OAI Search
      { userAgent: "OAI-SearchBot", disallow: "/" },

      // You.com
      { userAgent: "YouBot", disallow: "/" },

      // Neeva (legacy)
      { userAgent: "NeevaBot", disallow: "/" },

      // Images
      { userAgent: "ImagesiftBot", disallow: "/" },
    ],
  };
}