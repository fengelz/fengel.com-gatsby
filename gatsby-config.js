module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // baseUrl: "demo.wp-api.org/wp-json/",
        baseUrl: "wordpress.fengel.com",
       
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://source-url.com",
          replacementUrl: "https://replacement-url.com",
        },
        concurrentRequests: 10,
        excludedRoutes: ["/*/*/comments", "/yoast/**"],
        normalizer: function({ entities }) {
          return entities;
        },
      }
    }
  ]
}
