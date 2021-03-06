module.exports = {
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
};
