const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'White Clover Farm',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap', type:"text/css" }]
    // < link rel = "apple-touch-icon" sizes = "180x180" href = "/apple-touch-icon.png" >
    // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    //   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    //     <link rel="manifest" href="/site.webmanifest">
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Philosophy',
        link: '/philosophy/'
      },
      {
        text: 'Chickens',
        link: '/chickens/'
      },
      {
        text: 'Eggs',
        link: '/eggs/'
      },
      {
        text: 'Produce',
        link: '/produce/'
      },
      {
        text: 'Pigs',
        link: '/pigs/'
      },
      {
        text: 'Contact',
        link: '/contact/'
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
