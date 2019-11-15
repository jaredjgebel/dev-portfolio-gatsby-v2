module.exports = {
  siteMetadata: {
    title: "Jared Gebel, Full Stack Web Developer"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jared Gebel, Web Developer",
        short_name: "Jared's Dev Portfolio",
        start_url: "/",
        background_color: "#0D2620",
        theme_color: "#0D2620",
        display: "minimal-ui",
        icon: "src/images/favicon/favicon-16x16.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`
  ]
};
