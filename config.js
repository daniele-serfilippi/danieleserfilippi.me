const config = {
  siteMetadata: {
    title: 'Daniele Serfilippi',
    description:
      'Daniele Serfilippi is a Senior Software Engineer & Architect with 15+ years of experience in designing and building enterprise level applications',
    siteUrl: 'https://danieleserfilippi.me',
    image: '/og.png', // Path to your image in the 'public' folder
    twitterUsername: '@DSerfilippi',
  },

  email: 'hi@danieleserfilippi.me',

  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/daniele-serfilippi',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/daniele-serfilippi',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/daniele.serfilippi',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/DSerfilippi',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/ser.daniele',
    },
  ],

  navLinks: [],

  colors: {
    yellow: '#f7df1e',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  scrollRevealConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
  // plugins: [
  //   `gatsby-plugin-react-helmet`,
  //   `gatsby-plugin-styled-components`,
  //   `gatsby-plugin-image`,
  //   `gatsby-plugin-sharp`,
  //   `gatsby-transformer-sharp`,
  //   `gatsby-plugin-sitemap`,
  //   `gatsby-plugin-robots-txt`,
  //   {
  //     resolve: `gatsby-plugin-manifest`,
  //     options: {
  //       name: 'DanieleSerfilippi',
  //       short_name: 'DanieleSerfilippi',
  //       start_url: '/',
  //       background_color: config.colors.darkNavy,
  //       theme_color: config.colors.navy,
  //       display: 'minimal-ui',
  //       icon: 'src/images/logo.png',
  //     },
  //   },
  //   `gatsby-plugin-offline`,
  //   {
  //     resolve: `gatsby-source-filesystem`,
  //     options: {
  //       name: `images`,
  //       path: `${__dirname}/src/images`,
  //     },
  //   },
  //   {
  //     resolve: `gatsby-transformer-remark`,
  //     options: {
  //       plugins: [
  //         {
  //           // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
  //           resolve: 'gatsby-remark-external-links',
  //           options: {
  //             target: '_blank',
  //             rel: 'nofollow noopener noreferrer',
  //           },
  //         },
  //         {
  //           // https://www.gatsbyjs.org/packages/gatsby-remark-images
  //           resolve: 'gatsby-remark-images',
  //           options: {
  //             maxWidth: 700,
  //             linkImagesToOriginal: true,
  //             quality: 90,
  //             tracedSVG: { color: config.colors.yellow },
  //           },
  //         },
  //         {
  //           // https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
  //           resolve: 'gatsby-remark-code-titles',
  //         }, // IMPORTANT: this must be ahead of other plugins that use code blocks
  //       ],
  //     },
  //   },
  //   {
  //     resolve: `gatsby-plugin-google-gtag`,
  //     options: {
  //       trackingIds: ['G-JFKCEXP24F'],
  //     },
  //   },
  // ],
};

export { config };
