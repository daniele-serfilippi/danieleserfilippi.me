const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Daniele Serfilippi',
    description:
      'Daniele Serfilippi is a Senior Software Engineer & Architect with 15+ years of experience in designing and building enterprise level applications',
    siteUrl: 'https://danieleserfilippi.me',
    image: '/og.png', // Path to your image in the 'static' folder
    twitterUsername: '@DSerfilippi',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'DanieleSerfilippi',
        short_name: 'DanieleSerfilippi',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-images
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: config.colors.yellow },
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
            resolve: 'gatsby-remark-code-titles',
          }, // IMPORTANT: this must be ahead of other plugins that use code blocks
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-JFKCEXP24F'],
      },
    },
  ],
};
