const siteMetadata = {
  title: 'Ephraim Atta-Duncan',
  author: 'Ephraim Atta-Duncan',
  headerTitle: 'Astrosaurus',
  description: 'Ephraim Atta-Duncan, Software Developer in Ghana. Technical Writer in Ghana',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://astrosaurus.me',
  siteRepo: 'https://github.com/dephraiim/astrosaurus.me',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpeg',
  socialBanner: '/static/images/card.png',
  email: 'ephraimduncan68@gmail.com',
  github: 'https://github.com/dephraiim',
  twitter: 'https://twitter.com/dephraiim',

  locale: 'en-US',
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  comment: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      lang: 'en',
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
