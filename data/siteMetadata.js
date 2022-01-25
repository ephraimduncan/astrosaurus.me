const siteMetadata = {
  title: 'Ephraim Atta-Duncan',
  author: 'Ephraim Atta-Duncan',
  headerTitle: 'Astrosaurus',
  description: 'A portfolio and blog for Ephraim Atta-Duncan created with Next.js and Tailwind.css',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://astrosaurus.me',
  siteRepo: 'https://github.com/dephraiim/astrosaurus.me',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ephraimduncan68@gmail.com',
  github: 'https://github.com/dephraiim',
  twitter: 'https://twitter.com/dephraiim',

  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
};

module.exports = siteMetadata;
