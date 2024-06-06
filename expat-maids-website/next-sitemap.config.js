module.exports = {
  siteUrl: "https://expatmaids.com/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // optional
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     "https://example.com/my-custom-sitemap-1.xml",
  //     "https://example.com/my-custom-sitemap-2.xml",
  //     "https://example.com/my-custom-sitemap-3.xml",
  //   ],
  // },
  additionalPaths: async (config) => {
    const result = [];

    // required value only
    result.push({
      loc: "/contact",
      changefreq: "daily",
      lastmod: new Date().toISOString(),
      priority: 0.7,
    });
    result.push({
      loc: "/thankyou",
      changefreq: "daily",
      lastmod: new Date().toISOString(),
    });

    return result;
  },
};
